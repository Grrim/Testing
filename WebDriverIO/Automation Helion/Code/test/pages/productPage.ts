class productPage {
    get productTitle() {
        return $("h1>span:nth-child(1)");
    }

    get addToCartButton(){
        return $("#addToBasket_vwdtnp_w");
    }

    get bookPirce(){
        return $("#cena_w");
    }

    async getProductPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.bookPirce;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async productTitleIsVisible() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        await title.scrollIntoView();
    }

    async addToCartButtonIsVisible(){
        const button:WebdriverIO.Element = await this.addToCartButton;
        await button.waitForDisplayed();
    }

    async clickOnAddToCartButton(){
        const button:WebdriverIO.Element = await this.addToCartButton;
        await button.waitForDisplayed();
        await button.click();
    }

    async getProductTitelValue():Promise<string>{
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }
}

export default new productPage;