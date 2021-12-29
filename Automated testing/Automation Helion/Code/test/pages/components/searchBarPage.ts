class searchBarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]");
    }

    get suggestPopup() {
        return $("form#szukanie div.suggest-list");
    }

    get seeAllBooksButton() {
        return $("form#szukanie li > p > a");
    }

    get notFoundAlert() {
        return $("div.not-found")
    }

    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async clickOnSearchIcon() {
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async inputTextinSearchBar(value:string) {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
        await browser.pause(2000);
    }

    async suggestPopupIsVisible() {
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
    }

    async clickOnSeeAllBooksButton() {
        const button:WebdriverIO.Element = await this.seeAllBooksButton;
        await button.waitForDisplayed();
        await button.scrollIntoView();
        await button.click();
    }

    async cleanSearchBar() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async getInputValue():Promise<string> {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async getNotFoundAlertText():Promise<string> {
        const alert:WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}

export default new searchBarPage;