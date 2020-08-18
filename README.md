# Bharath

Evaluation project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
NPM
Selenium-standalone server
Visual studio code or any IDE
```

### Installing


Download and install NodeJS from 

```
https://nodejs.org/dist/v12.11.1/node-v12.11.1-x64.msi
```

NPM will be installed by default with Node. Check node and npm installation by running the below commands

```
node --version && npm --version
```

Setting up selenium-standalone server.Run the below command in elevated command prompt. 

```
npm install -g selenium-standalone
```

Download the selenium-standalone binaries by running

```
selenium-standalone install
```

Start the standalone server using 

```
selenium-standalone start
```

Now extract the project ZIP and in the project folder run the below command.
```
npm install
```

Now all the dependencies for the project listed in package.json will be downloaded.

## Test data file

Test data file is located at 

```
./test/test-data/data.json
```

## Test Config file

Test config file is located at 

```
./test/config/suite.mocha.conf.js
```

## Test spec file

Test spec file is located at 

```
./test/specs/goibibo.test.js
```

## Utility helper methods file

Utility helper methods are at 

```
./test/pageobjects/help.js
```


## Reusable modules file

 Reusable modules are located at

```
./test/pageobjects/lib.js
```

## Webelements locators file

 Webelements locators is located at 

```
./test/pageobjects/locators.json
```

## Running the tests

In the project folder run the below command. test is a script command in package.json

```
npm run test
```

![Alt text](dir.PNG?raw=true "Title")

## Built With

* [Webdriver.io](https://webdriver.io/) - The Nextgen Javascript automation framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [Mocha](https://www.mochajs.org) - JavaScript test framework running on Node.js 
* [Babel](https://babeljs.io/) - Javascript Nextgen compiler
* [Git](https://github.com) - Version control

## Authors

* **Bharath Kumar S** - *Initial work* - [Automation](https://github.com/Bharath-Kumar-S)

