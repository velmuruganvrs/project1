$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "Validate NTL Taxi Homepage",
  "description": "",
  "id": "validate-ntl-taxi-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Homepage with valid data",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the Mobile Number as \u003cMOBILENUMBER\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the Pick up Address as \u003cPICKUPADDRESS\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as \u003cDROPADDRESS\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as \u003cVTYPE\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click the Book Later",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Don\u0027t Click Book Button",
  "keyword": "But "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "MOBILENUMBER",
        "PICKUPADDRESS",
        "DROPADDRESS",
        "VTYPE"
      ],
      "line": 17,
      "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;1"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/index.php",
        "VmetryA",
        "1111",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 18,
      "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;2"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/index.php",
        "VmetryB",
        "2222",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 19,
      "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;3"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/index.php",
        "VmetryC",
        "3333",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 20,
      "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;4"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/index.php",
        "VmetryD",
        "4444",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 21,
      "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "Check Network",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Homepage with valid data",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as http://www.ntltaxi.com/index.php",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryA",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the Mobile Number as 1111",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the Pick up Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click the Book Later",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Don\u0027t Click Book Button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomepageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 7766747796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/index.php",
      "offset": 13
    }
  ],
  "location": "HomepageTest.EnterURL(String)"
});
formatter.result({
  "duration": 4386016965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryA",
      "offset": 18
    }
  ],
  "location": "HomepageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 175985619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 27
    }
  ],
  "location": "HomepageTest.EnterMobile(String)"
});
formatter.result({
  "duration": 1003198489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 29
    }
  ],
  "location": "HomepageTest.PickUp(String)"
});
formatter.result({
  "duration": 103613903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomepageTest.DropAddress(String)"
});
formatter.result({
  "duration": 109684652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomepageTest.SelectVehicle(String)"
});
formatter.result({
  "duration": 271191548,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.BookLater()"
});
formatter.result({
  "duration": 267996834,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.Dontbook()"
});
formatter.result({
  "duration": 2451634,
  "status": "passed"
});
formatter.after({
  "duration": 388153,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "Check Network",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Homepage with valid data",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as http://www.ntltaxi.com/index.php",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryB",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the Mobile Number as 2222",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the Pick up Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click the Book Later",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Don\u0027t Click Book Button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomepageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 50595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/index.php",
      "offset": 13
    }
  ],
  "location": "HomepageTest.EnterURL(String)"
});
formatter.result({
  "duration": 372180508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryB",
      "offset": 18
    }
  ],
  "location": "HomepageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 93316135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 27
    }
  ],
  "location": "HomepageTest.EnterMobile(String)"
});
formatter.result({
  "duration": 86200998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 29
    }
  ],
  "location": "HomepageTest.PickUp(String)"
});
formatter.result({
  "duration": 92045953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomepageTest.DropAddress(String)"
});
formatter.result({
  "duration": 97768571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomepageTest.SelectVehicle(String)"
});
formatter.result({
  "duration": 253355374,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.BookLater()"
});
formatter.result({
  "duration": 260037048,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.Dontbook()"
});
formatter.result({
  "duration": 3451846,
  "status": "passed"
});
formatter.after({
  "duration": 430064,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "Check Network",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Validate Homepage with valid data",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as http://www.ntltaxi.com/index.php",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryC",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the Mobile Number as 3333",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the Pick up Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click the Book Later",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Don\u0027t Click Book Button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomepageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 67587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/index.php",
      "offset": 13
    }
  ],
  "location": "HomepageTest.EnterURL(String)"
});
formatter.result({
  "duration": 943354914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryC",
      "offset": 18
    }
  ],
  "location": "HomepageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 99240005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 27
    }
  ],
  "location": "HomepageTest.EnterMobile(String)"
});
formatter.result({
  "duration": 90046284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 29
    }
  ],
  "location": "HomepageTest.PickUp(String)"
});
formatter.result({
  "duration": 92903817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomepageTest.DropAddress(String)"
});
formatter.result({
  "duration": 88824432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomepageTest.SelectVehicle(String)"
});
formatter.result({
  "duration": 251505227,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.BookLater()"
});
formatter.result({
  "duration": 242628675,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.Dontbook()"
});
formatter.result({
  "duration": 1586218,
  "status": "passed"
});
formatter.after({
  "duration": 447433,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "Check Network",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 21,
  "name": "Validate Homepage with valid data",
  "description": "",
  "id": "validate-ntl-taxi-homepage;validate-homepage-with-valid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter URL as http://www.ntltaxi.com/index.php",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username as VmetryD",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the Mobile Number as 4444",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the Pick up Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click the Book Later",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Don\u0027t Click Book Button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomepageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 67209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/index.php",
      "offset": 13
    }
  ],
  "location": "HomepageTest.EnterURL(String)"
});
formatter.result({
  "duration": 989229501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VmetryD",
      "offset": 18
    }
  ],
  "location": "HomepageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 88438921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 27
    }
  ],
  "location": "HomepageTest.EnterMobile(String)"
});
formatter.result({
  "duration": 96626011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 29
    }
  ],
  "location": "HomepageTest.PickUp(String)"
});
formatter.result({
  "duration": 94941622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomepageTest.DropAddress(String)"
});
formatter.result({
  "duration": 115100297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomepageTest.SelectVehicle(String)"
});
formatter.result({
  "duration": 253172248,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.BookLater()"
});
formatter.result({
  "duration": 256597285,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.Dontbook()"
});
formatter.result({
  "duration": 1330218,
  "status": "passed"
});
formatter.after({
  "duration": 352283,
  "status": "passed"
});
});