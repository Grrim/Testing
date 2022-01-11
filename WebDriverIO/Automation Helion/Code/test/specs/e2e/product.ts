import { alertMessage, deletedProductMessage, searchPhrase } from "../../config/data";
import { cartUrl, helionHomeUrl, searchProductUrl } from "../../config/pagesUrl"
import cartPage from "../../pages/cartPage";
import searchBarPage from "../../pages/components/searchBarPage";
import productPage from "../../pages/productPage";
import searchResultPage from "../../pages/searchResultPage";

describe("e2e - products", async() => {
    let productTitle:string;
    let price:string;

    before(() => {
        browser.url(helionHomeUrl);
    })

    it("Should type search phrase and click search icon", async() => {
        await searchBarPage.inputTextinSearchBar(searchPhrase);
        await searchBarPage.clickOnSearchIcon();
        expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first book", async() => {
        await searchResultPage.clickOnFirstBookItem();
        await productPage.productTitleIsVisible();
        await productPage.addToCartButtonIsVisible();
        productTitle = await productPage.getProductTitelValue();
        price = await productPage.getProductPrice();
    })

    it("Should click on add to cart button", async() => {
        await productPage.clickOnAddToCartButton();
        expect(browser).toHaveUrlContaining(cartUrl);
        expect(await cartPage.getSuccessAlertValue()).toContain(productTitle);
        expect(await cartPage.getTotalPrice()).toContain(price);
    })

    it("Should delete product from cart", async() => {
        await cartPage.clickOnCheckbox();
        await cartPage.clickOnSelectedLabel();
        expect(await browser.getAlertText()).toContain(alertMessage);
        await cartPage.acceptDeleteAlert();
        expect(await cartPage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
    })
})