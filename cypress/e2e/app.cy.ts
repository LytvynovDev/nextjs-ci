import { describe, it } from 'mocha';

describe('App', () => {
  it('should get the server IP', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.get('h1').should('contain', 'Server IP is:');
  });
});