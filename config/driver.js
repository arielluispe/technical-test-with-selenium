const { Builder } = require("selenium-webdriver");

async function getDriver() {
  const driver = await new Builder()
    .forBrowser("chrome")
    .build();

  await driver.manage().setTimeouts({ implicit: 20000 });

  return driver;
}

module.exports = { getDriver };
