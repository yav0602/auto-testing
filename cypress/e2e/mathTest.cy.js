describe("Cypress Math Test", () => {
  it("should automate the required actions", () => {
    cy.visit("http://suninjuly.github.io/math.html");
    cy.get("#input_value")
      .then(($input) => {
        const x = parseFloat($input.text());
        const result = Math.log(Math.abs(12 * Math.sin(x)));
        return result;
      })
      .as("result");
    cy.get("@result").then((result) => {
      cy.get("#answer").type(result);
    });
    cy.get("#robotCheckbox").check();
    cy.get('[for="robotsRule"]').click();
    cy.get('[type="submit"]').click();
  });
});
