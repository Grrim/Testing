class globalPage {
    get categoryButton() {
        return $("a.link.parent > span.cat-icon-4");
    }

    get acceptAlertButton(){
        return $("button#onetrust-accept-btn-handler");
    }

    get subcategoryButton(){
        return $('//span[contains(text(), "IT / telekomunikacja")]');
    }

    get seeAllAnnouncementButton(){
        return $("div#bottom4 > div.subcategories-title > a > strong");
    }

    get seeAllSubcategories(){
        return $$("div#bottom4.subcategories-list.clr > ul > li > a");
    }

    get searchEngineInput(){
        return $("div.clearbox.rel.fleft.input-container > input");
    }

    get searchEngineIcon(){
        return $("input#submit-searchmain");
    }

    async clickOnSearchButton(){
        const icon:WebdriverIO.Element = await this.searchEngineIcon;
        await icon.waitForDisplayed();
        await browser.pause(500);
        await icon.click();
    }

    async typeInSearchEngine(searchPhrase:string){
        const input:WebdriverIO.Element = await this.searchEngineInput;
        await input.waitForDisplayed();
        await input.setValue(searchPhrase);
    }

    async seeAllCategories():Promise<number>{
        const categories:WebdriverIO.ElementArray = await this.seeAllSubcategories;
        return categories.length;
    }

    async textFromAllAnnouncementButton():Promise<string>{
        const text:WebdriverIO.Element = await this.seeAllAnnouncementButton;
        await text.waitForDisplayed();
        await text.scrollIntoView();
        return await text.getText();
    }

    async openHomePage(pageUrl:string) {
        await browser.url(pageUrl)
        expect(browser).toHaveUrl(pageUrl)
    }

    async clickOnSubcategory(){
        const category:WebdriverIO.Element = await this.subcategoryButton;
        await category.scrollIntoView();
        await category.click();
    }

    async acceptPrivacyAlert(){
        const button:WebdriverIO.Element = await this.acceptAlertButton;
        await button.waitForDisplayed();
        await button.click();
    }

    async clickWorkCategory(){
        const category:WebdriverIO.Element = await this.categoryButton;
        await category.waitForDisplayed();
        await category.scrollIntoView();
        await category.click();
    }
}

export default new globalPage;