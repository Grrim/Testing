import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;
import java.util.ArrayList;


public class addProductToCart {
    WebDriver driver;

    @BeforeEach
    public void loadDriver(){
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterEach
    public void quitTest(){
        driver.quit();
    }

    @Test
    public void takeProductToCart(){
        //Przejście na stronę eBay.com
        driver.navigate().to("https://www.ebay.com/");
        String homeSite = "https://www.ebay.com/";
        Assertions.assertEquals(homeSite, driver.getCurrentUrl(), "Podane strony różnią się od siebie");

        //Wpisanie w wyszukiwarkę wartości "book" i naciśnięcie przycisku potwierdzającego obok
        WebElement input = driver.findElement(By.cssSelector("input.gh-tb.ui-autocomplete-input"));
        input.sendKeys("book");
        driver.findElement(By.cssSelector("input.btn.btn-prim.gh-spr")).click();
        Assertions.assertTrue(driver.getCurrentUrl().contains("nkw=book"), "Podane strony się różnią");

        //Wybranie pierwszego produktu z listy
        String titleSearchPage = driver.findElement(By.cssSelector("ul.srp-results.srp-list.clearfix > li:nth-child(2) > div > div:nth-child(2) > a > h3")).getText();
        driver.findElement(By.cssSelector("ul.srp-results.srp-list.clearfix > li:nth-child(2) > div > div >div > a > div > img")).click();
        ArrayList tabs = new ArrayList (driver.getWindowHandles());
        driver.switchTo().window((String) tabs.get(1));
        String titleProductPage = driver.findElement(By.cssSelector("h1.it-ttl")).getText();
        String costProductPage = driver.findElement(By.cssSelector("div#vi-mskumap-none > span:nth-child(1)")).getText();
        Assertions.assertTrue(driver.getTitle().contains(titleSearchPage), "Strony produktu się róźnią");
        Assertions.assertEquals(titleSearchPage, titleProductPage, "Tytuły książek róźnią się");

        //Naciśnięcie przycisku "Add to cart" i sprawdzenie poprawności
        String statement = "1 item added to cart";
        driver.findElement(By.cssSelector("a#atcRedesignId_btn")).click();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        String itemAdded = driver.findElement(By.cssSelector("h2.vi-overlayTitleBar")).getText();
        WebElement button = driver.findElement(By.cssSelector("a.btn.btn-scnd.vi-VR-btnWdth-XL:nth-child(2)"));
        Assertions.assertEquals(statement, itemAdded, "Komunikaty się nie zgadzają");
        Assertions.assertTrue(button.isDisplayed(), "Przycisk jest niewidoczny");

        //Kliknięcie przycisku "Go to cart" i sprawdzenie poprawności
        button.click();
        String cartPage = "https://cart.ebay.com/";
        String titleCartPage = driver.findElement(By.cssSelector("span.BOLD")).getText();
        String costCartPage = driver.findElement(By.cssSelector("div.item-price")).getText();
        Assertions.assertEquals(cartPage, driver.getCurrentUrl(),"Strony różnią się od siebie");
        Assertions.assertEquals(titleProductPage, titleCartPage, "Tytuły książek róźnią się");
        Assertions.assertTrue(costProductPage.contains(costCartPage), "Ceny różnią się");

        //Usunięcie przedmiotu z koszyka i weryfikacja
        driver.findElement(By.cssSelector("button[data-test-id=\"cart-remove-item\"]")).click();
        String removedAlert = driver.findElement(By.cssSelector("div.page-alert.page-alert--confirmation > p")).getText();
        Assertions.assertTrue(removedAlert.contains(titleCartPage + " was removed from your cart."));
    }
}
