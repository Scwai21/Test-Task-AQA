import { browser } from '@wdio/globals'

export default class Page {
    @param path

    async open (path) {
        await browser.url(path)
    }
}