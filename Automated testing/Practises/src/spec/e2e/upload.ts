import { uploaderUrl } from './../../lib/pages'
const path = require("path");

describe("Upload file", async() => {
    it("Should open uploader page and verify", async() => {
        await browser.url(uploaderUrl);
        expect(browser).toHaveUrl(uploaderUrl);
    })

    it("Should upload file and click upload button", async() => {
        const uploader:WebdriverIO.Element = await $("#file-upload");
        const button:WebdriverIO.Element = await $("#file-submit");
        const filePath = path.join(__dirname, "../../images/ziemia.jpg");
        const uploadedFile = await browser.uploadFile(filePath);
        await uploader.setValue(uploadedFile);
        await button.click();
        const uploadedSuccess:WebdriverIO.Element = await $("div#content h3");
        expect(await uploadedSuccess.getText()).toContain("File Uploaded!");
        const uploadedText:WebdriverIO.Element = await $("#uploaded-files");
        expect(await uploadedText.getText()).toContain("ziemia.jpg");
        await browser.pause(4000);
    })
})