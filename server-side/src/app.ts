import { Application, EggContextLogger } from 'midway'
import { LOGGER_SYSTEM } from "./inject-token";
import { Db } from "./db/db";

module.exports = (app: Application) => {
    app.beforeStart(async () => {
        const logger: EggContextLogger = app.getLogger(LOGGER_SYSTEM)
        logger.info('database: loading...')
        try {
            await Db.createConnection(app)
            logger.info('database: connected')
        } catch (e) {
            logger.error('database: ', e.toString())
        }
    })
}
