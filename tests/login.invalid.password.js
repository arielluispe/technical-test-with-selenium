const { getDriver } = require("../config/driver");
const LoginPage = require("../pages/LoginPage");
const assert = require("assert");

(async function runTests() {
  const driver = await getDriver();
  const loginPage = new LoginPage(driver);

  try {
    
    await loginPage.open();
    await loginPage.login("tomsmith", "WrongPassword!");
    message = await loginPage.getMessage();

    assert(
      message.includes("Your password is invalid"),
      "Mensaje incorrecto para contraseña inválida"
    );

    assert(await loginPage.isOnLoginPage());
    console.log("✅ Test Case 3 passed");

  } catch (error) {
  console.error("❌ Test failed:", error.message);
  } finally {
  await driver.quit();
  }
})();   
