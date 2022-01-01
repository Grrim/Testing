class announcementPage {
    get addToOfollowed(){
        return $("svg.css-2w6afv");
    }

    get alertMessage(){
        return $("p.css-1wzs5vm-Text.eu5v0x0");
    }

    get galeryExtensionButton(){
        return $("button.gallery-open > img");
    }

    get sendMessageButton(){
        return $("button.css-9rt1gu-BaseStyles");
    }

    get announcementTitleFromGalleryExtension(){
        return $("div.css-sg1fy9 > h1.css-1mlqzhq-Text.eu5v0x0");
    }

    async verifyAnnouncementTitleFromGalleryExtension():Promise<string>{
        const title:WebdriverIO.Element = await this.announcementTitleFromGalleryExtension;
        await title.waitForDisplayed()
        return await title.getText();
    }

    async verifySendMessageButton():Promise<string>{
        const button:WebdriverIO.Element = await this.sendMessageButton;
        await button.waitForDisplayed();
        return await button.getText();
    }

    async clickOnGaleryExtensionButton(){
        const button:WebdriverIO.Element = await this.galeryExtensionButton;
        await button.waitForDisplayed();
        await button.click();
    }

    async getAlertMessageText():Promise<string>{
        const message:WebdriverIO.Element = await this.alertMessage;
        await message.waitForDisplayed();
        return await message.getText();
    }

    async clickOnAddToFollowedIcon(){
        const icon:WebdriverIO.Element = await this.addToOfollowed;
        await icon.waitForDisplayed();
        await icon.scrollIntoView();
        await icon.click();
    }
}

export default new announcementPage;