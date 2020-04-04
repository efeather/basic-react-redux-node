import 'chromedriver';
import { Builder, logging, WebDriver } from 'selenium-webdriver'

let driver:WebDriver|null = null;

export const getDriver = ():WebDriver =>{
    if(!driver){
        const loggingPrefs:logging.Preferences = new logging.Preferences();
        loggingPrefs.setLevel(logging.Type.BROWSER,logging.Level.ALL);

        driver = new Builder()
            .forBrowser('chrome')
            .withCapabilities(loggingPrefs)
            .build();
    }

    return driver;
};

export const closeDriver = () =>{
    if(driver) {
        driver.close().then(() => driver = null)
    }
};


