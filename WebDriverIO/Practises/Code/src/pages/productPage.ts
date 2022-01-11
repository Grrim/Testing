import { productUrl } from "../lib/pages";

class productPage {
    get select() {
        return $("#group_1")
    }

    async openProductPage() {
        await browser.url(productUrl);
        expect(browser).toHaveUrl(productUrl);
    }

    async selectProductSize(size: number) {
        const select:WebdriverIO.Element = await this.select
        //await select.selectByAttribute("title", "M");
        //await select.selectByVisibleText("M");
        await select.selectByIndex(size);
        await browser.pause(2000);
        expect(await select.getValue()).toContain("1")
    }
}

export default new productPage;