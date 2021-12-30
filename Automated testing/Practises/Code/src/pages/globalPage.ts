import { homeUrl } from './../../src/lib/pages'

class globalPage {
    async openHomePage() {
        await browser.url(homeUrl);
        expect(browser).toHaveUrl(homeUrl + "index.php");
    }

    async midPause() {
        await browser.pause(5000);
    }

    async lowPause() {
        await browser.pause(1000);
    }
}

export default globalPage;