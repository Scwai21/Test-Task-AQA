describe('Additional test:', () => {
    it('Check locked user', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("locked_out_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const x = await $('[fill="currentColor"]')
        const xDisplayed = await x.isDisplayed()
        const error = await $('[data-test="error"]')
        const errorText = await error.getText()
        const errorDisplayed = await error.isDisplayed()

        expect(xDisplayed).toBe(true)
        expect(errorDisplayed).toBe(true)
        expect(errorText).toBe('Epic sadface: Sorry, this user has been locked out.')
    })

    it('About link', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

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

        await about.click()
        const url = await browser.getUrl()
        expect(url).toBe('https://saucelabs.com/')
    })

    it('Check All Items', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const cart = await $('.shopping_cart_link')
        await cart.click()

        const url1 = await browser.getUrl()
        expect(url1).toBe('https://www.saucedemo.com/cart.html')

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

        await allItems.click()
        const url2 = await browser.getUrl()
        expect(url2).toBe('https://www.saucedemo.com/inventory.html')
    })
})
