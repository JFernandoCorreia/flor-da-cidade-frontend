/* eslint-disable no-undef */
describe('Register a new user', () => {
  it('should register a user successfully', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('João Silva');
    cy.get('input[name="email"]').type('joaosilva@example.com');
    cy.get('input[name="cpf"]').type('12345678901');
    cy.get('input[name="password"]').type('0123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');  // Verifique se foi redirecionado para a página de login
  });
});
