describe("template spec", () => {
  beforeEach(() => {
    cy.successlogin("John Doe", "ThisIsNotAPassword");
  });

  it("Success Booking", () => {
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get(".checkbox-inline").click();
    cy.get("#radio_program_medicare").click();
    cy.get("#txt_visit_date").click();
    cy.get(":nth-child(5) > :nth-child(5)").click();
    cy.get("#txt_comment").type("This Is Comment");
    cy.get("#btn-book-appointment").click();
    cy.url().should("contain", "appointment.php#summary");
    cy.get(".text-center > .btn").click();
    cy.get("h1").should("be.visible");
  });

  it("Success Booking-When Not Check the readmission", () => {
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get("#radio_program_medicare").click();
    cy.get("#txt_visit_date").click();
    cy.get(":nth-child(5) > :nth-child(5)").click();
    cy.get("#txt_comment").type("This Is Comment");
    cy.get("#btn-book-appointment").click();
    cy.url().should("contain", "appointment.php#summary");
    cy.get(".text-center > .btn").click();
    cy.get("h1").should("be.visible");
  });
  it("Success Booking-Without Comment", () => {
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get(".checkbox-inline").click();
    cy.get("#radio_program_medicare").click();
    cy.get("#txt_visit_date").click();
    cy.get(":nth-child(5) > :nth-child(5)").click();
    cy.get("#btn-book-appointment").click();
    cy.url().should("contain", "appointment.php#summary");
    cy.get(".text-center > .btn").click();
    cy.get("h1").should("be.visible");
  });
  it("Failed Booking-Without Select Date", () => {
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get(".checkbox-inline").click();
    cy.get("#radio_program_medicare").click();
    cy.get("#txt_comment").type("This Is Comment");
    cy.get("#btn-book-appointment").click();
  });
});
