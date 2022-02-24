beforeEach(() => {
	cy.log("This will log the user in");
});

// Cypress user login to heroku
describe("Login", () => {
	it("Login", () => {
		cy.visit("https://realestate-frontend2.netlify.app/");
		cy.get("#email").type("test3ii33@gmail.com");
		cy.get("#password").type("test");
		cy.get("#login-button").click();
		cy.wait(10000);
		cy.getLocalStorageItem("token").then((token) => {
			cy.log("token: " + token);
			expect(token).to.exist;
		});
	});
});
