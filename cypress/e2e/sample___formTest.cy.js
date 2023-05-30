describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login-form')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#exampleInputEmail1').clear('Foobar@gmail.com');
    cy.get('#exampleInputEmail1').type('Foobar@gmail.com');
    cy.get('#exampleInputPassword1').clear('P');
    cy.get('#exampleInputPassword1').type('PassWordTest');
    cy.get('.form-check-label').click();
    cy.get('#exampleCheck1').check();
    cy.get('.btn').click();
    cy.get('[data-testid="username"]').should('have.text', '\n        Thanks for completing the example!\n      ');
    cy.get('[data-testid="username"]').should('be.visible');
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  })
})