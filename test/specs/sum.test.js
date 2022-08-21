describe('Best App', () => {
    it('should do some assertions', async () => {

        const edtValueA = await $('~value-a')
        edtValueA.addValue("50")
        const valueA = await edtValueA.getText()

        const edtValueB = await $('~value-b')
        edtValueB.addValue("10")
        const valueB = await edtValueB.getText()

        const sum = await $('~sum')
        sum.click()

        const result = parseInt(valueA) + parseInt(valueB)

        expect(result).toEqual(60)

    })
})