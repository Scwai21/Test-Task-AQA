import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('[data-test="error"]'); }
    get errorIcon() { return $('[fill="currentColor"]'); }

    open() {
        return super.open('login');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }

    async isErrorIconDisplayed() {
        return this.errorIcon.isDisplayed();
    }

    async isErrorMessageDisplayed() {
        return this.errorMessage.isDisplayed()
    }
}

export default new LoginPage();
