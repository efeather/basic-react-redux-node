import { RoutePath } from '../../../common'
import * as path from 'path'

export const configuration = new (class {
    get guiUrl(): string {
        return `http:localhost:8080${RoutePath.base}`
    }
    get apiUrl(): string {
        return `http:localhost:8080${RoutePath.webAPI}`
    }
    get logsDir(): string {
        return path.join(__dirname, '..', '..', '..', '..', 'logs')
    }
})()
