import homePage from './../../pages/homePage'

describe("Verify Home Page", async () => {
    it("Should open home page", async () => {
        await homePage.openHomePage();
    })

    it("Should move to facebook icon", async() => {
        await homePage.moveToFbIcon();
        await browser.pause(3000);
    })
})
