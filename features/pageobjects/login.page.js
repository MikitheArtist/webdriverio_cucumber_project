const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get errorMsg() {
        return $('h3[data-test="error"]');
    }

    async clickLoginBtn() {
        await this.btnSubmit.click();
    }

    async checkErrorMsg(msg) {
        await expect(this.errorMsg).toHaveText(expect.stringContaining(msg));
    }

    open() {
        return super.open();
    }
}

module.exports = new LoginPage();
