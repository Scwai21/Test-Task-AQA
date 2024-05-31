describe('Test cart:', () => {
    it('Saving the cart after logout', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const product = await $('#item_4_title_link')
        const productName = await product.getText()
        const addToCart = await $('#add-to-cart-sauce-labs-backpack')
        await addToCart.click()

        const score = await $('.shopping_cart_badge')
        const scoreNumber = await score.getText()
        expect(scoreNumber).toBe('1')

        const burgerButton = await $('#react-burger-menu-btn')
        await burgerButton.click()

        const allItems = await $('#inventory_sidebar_link')
        const about = await $('#about_sidebar_link')
        const logout = await $('#logout_sidebar_link')
        const resetAppState = await $('#reset_sidebar_link')

        const allItemsDisplayed = await allItems.isDisplayed()
        const aboutDisplayed = await about.isDisplayed()
        const logoutDisplayed = await logout.isDisplayed()
        const resetAppStateDisplayed = await resetAppState.isDisplayed()
        expect(allItemsDisplayed).toBe(true)
        expect(aboutDisplayed).toBe(true)
        expect(logoutDisplayed).toBe(true)
        expect(resetAppStateDisplayed).toBe(true)

        await logout.click()

        const url = await browser.getUrl()
        const loginLabelValue = await loginLabel.getValue()
        const passwordLabelValue = await passwordLabel.getValue()
        expect(url).toBe('https://www.saucedemo.com/')
        expect(loginLabelValue).toBe('')
        expect(passwordLabelValue).toBe('')

        await loginLabel.setValue("standard_user")
        await passwordLabel.setValue('secret_sauce')
        await loginButton.click()

        const cart = await $('.shopping_cart_link')
        const cartDisplayed = await cart.isDisplayed()
        const products = await $('.inventory_list')
        const productsDisplayed = await products.isDisplayed()
        expect(cartDisplayed).toBe(true)
        expect(productsDisplayed).toBe(true)

        const cartButton = await $('.shopping_cart_link')
        await cartButton.click()

        const urlCart = await browser.getUrl()
        expect(urlCart).toBe('https://www.saucedemo.com/cart.html')

        const cartScore = await $('.shopping_cart_badge')
        const cartScoreNumber = await cartScore.getText()
        expect(cartScoreNumber).toBe('1')

        const cartProduct = await $('#item_4_title_link')
        const cartProductName = await cartProduct.getText()
        expect(cartProductName).toBe('Sauce Labs Backpack')
    })
})
