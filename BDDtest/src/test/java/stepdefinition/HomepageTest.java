package stepdefinition;
import org.apache.log4j.PropertyConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;

public class HomepageTest {
	public static Logger log=LoggerFactory.getLogger(HomePage.class);
	public static WebDriver wd=null;
	
	@Given("^Check Network$")
	public void checknetwork(){
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Checking Network");
		System.err.println("Checknetwork");
		
	}
	@Given("^Open Browser as (.*)$")
	public void OpenBrowser(String browser) {
		if (wd==null) {
			wd=new FirefoxDriver();	
			
		}
//		System.out.println("Open Brwoser" + browser);
	}

	@Then("^Enter URL as (.*)$")
	public void EnterURL(String url) {
		// int i=1/0;
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Url is: "+url);
		wd.get(url);
//		System.out.println("Enter URL" + url);
	}

	@Then("^Enter Username as (.*)$")
	public void EnterUsername(String username) {
//		System.out.println("Enter Username" + username);
//		wd.findElement(By.xpath(".//*[@id='nameid']")).sendKeys(username);
		HomePage.enterUserName(wd, username);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Username is: "+username);
	}

	@And("^Enter the Mobile Number as (.*)$")
	public void EnterMobile(String mobilenumber) {
//		System.out.println("Enter Mobile" + mobilenumber);
//		wd.findElement(By.xpath(".//*[@id='mobid']")).sendKeys(mobilenumber);
		HomePage.enterMobileNumber(wd, mobilenumber);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Mobile Number is: "+mobilenumber);
	}

	@Then("^Enter the Pick up Address as (.*)$")
	public void PickUp(String pickup) {
//		System.out.println("Enter Pick up Address" + pickup);
//		wd.findElement(By.xpath(".//*[@id='pickid']")).sendKeys(pickup);
		HomePage.enterPickupAddress(wd, pickup);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Pickup Address is: "+pickup);
	}

	@When("^Enter Drop Address as (.*)$")
	public void DropAddress(String drop) {
//		System.out.println("Drop the Address" + drop);
//		wd.findElement(By.xpath(".//*[@id='dropid']")).sendKeys(drop);
		HomePage.enterDropAddress(wd, drop);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Drop Address is: "+drop);
	}

	@Then("^Select Vehicle Type as (.*)$")
	public void SelectVehicle(String vehicle) {
//		System.out.println("Select the Vehiccle" + vehicle);
//		wd.findElement(By.xpath(".//*[@id='vehid']")).sendKeys(vehicle);
		HomePage.selectVehicletype(wd, vehicle);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Enter the Vehicle Type is: "+vehicle);
	}

	@Then("^Click the Book Later$")
	public void BookLater() {
		//System.out.println("Booking Later");
		wd.findElement(By.xpath(".//*[@id='bookLater']")).click();
		HomePage.clickBookLater(wd);
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Booking Later");
	}

	@But("^Don't Click Book Button$")
	public void Dontbook() {
		System.out.println("Dont book");
		PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
		log.info("Don't the Booking");
	}
	@After //====>Scenerio
	public void tearDown(Scenario s) {
		if (s.isFailed()) {
			PropertyConfigurator.configure("D:\\JAVA\\PROJECT\\BDDtest\\Log_Folder\\log4j.properties");
			log.info("Test Case Failed");
			System.err.println("Test Case Failed");
		}else {
			log.info("Test Case Passed");
			System.err.println("Test Case Passed");
		}
	}
}
