import globalPage from "../../pages/globalPage"
import { helionHomeUrl, notFoundUrl, searchPageUrl } from "./../../config/pagesUrl"
import searchBarPage from './../../pages/components/searchBarPage'
import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from './../../config/data'
import searchResultPage from "../../pages/searchResultPage"

describe("e2e - searchbar", async() => {
    it("Should open helion home page and verify", async() => {
        await globalPage.openPage(helionHomeUrl, helionHomeUrl);
        await searchBarPage.searchBarIsVisible();
    })

    it("Should click on search icon and verify", async() => {
        await searchBarPage.clickOnSearchIcon();
        expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("Should type search value and veirfy", async() => {
        await searchBarPage.inputTextinSearchBar(searchPhrase);
        await searchBarPage.suggestPopupIsVisible();
    })

    it("Should click on see all books button", async() => {
        await searchBarPage.clickOnSeeAllBooksButton();
        expect(browser).toHaveUrl(searchPageUrl)
    })

    it("Should verify visible correctly title and number of books", async() => {
        await expect(await searchResultPage.getPageTitle()).toContain(searchResultTitle)
        await expect(await searchResultPage.getNumberOfBooks()).toEqual(20);
    })

    it("Should clear input value", async() => {
        await searchBarPage.cleanSearchBar();
        expect(await searchBarPage.getInputValue()).toContain("");
    })

    it("Should type incorrect book value and verify message", async() => {
        await searchBarPage.inputTextinSearchBar(incorrectSearchPhrase);
        await searchBarPage.clickOnSearchIcon();
        expect(await searchBarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async() => {
        await searchBarPage.cleanSearchBar();
        await searchBarPage.clickOnSearchIcon();
        expect(browser).toHaveUrl(notFoundUrl);
        expect(await searchBarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })
})
