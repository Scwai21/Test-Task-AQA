describe('Product:', () => {
    it('should sort items by price low to high', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Price (low to high)')

        const itemPrices = await $$('.inventory_item_price')
        const prices = []

        for (let priceElement of itemPrices) {
            const priceText = await priceElement.getText()
            const price = parseFloat(priceText.replace('$', ''))
            prices.push(price)
        }

        const sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices).toEqual(sortedPrices)
    })

    it('should sort items by price high to low', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Price (high to low)')

        const itemPrices = await $$('.inventory_item_price')
        const prices = []

        for (let priceElement of itemPrices) {
            const priceText = await priceElement.getText()
            const price = parseFloat(priceText.replace('$', ''))
            prices.push(price)
        }

        const sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices).toEqual(sortedPrices)
    })

    it('should sort items by name A to Z', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Name (A to Z)')

        const itemNames = await $$('.inventory_item_name')
        const names = []

        for (let nameElement of itemNames) {
            const nameText = await nameElement.getText()
            names.push(nameText)
        }

        const sortedNames = [...names].sort((a, b) => a.localeCompare(b))
        expect(names).toEqual(sortedNames)
    })

    it('should sort items by name Z to A', async () => {
        await browser.url('https://www.saucedemo.com')

        const loginLabel = await $('#user-name')
        await loginLabel.setValue("standard_user")

        const passwordLabel = await $('#password')
        await passwordLabel.setValue('secret_sauce')

        const loginButton = await $('#login-button')
        await loginButton.click()

        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Name (Z to A)')

        const itemNames = await $$('.inventory_item_name')
        const names = []

        for (let nameElement of itemNames) {
            const nameText = await nameElement.getText()
            names.push(nameText)
        }

        const sortedNames = [...names].sort((a, b) => b.localeCompare(a))
        expect(names).toEqual(sortedNames)
    })
})
