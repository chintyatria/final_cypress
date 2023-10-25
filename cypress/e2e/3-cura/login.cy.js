describe('Test All Posibility Of Login Page Functionality', () => {
  beforeEach(() => {
    cy.visit("");
    cy.get("#menu-toggle").click();
    cy.get(".sidebar-nav > :nth-child(4) > a").click();
    cy.url().should("contain", "profile.php#login");
  });
  it('Success Login', () => {
    cy.login("John Doe", "ThisIsNotAPassword");
    cy.url().should("contain", "#appointment");
    cy.get("h2").should("be.visible");
  })
  it("Failed Login-Wrong Username", () => {
    cy.login("test", "ThisIsNotAPassword");
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
  it("Failed Login-Wrong Password", () => {
    cy.login("John Doe", "test");
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
  it("Failed Login-Wrong Username & Password", () => {
    cy.login("test", "test");
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
  it("Failed Login-Empty Username & Correct Password", () => {
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
  it("Failed Login-Empty Password & Correct Username", () => {
    cy.get("#txt-username").type("John Doe");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
  it("Failed Login-Empty Username & Wrong Password", () => {
    cy.get("#txt-password").type("test");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
    it("Failed Login-Empty Password & Wrong Username", () => {
      cy.get("#txt-username").type("test");
      cy.get("#btn-login").click();
      cy.get(".text-danger").should(
        "contain",
        "Login failed! Please ensure the username and password are valid."
      );
    });
  it("Failed Login-Empty Fields", () => {
    cy.get("#btn-login").click();
    cy.get(".text-danger").should(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
  });
})