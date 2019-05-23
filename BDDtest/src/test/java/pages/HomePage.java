package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class HomePage {
	
	public static void enterUserName(WebDriver wd, String username) {
		wd.findElement(By.xpath(".//*[@id='nameid']")).sendKeys(username);
	}

	public static void enterMobileNumber(WebDriver wd, String mobilenumber) {
		wd.findElement(By.xpath(".//*[@id='mobid']")).sendKeys(mobilenumber);
	}

	public static void enterPickupAddress(WebDriver wd, String pickupaddress) {
		wd.findElement(By.xpath(".//*[@id='pickid']")).sendKeys(pickupaddress);
	}

	public static void enterDropAddress(WebDriver wd, String dropaddress) {
		wd.findElement(By.xpath(".//*[@id='dropid']")).sendKeys(dropaddress);
	}

	public static void selectVehicletype(WebDriver wd, String vtype) {
		WebElement element = wd.findElement(By.xpath(".//*[@id='vehid']"));
		Select s = new Select(element);
		s.selectByVisibleText(vtype);
	}

	public static void clickBookLater(WebDriver wd) {
		wd.findElement(By.xpath(".//*[@id='bookLater']")).click();
	}
}
