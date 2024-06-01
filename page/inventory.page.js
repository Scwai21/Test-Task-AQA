import { $ } from '@wdio/globals';
import Page from './../page.js';

class InventoryPage extends Page {
    get cartIcon() { return $('.shopping_cart_link'); }
    get inventoryList() { return $('.inventory_list'); }
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get allItems() { return $('#inventory_sidebar_link'); }
    get about() { return $('#about_sidebar_link'); }
    get resetAppState() { return $('#reset_sidebar_link'); }
    get sortDropdown() { return $('.product_sort_container'); }
    get checkoutButton() { return $('#checkout'); }
    get score() { return $('.shopping_cart_badge'); } 
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get zipCode() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); } 

    async order(name, surname, code) {
        await this.firstName.setValue(name);
        await this.lastName.setValue(surname);
        await this.zipCode.setValue(code);
        await this.continueButton.click();
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();
    }

    async addToCart(id) {
        const product = await $(id);
        await product.click();
    }

    async checkScoreNumber() {
        return this.score.getText();
    }

    async PriceLowToHigh() {
        await this.sortDropdown.selectByVisibleText('Price (low to high)');
    }

    async PriceHighToLow() {
        await this.sortDropdown.selectByVisibleText('Price (high to low)'); // исправлено: добавлено this.
    }

    async NameAToZ() {
        await this.sortDropdown.selectByVisibleText('Name (A to Z)'); // исправлено: добавлено this.
    }

    async NameZToA() {
        await this.sortDropdown.selectByVisibleText('Name (Z to A)'); // исправлено: было await sort.sortDropdown
    }

    async isCartIconDisplayed() {
        return this.cartIcon.isDisplayed();
    }

    async clickOnCart() {
        await this.cartIcon.click();
    }

    async isInventoryListDisplayed() {
        return this.inventoryList.isDisplayed();
    }

    async isParametersOfBurgerMenuDisplayed() {
        const logoutDisplayed = await this.logoutLink.isDisplayed();
        const allItemsDisplayed = await this.allItems.isDisplayed();
        const aboutDisplayed = await this.about.isDisplayed();  
        const resetAppStateDisplayed = await this.resetAppState.isDisplayed();

        return logoutDisplayed && allItemsDisplayed && aboutDisplayed && resetAppStateDisplayed;
    }

    async logout() {
        await this.burgerButton.click();
        await this.logoutLink.click();
    }
}

module.exports = new InventoryPage();
