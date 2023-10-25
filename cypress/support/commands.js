// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
    cy.get("#txt-username").type(username);
    cy.get("#txt-password").type(password);
    cy.get("#btn-login").click();
})

Cypress.Commands.add("successlogin", (username1, password1) => {
  cy.visit("");
  cy.get("#menu-toggle").click();
  cy.get(".sidebar-nav > :nth-child(4) > a").click();
  cy.url().should("contain", "profile.php#login");
  cy.get("#txt-username").type(username1);
  cy.get("#txt-password").type(password1);
  cy.get("#btn-login").click();
  cy.url().should("contain", "#appointment");
  cy.get("h2").should("be.visible");
});


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })