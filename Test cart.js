describe('Test cart:', () =>{
    it('Saving the card after logout', async () =>{
        await browser.url('https://www.saucedemo.com')

        const LoginLabel = await $('#user-name')
        await LoginLabel.setValue("standard_user")

        const PasswordLabel = await $('#password')
        await PasswordLabel.setValue('secret_sauce')
      
        const LoginButton = await $('#login-button')
        await LoginButton.click()

        const product = await $('#item_4_title_link')
        const productName = await product.getText()
        const add_to_cart = await $('#add-to-cart-sauce-labs-backpack')
        await add_to_cart.click()

        const score = await $('.shopping_cart_badge')
        const scoreNumber = await score.getText()

        expect(scoreNumber).toBe('1')

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

        await LoginLabel.setValue("standard_user")
        await PasswordLabel.setValue('secret_sauce')
        await LoginButton.click()
       
       
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
        expect(scoreNumber).toBe('1')
        expect(productName).toBe('Sauce Labs Backpack')
    })
})