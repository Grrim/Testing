import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.beans.PropertyChangeListener;
import java.util.ArrayList;
import java.util.List;

public class userRegistration {
    WebDriver driver;

    @BeforeEach
    public void loadDriver(){
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://www.ebay.com/");
    }

    @AfterEach
    public void quitTest(){
        driver.quit();
    }

    @Test
    public void checkUserRegistration(){
        //Wpisanie w wyszukiwarkę wartości "book" i naciśnięcie przycisku potwierdzającego obok
        WebElement input = driver.findElement(By.cssSelector("input.gh-tb.ui-autocomplete-input"));
        input.sendKeys("book");
        driver.findElement(By.cssSelector("input.btn.btn-prim.gh-spr")).click();
        Assertions.assertTrue(driver.getCurrentUrl().contains("nkw=book"), "Podane strony się różnią");

        //Wybranie drugiego produktu z listy i przekierowanie do karty z produktem
        String productUrl = "https://www.ebay.com/itm";
        WebElement product = driver.findElement(By.cssSelector("ul.srp-results.srp-list.clearfix > li:nth-child(2) > div > div.s-item__info.clearfix > a > h3"));
        String searchProductTitle = product.getText();
        product.click();
        ArrayList tab = new ArrayList(driver.getWindowHandles());
        driver.switchTo().window((String) tab.get(1));
        String productTitle = driver.findElement(By.cssSelector("h1.it-ttl")).getText();
        Assertions.assertTrue(driver.getCurrentUrl().contains(productUrl), "Strony różnią się od siebie");
        Assertions.assertEquals(searchProductTitle, productTitle, "Tytuły różnią się od siebie");

        //Kliknięcie przycisku "Buy it Now" i sprawdzenie poprawności
        driver.findElement(By.cssSelector("div.vi-flex-cta:nth-child(1)")).click();
        List<WebElement> counter = driver.findElements(By.cssSelector("div#streamline-bin-layer"));
        if (counter.size() != 0){
            driver.findElement(By.cssSelector("button#sbin-signin-btn")).click();
        }
        WebElement buttonGoogle = driver.findElement(By.cssSelector("button#signin_ggl_btn"));
        String loginUrl = "https://signin.ebay.com/";
        Assertions.assertTrue(driver.getCurrentUrl().contains(loginUrl), "Strony róznią się od siebie");
        Assertions.assertTrue(buttonGoogle.isDisplayed());

        //Kliknięcie w "create an account" i sprawdzenie poprawności
        driver.findElement(By.cssSelector("a#create-account-link")).click();
        WebElement checkbox = driver.findElement(By.xpath("//input[@value=\"personalaccount\"]"));
        String registerUrl = "https://signup.ebay.com/";
        Assertions.assertTrue(driver.getCurrentUrl().contains(registerUrl));
        Assertions.assertTrue(checkbox.isEnabled());

        //Wpisanie w pola rejestracji danych podanych w przypadku testowym
        driver.findElement(By.cssSelector("input#firstname")).sendKeys("Test");
        driver.findElement(By.cssSelector("input#lastname")).sendKeys("User");
        driver.findElement(By.cssSelector("input#Email")).sendKeys("test@gmail.com");
        driver.findElement(By.cssSelector("input#password")).sendKeys("test");
        driver.findElement(By.cssSelector("input#showpassword")).click();
        String passwordAlert = driver.findElement(By.cssSelector("span#password_err")).getText();
        Assertions.assertTrue(passwordAlert.contains("At least 1 letter, a number or symbol, at least 6 characters."));

        //Usunięcie wartości znajdujących się w polach rejestracji
        driver.findElement(By.cssSelector("input#firstname")).clear();
        driver.findElement(By.cssSelector("input#lastname")).clear();
        driver.findElement(By.cssSelector("input#Email")).clear();
        driver.findElement(By.cssSelector("input#password")).clear();
        String firstNameClearAlert = driver.findElement(By.cssSelector("span#firstname_err")).getText();
        String lastNameClearAlert = driver.findElement(By.cssSelector("span#lastname_err")).getText();
        String emailClearAlert = driver.findElement(By.cssSelector("span#Email_err")).getText();
        String passwordClearAlert = driver.findElement(By.cssSelector("span#password_err")).getText();
        Assertions.assertTrue(firstNameClearAlert.contains("Please enter your first name"));
        Assertions.assertTrue(lastNameClearAlert.contains("Please enter your last name"));
        Assertions.assertTrue(emailClearAlert.contains("Please enter your email address."));
        Assertions.assertTrue(passwordClearAlert.contains("Please enter a password"));

        //Kliknięcie w logo serwisu eBay
        driver.findElement(By.cssSelector("a#gh-la")).click();
        Assertions.assertEquals("https://www.ebay.com/", driver.getCurrentUrl(), "Strony się różnią");
    }
}
