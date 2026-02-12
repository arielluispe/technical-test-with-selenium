const { getDriver } = require("../config/driver");
const LoginPage = require("../pages/LoginPage");
const assert = require("assert");

(async function runTests() {
  const driver = await getDriver();
  const loginPage = new LoginPage(driver);

  try {
    await loginPage.open();
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    let message = await loginPage.getMessage();

    assert(
      message.includes("You logged into a secure area"),
      "Fallo el login exitoso"
    );
    console.log("✅ Test Case 1 passed");

  } catch (error) {
  console.error("❌ Test failed:", error.message);
  } finally {
  await driver.quit();
  }
})();   
