import productPage from '../../pages/productPage'
import { productUrl } from './../../lib/pages'

describe("Select", async() => {
    it("Should open product page and verify", async() => {
        await productPage.openProductPage();
    })

    it("Should select product size", async() => {
        await productPage.selectProductSize(0);
    })
})