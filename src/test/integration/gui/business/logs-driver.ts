import { configuration } from '../../infrastructure'
import del = require('del')
import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'
import { getDriver } from './driver'

export const cleanLogs = (): PromiseLike<unknown> =>
    del(path.join(configuration.logsDir, '**'))

export const writeLogs = (fileName: string): PromiseLike<unknown> => {
    return makeDir(configuration.logsDir).then(() =>
        Promise.all([
            writeScreenShot(
                path.join(configuration.logsDir, `${fileName}.png`)
            ),
            writeReduxState(
                path.join(configuration.logsDir, `${fileName}.json`)
            ),
            //TODO:Can Add additional logs if needed
        ])
    )
}

const makeDir = (dirPath: string): PromiseLike<void> => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dirPath)) {
            resolve()
        }
        fs.mkdir(dirPath, (error: any) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        })
    })
}

const writeScreenShot = async (filePath: string): Promise<void> => {
    const screenShot = await getDriver().takeScreenshot()
    return writeData(filePath, screenShot)
}

const writeReduxState = async (filePath: string): Promise<void> => {
    const reduxState = await getDriver()
        .executeScript('return window.reduxStore.getState()')
        .then(undefined, error => {
            console.warn('Failed to get reduxState from window', error)
            return { message: 'failed getting redux state' }
        })
    return writeText(filePath, JSON.stringify(reduxState, undefined, 2))
}

const writeData = (
    filePath: string,
    data: string,
    encoding: string = 'base64'
): PromiseLike<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, { encoding }, (error: any) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        })
    })
}

const writeText = (filePath: string, text: string): PromiseLike<void> =>
    writeData(filePath, text, 'utf-8')
