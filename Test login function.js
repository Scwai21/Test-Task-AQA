describe('Login:', () =>{
    it('Valid Login', async () =>{
        await browser.url('https://www.saucedemo.com')
        
        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standard_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('secret_sauce')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()
         
       

        const cart = await $('.shopping_cart_link')
        const cartDisplayed = await cart.isDisplayed()
        const products = await $('.inventory_list')
        const productsDisplayed = await products.isDisplayed()

        const url = await browser.getUrl()
        expect(url).toBe('https://www.saucedemo.com/inventory.html')
        expect(cartDisplayed).toBe(true)
        expect(productsDisplayed).toBe(true)
    })
    it('Login with invalid password', async () =>{
        await browser.url('https://www.saucedemo.com')
        
        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standard_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('123333')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()

        const x = await $('[fill="currentColor"]')
        const xDisplayed = await x.isDisplayed()

        const error = await $('[data-test="error"]')
        const errorText = await error.getText()
        const errorDisplayed = await error.isDisplayed()

        

        expect(xDisplayed).toBe(true)
        expect(errorDisplayed).toBe(true)
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service')
    })
    it('Login with invalid login', async () => {
        await browser.url('https://www.saucedemo.com')

        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standarD_user")

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
        expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service')

    })
    it('Logout', async () =>{
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

        

        await logout.click()

        const url = await browser.getUrl()
        const loginLabelValue = await LoginLabel.getValue()
        const passwordLabelValue = await PasswordLabel.getValue()

        expect(url).toBe('https://www.saucedemo.com/')
        expect(loginLabelValue).toBe('')
        expect(passwordLabelValue).toBe('')
    })
})