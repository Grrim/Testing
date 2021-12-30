import { alertUrl } from './../../lib/pages'

describe("Alerts", async() => {
    it("Should open page and verify", async() => {
        browser.url(alertUrl);
        expect(browser).toHaveUrl(alertUrl);
    })

    it("Should click on the button and get text on the alert", async() => {
        const button:WebdriverIO.Element = await $(".btn-danger");
        await button.click();
        const alertText:string = await browser.getAlertText();
        expect(alertText).toContain("I am an alert box");
        expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.acceptAlert();
        await browser.pause(2000);
    })

    it("Should verify confirm alert", async() => {
        const confirmAlert:WebdriverIO.Element = await $("//a[contains(text(), 'Alert with OK & Cancel')]");
        await confirmAlert.click();
        const button:WebdriverIO.Element = await $("button.btn-primary");
        await button.click();
        const alertText:string = await browser.getAlertText();
        expect(alertText).toContain("Press a Button !");
        expect(await browser.isAlertOpen()).toBeTruthy();
        //await browser.acceptAlert();
        await browser.dismissAlert();
        const pelement:WebdriverIO.Element = await $("#demo");
        const validationMessage:string = await pelement.getText();
        expect(validationMessage).toContain("You Pressed Cancel");
        await browser.pause(2000);
    })

    it("Should verify prompt alert", async() => {
        const promptAlert:WebdriverIO.Element = await $("//a[contains(text(), 'Alert with Textbox')]");
        await promptAlert.click();
        const button:WebdriverIO.Element = await $("button.btn-info");
        await button.click();
        await browser.sendAlertText("Grim")
        await browser.acceptAlert();
        const pelement:WebdriverIO.Element = await $("#demo1");
        expect(await pelement.getText()).toContain("Hello Grim How are you today")
        await browser.pause(2000);

    })
})