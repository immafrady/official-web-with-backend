import { ResponseCode } from '../libs/response-code';

export function responseLoggerBuilder(httpCode: number, responseCode: ResponseCode, url: string, method: string, message: string, data?: any) {
    return `Url: ${url}, Method: ${method} -- [${httpCode}:${responseCode}](${message}) ${data ? `-- ${JSON.stringify(data)}` : ''}`
}
