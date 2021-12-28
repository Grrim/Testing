import { homePageTitle } from "../../lib/wordData"
import homePage from './../../pages/homePage'

describe("Input", async() => {
    it("Should open automationpractise page", async() => {
        await homePage.openHomePage();
        expect(browser).toHaveTitle(homePageTitle);
    })

    it("Should type value to search input", async() =>{
        await homePage.typeValueToInput("Sukienka niebieska");
    })

    it("Should clear search input", async() => {
        await homePage.clearValueInInput();
    })
})