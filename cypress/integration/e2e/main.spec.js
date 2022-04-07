describe('Tested with email and passwd', () => {
  it('Test test', () => {
    cy.visit('http://localhost:5001/#/');
    cy.contains('Login');
  });
  it('should ', () => {
    cy.get('input[name=email').type('jesus@rodriguez.pp');
    cy.get('input[name=passwd').type('123456');
    cy.get('.btn-login').click();
    cy.wait(3000);
  });
});

describe('Tested user clicked new apartment', () => {
  it('should ', () => {
    cy.get('#new-apartment').click();
  });
});
