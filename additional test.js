describe('Additional test:', () =>{
    it('Check locked user', async () => {
        await browser.url('https://www.saucedemo.com')

        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("locked_out_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('secret_sauce')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()
        
        const x = await $('[fill="currentColor"]')
        const xDisplayed = await x.isDisplayed()
        const error = await $('[data-test="error"]')
        const errorText = await error.getText()
        const errorDisplayed = await error.isDisplayed()

        expect(xDisplayed).toBe(true)
        expect(errorDisplayed).toBe(true)
        expect(errorText).toBe('Epic sadface: Sorry, this user has been locked out.')
    })
    it('About link', async () =>{
        await browser.url('https://www.saucedemo.com')

        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standard_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('secret_sauce')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()

        const BurgerButton = await $('#react-burger-menu-btn')
        await BurgerButton.click()
        
        const all_items = await $('#inventory_sidebar_link')
        const about = await $('#about_sidebar_link')
        const logout = await $('#logout_sidebar_link')
        const reset_app_state = await $('#reset_sidebar_link')

        const all_itemsDisplayed = await all_items.isDisplayed()
        const aboutDisplayed = await about.isDisplayed()
        const logoutDisplayed = await logout.isDisplayed()
        const reset_app_stateDisplayed = await reset_app_state.isDisplayed()
        expect(all_itemsDisplayed).toBe(true)
        expect(aboutDisplayed).toBe(true)
        expect(logoutDisplayed).toBe(true)
        expect(reset_app_stateDisplayed).toBe(true)

        await about.click()
        const url = await browser.getUrl()
        expect(url).toBe('https://saucelabs.com/')
    })
    it('Check All Items', async () =>{
        await browser.url('https://www.saucedemo.com')

        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standard_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('secret_sauce')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()

        const cart = await $('.shopping_cart_link')
        await cart.click()

        const url1 = await browser.getUrl()
        expect(url1).toBe('https://www.saucedemo.com/cart.html')

        const BurgerButton = await $('#react-burger-menu-btn')
        await BurgerButton.click()
        
        const all_items = await $('#inventory_sidebar_link')
        const about = await $('#about_sidebar_link')
        const logout = await $('#logout_sidebar_link')
        const reset_app_state = await $('#reset_sidebar_link')

        const all_itemsDisplayed = await all_items.isDisplayed()
        const aboutDisplayed = await about.isDisplayed()
        const logoutDisplayed = await logout.isDisplayed()
        const reset_app_stateDisplayed = await reset_app_state.isDisplayed()
        expect(all_itemsDisplayed).toBe(true)
        expect(aboutDisplayed).toBe(true)
        expect(logoutDisplayed).toBe(true)
        expect(reset_app_stateDisplayed).toBe(true)

        await all_items.click()
        const url2 = await browser.getUrl()
        expect(url2).toBe('https://www.saucedemo.com/inventory.html')

    })
})