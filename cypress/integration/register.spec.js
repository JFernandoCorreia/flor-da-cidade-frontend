/* eslint-disable no-undef */
describe('Testa página de registro', () => {
  it('Deve registrar um novo usuário', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('João da Silva');
    cy.get('input[name="cpf"]').type('12345678900');
    cy.get('input[name="password"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso!');
  });
});
