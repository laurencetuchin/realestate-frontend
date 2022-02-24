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
// Cypress.Commands.add('login', (email, password) => { ... })
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

// Gets jwt token for user

import "cypress-localstorage-commands";
import { describe } from "mocha";
let token = "";
describe("create token", () => {
	before(() => {
		cy.postTokenLogin();
		cy.saveLocalStorage();
	});
	beforeEach(() => {
		cy.restoreLocalStorage();
	});
	it("Jwt token should exist in local storage", () => {
		cy.getLocalStorageItem("token").then((token) => {
			cy.log("token: " + token);
			expect(token).to.exist;
		});
	});
	it("should login", () => {
		cy.visit("http://localhost:3000/signin");
		cy.get("#email").type("test3ii343e59@gmail.com");
		cy.get("#password").type("test");
		cy.get("#login-button").click();
		cy.wait(10000);
		cy.getLocalStorageItem("token").then((token) => {
			cy.log("token: " + token);
			expect(token).to.exist;
		});
	});
});
