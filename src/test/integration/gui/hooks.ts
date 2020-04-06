import { cleanLogs, getDriver, quitDriver, writeLogs } from './business'
import { After, AfterAll, Before, BeforeAll, Status } from 'cucumber'
import { configuration } from '../infrastructure'

BeforeAll(() => {
    cleanLogs()
})

Before(() =>
    getDriver()
        .navigate()
        .to(configuration.guiUrl)
)

After(scenario => {
    if (scenario.result.status === Status.FAILED) {
        const fileName: string = `${scenario.sourceLocation.uri}_${scenario.sourceLocation.line}`.replace(
            /[^\w]/g,
            '_'
        )
        writeLogs(fileName)
    }
})

AfterAll(() => quitDriver())
