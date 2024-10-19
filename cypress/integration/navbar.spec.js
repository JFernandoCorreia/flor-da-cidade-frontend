/* eslint-disable no-undef */
describe('Navbar mobile functionality', () => {
  it('Should toggle the hamburger menu', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.get('button').click();
    cy.contains('Login de Funcionário').should('be.visible');
  });
});
