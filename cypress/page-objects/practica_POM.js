export class AddTask {
    
    addTaskPan(text){
        cy.get('.new-todo').should('be.visible').type('comprar el pan {enter}')
    }
    addTaskNumbers(){
        cy.get('.new-todo').should('be.visible').type('12345 {enter}')
    }
    addTaskSymbol(){
        cy.get('.new-todo').should('be.visible').type('"&" {enter}')
    }
    addTaskEmoji(){
        cy.get('.new-todo').should('be.visible').type(':) {enter}')
    }
    checkTask(){
        cy.get('.new-todo').should('be.visible').type('comprar el pan {enter}')
        cy.get('.toggle').check()
    }
    uncheckTask(){
        cy.get('.new-todo').should('be.visible').type('Frutas {enter}')
        cy.get('.toggle').uncheck()
    }
    






}// ultimo 

