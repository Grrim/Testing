import { homeUrl } from "../../lib/pages"
import { searchPhrase, homePageTitle } from "../../lib/wordData"

describe("Input", async() => {
    it("Should open automationpractise page", async() => {
        await browser.url(homeUrl);
        expect(browser).toHaveUrl(homeUrl + "index.php");
        expect(browser).toHaveTitle(homePageTitle);
    })

    it("Should type value to search input", async() =>{
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.setValue(searchPhrase);
        expect(await input.getValue()).toContain(searchPhrase);
    })

    it("Should clear search input", async() => {
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.clearValue();
        expect(await input.getValue()).toContain("");
    })
})