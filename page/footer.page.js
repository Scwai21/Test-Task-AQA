import { $ } from '@wdio/globals';
import Page from './page.js';

class FotterPage extends Page{
    get twitter() {return $('[href="https://twitter.com/saucelabs"]')}
    get facebook() {return $('[href="https://www.facebook.com/saucelabs"]')}
    get linkedin() {return $('[href="https://www.linkedin.com/company/sauce-labs/"]')}

    async clickOnTwitter(){
        await this.twitter.click()
    }

    async clickOnFacebook(){
        await this.facebook.click()
    }

    async clickOnLinkedin(){
        await this.linkedin.click()
    }
}