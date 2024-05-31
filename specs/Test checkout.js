describe('Checkout', () => {
    it('Checkout without products', async () => {
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

        const checkoutButton = await $('#checkout')
        await checkoutButton.click()

        const url2 = await browser.getUrl()
        expect(url2).toBe('https://www.saucedemo.com/cart.html')
    })

    it('Valid checkout', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const product = await $('#item_4_title_link')
        const productName = await product.getText()
        const price = await $('.inventory_item_price')
        const productPrice = await price.getText()
        const addToCart = await $('#add-to-cart-sauce-labs-backpack')
        await addToCart.click()

        const score = await $('.shopping_cart_badge')
        const scoreNumber = await score.getText()
        expect(scoreNumber).toBe('1')

        const cart = await $('.shopping_cart_link')
        await cart.click()

        const url1 = await browser.getUrl()
        expect(url1).toBe('https://www.saucedemo.com/cart.html')
        expect(productName).toBe('Sauce Labs Backpack')

        const checkoutButton = await $('#checkout')
        await checkoutButton.click()

        const url2 = await browser.getUrl()
        expect(url2).toBe('https://www.saucedemo.com/checkout-step-one.html')

        const firstName = await $('#first-name')
        const lastName = await $('#last-name')
        const zip = await $('#postal-code')

        await firstName.setValue('Denis')
        await lastName.setValue('Aba')
        await zip.setValue('8136')

        const continueButton = await $('#continue')
        await continueButton.click()

        const totalPrice = await $('.summary_subtotal_label')
        const itemTotal = await totalPrice.getText()
        const url3 = await browser.getUrl()
        expect(url3).toBe('https://www.saucedemo.com/checkout-step-two.html')
        expect(productName).toBe('Sauce Labs Backpack')
        expect('Item total: ' + productPrice).toBe(itemTotal)

        const finishButton = await $('#finish')
        await finishButton.click()

        const url4 = await browser.getUrl()
        expect(url4).toBe('https://www.saucedemo.com/checkout-complete.html')

        const message = await $('.complete-header')
        const receiveMessage = await message.getText()
        expect(receiveMessage).toBe('Thank you for your order!')

        const backHomeButton = await $('#back-to-products')
        await backHomeButton.click()

        const url5 = await browser.getUrl()
        expect(url5).toBe('https://www.saucedemo.com/inventory.html')

        const afterScore = await $('.shopping_cart_badge')
        const afterScoreDisplayed = await afterScore.isDisplayed()
        expect(afterScoreDisplayed).toBe(false)
    })
})
