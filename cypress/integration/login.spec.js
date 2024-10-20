/* eslint-disable no-undef */
describe('Login', () => {
  it('Deve logar um usuário com sucesso', () => {
    cy.visit('/login-usuario');

    cy.get('input[name="email"]').type('seu_email@example.com');
    cy.get('input[name="password"]').type('sua_senha');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');
  });

  it('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.visit('/login-usuario');

    cy.get('input[name="email"]').type('email_invalido@example.com');
    cy.get('input[name="password"]').type('senha_invalida');
    cy.get('button[type="submit"]').click();

    cy.contains('Erro ao fazer login').should('be.visible');  
  });
})