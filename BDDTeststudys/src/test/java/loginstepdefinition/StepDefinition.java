package loginstepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	
	@Given ("^Open broser and enter URL$")
	
	public void Open_broser_and_enter_URL()
	{
		System.out.println("Open broser and enter URL");
	}

	@When("^Enter the username and password$")
	public void Enter_the_username_and_password() {
		System.out.println("Enter the username and password HAI VELMURUGN");
	}
	
	@Then("^Homepage Should be Login$")
	public void Homepage_Should_be_Login()
	{
		System.out.println("Homepage Should be Login");
	}

	@Then("^Logout the Home Page$")
	public void Logout_the_Home_Page()
	{
		System.out.println("Logout the Home Page");
	}

	@And("^Close the browser$")
	public void Close_the_browser()
	{
		System.out.println("Close the browser");
	}

}
