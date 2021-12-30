class categoryPage {
    get specializationButton(){
        return $("a.button.gray.block.category");
    }

    get chooseSpecialization(){
        return $("a.tdnone.block.c27.brbott-4.category-choose.category_choose1717");
    }

    get announcementList(){
        return $$("table#offers_table > tbody > tr.wrap > td");
    }

    get fourthAnnouncement(){
        return $("table#offers_table > tbody > tr:nth-child(6) > td > div > table > tbody > tr > td > div > h3 > a");
    }

    get otherAnnouncementsTitle(){
        return $("div.hasPromoted.section.clr > h2");
    }

    get localizationInput(){
        return $("input#cityField");
    }

    get searchIcon(){
        return $("input#search-submit");
    }

    get checkboxOnlyWithPhoto(){
        return $("div.checkboxsepa.clr > div:nth-child(2) >label.icon.f_checkbox.fleft.marginright5");
    }

    get secondAnnouncement(){
        return $("table#offers_table > tbody > tr:nth-child(4) > td > div > table > tbody > tr > td > div > h3 > a");
    }
    
    get announcementTitle(){
        return $("table#offers_table > tbody > tr:nth-child(4) > td > div > table > tbody > tr > td > div > h3 > a > strong");
    }

    async getTitleFromAnnouncement():Promise<string>{
        const title:WebdriverIO.Element = await this.announcementTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnCheckboxOnlyWithPhoto(){
        const checkbox:WebdriverIO.Element = await this.checkboxOnlyWithPhoto;
        await checkbox.waitForDisplayed();
        await checkbox.click();
    }

    async clickOnSearchIcon(){
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async typeInLocalizationInput(localization:string){
        const input:WebdriverIO.Element = await this.localizationInput;
        await input.waitForDisplayed();
        await input.setValue(localization);
        expect (input.getValue()).toBeTruthy();
    }

    async getOtherAnnouncementTitle():Promise<string>{
        const title:WebdriverIO.Element = await this.otherAnnouncementsTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async getNumberOfAnnoncements():Promise<number>{
        const number:WebdriverIO.ElementArray = await this.announcementList;
        return number.length;
    }

    async clickOnFourthAnnouncement(){
        const announcement:WebdriverIO.Element = await this.fourthAnnouncement;
        await announcement.waitForDisplayed();
        await announcement.scrollIntoView();
        await browser.pause(500);
        await announcement.click();
    }

    async clickOnSecondAnnouncement(){
        const announcement:WebdriverIO.Element = await this.secondAnnouncement;
        await announcement.waitForDisplayed();
        await announcement.scrollIntoView();
        await browser.pause(500);
        await announcement.click();
    }

    async clickOnSpecializationCategory(){
        const button:WebdriverIO.Element = await this.chooseSpecialization;
        await button.waitForDisplayed();
        await button.scrollIntoView();
        await button.click();
        await browser.pause(500);
    }

    async clickOnSpecializationButton(){
        const button:WebdriverIO.Element = await this.specializationButton;
        await button.waitForDisplayed();
        await button.scrollIntoView();
        await button.click();
        await browser.pause(500);
    }
}

export default new categoryPage;