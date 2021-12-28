describe("Verify Home Page", async () => {
    it("Should open home page and wait 3000 ms", async () => {
        await browser.url("http://127.0.0.1:8000/home");
        await browser.pause(3000);
    })
})
