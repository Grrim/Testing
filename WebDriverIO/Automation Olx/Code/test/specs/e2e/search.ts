import { homeUrl, searchtUrl, searchLocalizationUrl, itemUrl, galleryExtensionUrl } from '../../config/pagesUrl'
import globalPage from '../../pages/globalPage';
import { searchEngineValue, searchEngineLocalization, sendMessageAlert } from "../../config/data"
import categoryPage from '../../pages/categoryPage';
import announcementPage from '../../pages/announcementPage';

describe("e2e - engine search", async() => {
    let announcementTitle:string = "";

    before(() => {
        browser.url(homeUrl);
    })

    it("Should click accept in privacy statement", async() => {
        await globalPage.acceptPrivacyAlert();
    })

    it("Should type in search engine value Tablet and click on button search", async() => {
        await globalPage.typeInSearchEngine(searchEngineValue);
        await globalPage.clickOnSearchButton();
        expect(browser).toHaveUrl(searchtUrl)
    })

    it("Should choose Szczecin in localization input and verify url", async() => {
        await categoryPage.typeInLocalizationInput(searchEngineLocalization);
        await categoryPage.clickOnSearchIcon();
        expect(browser).toHaveUrl(searchLocalizationUrl);
    })

    it("Should click on input only with photo below search engine and verify it is clicked", async() => {
        await categoryPage.clickOnCheckboxOnlyWithPhoto();
    })

    it("Should click on second announcement and move to announcement page", async() => {
        announcementTitle =  await categoryPage.getTitleFromAnnouncement();
        await categoryPage.clickOnSecondAnnouncement();
        expect(browser).toHaveUrlContaining(itemUrl)
    })

    it("Should click on gallery extension button located in lower right corner", async() => {
        await announcementPage.clickOnGaleryExtensionButton();
        expect(browser).toHaveUrlContaining(galleryExtensionUrl)
        expect(await announcementPage.verifySendMessageButton()).toContain(sendMessageAlert);
        expect(await announcementPage.verifyAnnouncementTitleFromGalleryExtension()).toContain(announcementTitle);
    })
})