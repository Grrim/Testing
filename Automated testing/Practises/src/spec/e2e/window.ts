import { homeUrl, womenUrl } from './../../lib/pages'

describe("Window", async() => {
    it("Should open home page", async() => {
        await browser.url(homeUrl);
        expect(browser).toHaveUrl(homeUrl + "index.php");
    })

    it("Should open women page in new window", async() => {
        await browser.newWindow(womenUrl);
        await browser.pause(2000);
    })

    it("Should verify title new window", async() => {
        const openWindows = await browser.getWindowHandles()
        await browser.switchToWindow(openWindows[0]);
        expect(browser).toHaveTitle("My Store");
        //const windowTitle1:string = await browser.getTitle();
        //expect(windowTitle1).toContain("My Store");

        await browser.switchToWindow(openWindows[1]);
        expect(browser).toHaveTitle("Women - My Store")
    })
})

