package runnertest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags = { "@homepage" }, format = { "pretty", "html:Report" },features={"D:\\JAVA\\PROJECT\\BDDtest\\src\\test\\resources\\Features"},glue={"stepdefinition"})
public class RunnerTest {
	
}

// pretty is format
