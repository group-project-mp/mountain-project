describe('Testing filter', () => {
    it('Can fill out form', () => {
        cy.visit('http://localhost:3000/#/')
        cy.get('div.filterbody').contains('Route Finder')
        
    })
})