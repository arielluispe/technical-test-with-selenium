const { getDriver } = require("../config/driver");
const LoginPage = require("../pages/LoginPage");
const assert = require("assert");

(async function runTests() {
  const driver = await getDriver();
  const loginPage = new LoginPage(driver);

  try {
    
    await loginPage.open();
    await loginPage.login("wrongUser", "SuperSecretPassword!");
    message = await loginPage.getMessage();

    assert(
      message.includes("Your username is invalid"),
      "Mensaje incorrecto para usuario inválido"
    );

    assert(await loginPage.isOnLoginPage());
    console.log("✅ Test Case 2 passed");



  } catch (error) {
  console.error("❌ Test failed:", error.message);
  } finally {
  await driver.quit();
  }
})();   
