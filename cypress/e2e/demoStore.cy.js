describe("Cypress Demo Store Tests", () => {
  it("should visit all links", () => {
    cy.visit("http://demo-store.seleniumacademy.com/");
    cy.get("a").each((page) => {
      cy.request(page.prop("href"));
    });
  });

  it("should register user", () => {
    cy.visit("http://demo-store.seleniumacademy.com/customer/account/create");
    cy.get('input[id="firstname"]').type("Art");
    cy.get('input[id="lastname"]').type("Yer");
    cy.get('input[id="email_address"]').type(`test123456@domain.com`);
    cy.get('input[id="password"]').type("123456");
    cy.get('input[id="confirmation"]').type("123456");
    cy.get('button[title="Register"]').click();
    cy.visit("http://demo-store.seleniumacademy.com/customer/account/");
    cy.get("h1").should("have.text", "My Dashboard");
  });
});
