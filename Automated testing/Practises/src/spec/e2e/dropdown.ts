import { productUrl } from './../../lib/pages'

describe("Select", async() => {
    it("Should open product page and verify", async() => {
        browser.url(productUrl);
        expect(browser).toHaveUrl(productUrl)
    })

    it("Should select product size", async() => {
        const select:WebdriverIO.Element = await $("#group_1");
        //await select.selectByAttribute("title", "M");
        //await select.selectByVisibleText("M");
        await select.selectByIndex(1);
        await browser.pause(2000);
        expect(await select.getValue()).toContain("2")
    })
})