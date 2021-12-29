import { TimeoutSettings } from "../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/TimeoutSettings";

class searchResultPage {
    get pageTitle() {
        return $("#pageTitle");
    }

    get booksItem() {
        return $$("ul.list > li");
    }

    get firstBookItem() {
        return $("ul.list > li:nth-child(1) > a");
    }

    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }

    async getNumberOfBooks():Promise<number> {
        const books:WebdriverIO.ElementArray = await this.booksItem;
        return books.length;
    }

    async clickOnFirstBookItem() {
        const item:WebdriverIO.Element = await this.firstBookItem;
        await item.waitForDisplayed();
        await item.click()
    }
}

export default new searchResultPage;