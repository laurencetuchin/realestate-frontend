// Create a new property
describe("Create a new property", () => {
	it("should create a new property", () => {
		cy.getLocalStorageItem("token").then((token) => {
			cy.log("token: " + token);
			expect(token).to.exist;
		});
		cy.visit("http://localhost:3000/new_property");
		cy.get("#property_address").type("Test Address");
		cy.get("#property_city").type("Test City");
		cy.get("#property_title").type("title");
		cy.get("#property_state").type("Test State");
		cy.get("#property_country").type("Test Country");
		cy.get("#property_price").type("12345");
		cy.get("#property_description").type("Test Description");
		cy.get("#property_bedroom").type("1");
		cy.get("#property_bathroom").type("1");
		cy.get("#property_status").type("available");
		cy.get("#property_suburb").type("melbourne");
		cy.get("#property_create").click();
		cy.wait(10000);

		cy.get("#property_address").should("have.value", "Test Address");
		cy.get("#property_city").should("have.value", "Test City");
		cy.get("#property_title").should("have.value", "title");
		cy.get("#property_state").should("have.value", "Test State");
		cy.get("#property_country").should("have.value", "Test Country");
		cy.get("#property_price").should("have.value", "12345");
		cy.get("#property_description").should("have.value", "Test Description");
		cy.get("#property_bedroom").should("have.value", "1");
		cy.get("#property_bathroom").should("have.value", "1");
		cy.get("#property_status").should("have.value", "available");
		cy.get("#property_suburb").should("have.value", "melbourne");
	});
});
