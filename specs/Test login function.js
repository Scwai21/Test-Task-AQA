describe('Login:', () => {
    it('Valid Login', async () => {
        await browser.url('https://www.saucedemo.com')
        
        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')
      
        const loginButton = await $('#login-button')
        await loginButton.click()

        const cart = await $('.shopping_cart_link')
        const cartDisplayed = await cart.isDisplayed()
        const products = await $('.inventory_list')
        const productsDisplayed = await products.isDisplayed()

        const url = await browser.getUrl()
        expect(url).toBe('https://www.saucedemo.com/inventory.html')
        expect(cartDisplayed).toBe(true)
        expect(productsDisplayed).toBe(true)
    })

    it('Login with invalid password', async () => {
        await browser.url('https://www.saucedemo.com')
        
        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('123333')
      
        const loginButton = await $('#login-button')
        await loginButton.click()

        const errorIcon = await $('[fill="currentColor"]')
        const errorIconDisplayed = await errorIcon.isDisplayed()

        const error = await $('[data-test="error"]')
        const errorText = await error.getText()
        const errorDisplayed = await error.isDisplayed()

        expect(errorIconDisplayed).toBe(true)
        expect(errorDisplayed).toBe(true)
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service')
    })

    it('Login with invalid login', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standarD_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')
      
        const loginButton = await $('#login-button')
        await loginButton.click()

        const errorIcon = await $('[fill="currentColor"]')
        const errorIconDisplayed = await errorIcon.isDisplayed()

        const error = await $('[data-test="error"]')
        const errorText = await error.getText()
        const errorDisplayed = await error.isDisplayed()

        expect(errorIconDisplayed).toBe(true)
        expect(errorDisplayed).toBe(true)
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service')
    })

    it('Logout', async () => {
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

        await logout.click()

        const url = await browser.getUrl()
        const loginLabelValue = await loginLabel.getValue()
        const passwordLabelValue = await passwordLabel.getValue()

        expect(url).toBe('https://www.saucedemo.com/')
        expect(loginLabelValue).toBe('')
        expect(passwordLabelValue).toBe('')
    })
})
