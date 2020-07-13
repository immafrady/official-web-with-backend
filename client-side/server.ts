import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import * as proxy from 'express-http-proxy';
import * as domino from 'domino';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';
import * as path from 'path';

const distFolder = join(process.cwd(), 'dist/client-side/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

const templateA = readFileSync(path.join(distFolder, "index.html")).toString();
const win = domino.createWindow(templateA);
// @ts-ignore
win.Object = Object;
// @ts-ignore
win.Math = Math;

// @ts-ignore
global["window"] = win;
global["document"] = win.document;
global["branch"] = null;
// @ts-ignore
global["object"] = win.object;
// @ts-ignore
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;
// global['localStorage'] = localStorage; // 报错

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use('/api', proxy('http://localhost:7001', {
    proxyReqPathResolver: function (req) {
      const parts = req.url.split('?');
      const queryString = parts[1];
      const updatedPath = parts[0].replace(/\/api/, '');
      return updatedPath + (queryString ? '?' + queryString : '');
    }
  }))
  // 以下路由不走服务端渲染(IE好像无法渲染)
  server.get('/admin/*', (req, res) => {
    res.sendFile(join(distFolder, 'index.html'));
  });
  server.get('/admin', (req, res) => {
    res.sendFile(join(distFolder, 'index.html'));
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
