describe('Validating the url', function () {
    beforeEach(function () {
       cy.visit('http://localhost:3000/calculator');
    });

    it("validating available numbers", function(){
        cy.get('.wide > button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(1) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(2) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(3) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(1) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(2) > button').click()
        cy.wait(2000)        
        cy.get(':nth-child(3) > :nth-child(3) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(2) > button').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(3) > button').click()
        cy.wait(2000)
    });


    it("validating Addition Operation", function(){
        cy.get(':nth-child(2) > :nth-child(1) > button').click() //Number 7
        cy.wait(2000)
        cy.get(':nth-child(4) > .orange > button').click()
        cy.wait(2000)        
        cy.get(':nth-child(2) > :nth-child(2) > button').click() //Number 8
        cy.wait(2000)
        cy.get(':nth-child(5) > .orange > button').click()
        cy.wait(2000)
        cy.get('.component-display > div').should('have.value', 15) //result = 15
        cy.wait(2000)       
    });


    it("validating Subtraction Operation", function(){
        cy.get(':nth-child(2) > :nth-child(1) > button').click() //Number 7
        cy.wait(2000)
        cy.get(':nth-child(3) > .orange > button').click()
        cy.wait(2000)        
        cy.get(':nth-child(3) > :nth-child(2) > button').click() //Number 5
        cy.wait(2000)
        cy.get(':nth-child(5) > .orange > button').click()
        cy.wait(2000)
        cy.get('.component-display > div').should('have.value', '2') //result = 2
        cy.wait(2000)       
    });

    it("validating Mutiplication Operation", function(){
        cy.get(':nth-child(3) > :nth-child(2) > button').click() //Number 5
        cy.wait(2000)
        cy.get(':nth-child(2) > .orange > button').click()
        cy.wait(2000)        
        cy.get(':nth-child(4) > :nth-child(2) > button').click() //Number 2
        cy.wait(2000)
        cy.get(':nth-child(5) > .orange > button').click()
        cy.wait(2000)
        cy.get('.component-display > div').should('have.value', '10') //result = 10
        cy.wait(2000)       
    });

    it("validating Division Operation", function(){
        cy.get(':nth-child(2) > :nth-child(2) > button').click() //Number 8
        cy.wait(2000)
        cy.get(':nth-child(1) > .orange > button').click()
        cy.wait(2000)        
        cy.get(':nth-child(4) > :nth-child(2) > button').click() //Number 2
        cy.wait(2000)
        cy.get(':nth-child(5) > .orange > button').click()
        cy.wait(2000)
        cy.get('.component-display > div').should('have.value', '4') //result = 4
        cy.wait(2000)       
    });

    it("validating decimal", function(){
        cy.get(':nth-child(5) > :nth-child(2) > button')
        cy.wait(2000)
        
    });

    it("validating for AC", function(){
        cy.get(':nth-child(2) > :nth-child(1) > button').click() //Number 7
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(1) > button').click() //To clear the value
        cy.wait(2000)
    });

    it("validating sign functions", function(){
        cy.get(':nth-child(1) > .orange > button').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .orange > button').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .orange > button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .orange > button').click()
        cy.wait(2000)
    });

});