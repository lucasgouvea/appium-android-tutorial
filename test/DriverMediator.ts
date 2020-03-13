import { remote, Element, BrowserObject } from 'webdriverio';
import path from 'path';

enum Strategy {
    ACCESS_ID,
    XPATH
}

class DriverMediator {

    private readonly opts = {
        port: 4723,
        capabilities: {
            platformName: "Android",
            platformVersion: "9",
            deviceName: "Android Emulator",
            app: path.join(__dirname, "..", "app-release.apk"),
            appPackage: "com.appiumtutorial",
            automationName: "UiAutomator2"
        }
    };

    private client: BrowserObject;

    public async init(): Promise<void> {
        this.client = await remote(this.opts);
    }

    public async find(selector: string, strategy: Strategy): Promise<Element> {
        const token = strategy === Strategy.ACCESS_ID ? "~" : "";
        await this.client.waitUntil(async () => {
            const e = await this.client.$(`${token}${selector}`);
            return e.elementId !== undefined;
        }, 15000);
        const element = await this.client.$(`${token}${selector}`);
        return element;
    }

    public async write(text: string, element: Element): Promise<void> {
        await element.setValue(text);
    }

    public async acceptAlert(): Promise<void> {
        await this.client.acceptAlert();
    }

    public async tap(element: Element): Promise<void> {
        await element.click();
    }


}

export default DriverMediator;
export { Strategy };