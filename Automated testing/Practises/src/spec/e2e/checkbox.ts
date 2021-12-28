import { homeUrl, womenUrl } from "./../../lib/pages"

describe("Checkbox", async() => {
    it("Should open automationpractise page", async() => {
        await browser.url(homeUrl);
        expect(browser).toHaveUrl(homeUrl + "index.php");
    })

    it("Should click on women page and verify", async() => {
        const womenPage:WebdriverIO.Element = await $("a[title='Women']")
        await womenPage.click();
        expect(browser).toHaveUrl(womenUrl);
    })

    it("Should check tops checkbox", async() => {
        const checkbox:WebdriverIO.Element = await $("#layered_category_4")
        await checkbox.click();
        expect(checkbox).toBeSelected();
        //expect(await checkbox.isSelected()).toBeFalsy();
    })

    it("Should check multiple checkbox", async() => {
        const checkboxes:WebdriverIO.ElementArray = await $$("#ul_layered_id_attribute_group_1 > li > div > span > input");
        checkboxes.map(async item => {
            await item.click();
        })
        await browser.pause(3000);
    })
})