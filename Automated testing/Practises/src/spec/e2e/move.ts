import { homeUrl } from './../../lib/pages'
import homePage from "./../../pages/homePage"

describe("Move into view", async() => {
    it("Should open automation practice page and verify url", async() => {
        await homePage.openHomePage();
    })

    it("Should scroll into view facebook icon", async() => {
        const icon:WebdriverIO.Element = await $("li.facebook");
        await icon.scrollIntoView();
    })

    it("Should hover on women tab", async() => {
        const icon:WebdriverIO.Element = await $("a[title=Women]");
        await icon.scrollIntoView();
        const tab:WebdriverIO.Element = await $("a[title=Women]");
        await tab.moveTo();
        await browser.pause(4000);
    })
})
