const { By, until } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameInput = By.id("username");
    this.passwordInput = By.id("password");
    this.loginButton = By.css("button[type='submit']");
    this.flashMessage = By.id("flash");
  }

  async open() {
    await this.driver.get("https://the-internet.herokuapp.com/login");
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameInput).clear();
    await this.driver.findElement(this.usernameInput).sendKeys(username);

    await this.driver.findElement(this.passwordInput).clear();
    await this.driver.findElement(this.passwordInput).sendKeys(password);

    await this.driver.findElement(this.loginButton).click();
  }

  async getMessage() {
    const message = await this.driver.wait(
      until.elementLocated(this.flashMessage),
      5000
    );
    return await message.getText();
  }

  async isOnLoginPage() {
    const url = await this.driver.getCurrentUrl();
    return url.includes("/login");
  }
}

module.exports = LoginPage;
