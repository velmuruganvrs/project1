@homepage
Feature: Validate NTL Taxi Homepage
Background:
Check Network
Scenario Outline: Validate Homepage with valid data
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
And Enter the Mobile Number as <MOBILENUMBER>
Then Enter the Pick up Address as <PICKUPADDRESS>
When Enter Drop Address as <DROPADDRESS>
Then Select Vehicle Type as <VTYPE>
Then Click the Book Later 
But Don't Click Book Button

Examples:
|BROWSER|URL|USERNAME|MOBILENUMBER|PICKUPADDRESS|DROPADDRESS|VTYPE|
|Firefox|http://www.ntltaxi.com/index.php|VmetryA|1111|ADYAR|ADYAR|Sedan|
|Firefox|http://www.ntltaxi.com/index.php|VmetryB|2222|ADYAR|ADYAR|Sedan|
|Firefox|http://www.ntltaxi.com/index.php|VmetryC|3333|ADYAR|ADYAR|Sedan|
|Firefox|http://www.ntltaxi.com/index.php|VmetryD|4444|ADYAR|ADYAR|Sedan|

#Scenario: Validate Homepage with valid data
#Given Open Browser as Firefox
#Then Enter URL as http://www.ntltaxi.com/index.php
#Then Enter Username as Vmetry
#And Enter the Mobile Number as 123456789
#Then Enter the Pick up Address as adyar
#When Enter Drop Address as adyar
#Then Select Vehicle Type as Sedan
#Then Click the Book Later 
#But Don't Click Book Button



