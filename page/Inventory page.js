class InventoryPage {
    get cartIcon() { return $('.shopping_cart_link'); }
    get inventoryList() { return $('.inventory_list'); }
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get allItems() { return $('#inventory_sidebar_link'); }
    get about() { return $('#about_sidebar_link'); }
    get resetAppState() { return $('#reset_sidebar_link'); }

    async isCartIconDisplayed() {
        return this.cartIcon.isDisplayed();
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
