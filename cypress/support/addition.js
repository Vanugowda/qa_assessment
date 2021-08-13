addNumbers()
{
    cy.get(':nth-child(2) > :nth-child(1) > button').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .orange > button').click()
    cy.wait(2000)
    
    cy.get(':nth-child(2) > :nth-child(2) > button').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .orange > button').click()
    cy.wait(2000)
    cy.get('.component-display > div').should('have.value', '15')
    cy.wait(2000)
}