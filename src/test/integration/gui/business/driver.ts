import 'chromedriver'
import { Builder, Capabilities, logging, WebDriver } from 'selenium-webdriver'

let driver: WebDriver | null = null

export const getDriver = (): WebDriver => {
    if (!driver) {
        const loggingPrefs: logging.Preferences = new logging.Preferences()
        loggingPrefs.setLevel(logging.Type.BROWSER, logging.Level.ALL)

        driver = new Builder()
            .forBrowser('chrome')
            .withCapabilities(
                Capabilities.chrome().setLoggingPrefs(loggingPrefs)
            )
            .build()
    }

    return driver
}

export const quitDriver = () => {
    if (driver) {
        driver.quit().then(() => (driver = null))
    }
}
