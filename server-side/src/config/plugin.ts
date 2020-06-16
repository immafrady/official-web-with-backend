import { EggPlugin } from 'midway';
export default {
  static: true, // default is true
  cors: {
    enable: true,
    package: 'egg-cors'
  }
} as EggPlugin;
