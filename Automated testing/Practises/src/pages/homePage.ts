import globalPage from "./globalPage";

class homePage extends globalPage {
    get icon() {
        return $("li.facebook");
    }

    get input() {
        return $("#search_query_top");
    }

    async moveToFbIcon() {
        const icon:WebdriverIO.Element = await this.icon;
        await icon.scrollIntoView();
        await icon.moveTo();
        await browser.pause(3000);
    }

    async typeValueToInput(searchPhrase: string) {
        const input:WebdriverIO.Element = await this.input
        await input.setValue(searchPhrase);
        await this.lowPause();
        expect(await input.getValue()).toContain(searchPhrase);
    }

    async clearValueInInput() {
        const input:WebdriverIO.Element = await this.input
        await input.clearValue();
        await this.lowPause();
        expect(await input.getValue()).toContain("");
    }
}

export default new homePage();