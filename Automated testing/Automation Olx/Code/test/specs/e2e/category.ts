import { announcementUrl, categoryUrl, homeUrl, specializationUrl } from "../../config/pagesUrl";
import { addToFollowedMessage, lookOtherAnnouncementButton, otherAnnouncementsTitle } from "../../config/data"
import globalPage from "../../pages/globalPage";
import categoryPage from "../../pages/categoryPage";
import announcementPage from "../../pages/announcementPage";

describe("e2e - category", async() => {
    it("Should open olx home page and verify", async() => {
        await globalPage.openHomePage(homeUrl);
    })

    it("Should click accept in privacy statement", async() => {
        await globalPage.acceptPrivacyAlert();
    })

    it("Should click on category work", async() => {
        await globalPage.clickWorkCategory();
        expect(await globalPage.textFromAllAnnouncementButton()).toContain(lookOtherAnnouncementButton);
        expect(await globalPage.seeAllCategories()).toEqual(32);
    })

    it("Should click on subcategory IT / telecommunication", async() => {
        await globalPage.clickOnSubcategory();
        expect(browser).toHaveUrl(categoryUrl);
    })

    it("Should expand list of specialization and choose Tester", async() => {
        await categoryPage.clickOnSpecializationButton();
        await categoryPage.clickOnSpecializationCategory();
        expect(browser).toHaveUrl(specializationUrl);
        expect(await categoryPage.getOtherAnnouncementTitle()).toContain(otherAnnouncementsTitle);
        expect(await categoryPage.getNumberOfAnnoncements()).toEqual(39);
    })

    it("Should click on fourth announcement under the heading other announcements", async() => {
        await categoryPage.clickOnFourthAnnouncement();
        expect(browser).toHaveUrlContaining(announcementUrl);
    })

    it("Should click on add to followed icon and verify that it is clicked", async() => {
        await announcementPage.clickOnAddToFollowedIcon();
        expect(await announcementPage.getAlertMessageText()).toContain(addToFollowedMessage);
    })
})