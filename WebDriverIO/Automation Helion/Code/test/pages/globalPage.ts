class globalPage {
    async openPage(pageUrl:string, expectedPageUrl:string) {
        await browser.url(pageUrl);
        expect(browser).toHaveUrl(expectedPageUrl);
    }
}

export default new globalPage;