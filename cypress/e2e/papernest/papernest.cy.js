/// <reference types="cypress" />

describe('papernest cypress test', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper')
    })

    it('Test 1', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.contains('Elle').should('have.text','Elle')
        cy.contains('Elle').click()
        cy.contains("Quel est votre numéro d'abonné ?").should('be.visible')
        cy.get('input[id="newspaper-address_change.reference"]').type('412344444 {enter}')
        cy.contains("Quelle est votre nouvelle adresse").should('be.visible')
        cy.get('input[id="housing.address"]').type('157 Boulevard Macdonald 75019 Paris {enter}')
    
     })

})