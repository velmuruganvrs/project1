package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "D:\\Selenium Wrokphase\\PROJECT\\BDDTeststudys\\src\\test\\resources\\Features\\Login.feature", glue = "loginstepdefinition")
public class LoginRunner {

}
