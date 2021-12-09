// <reference types="Cypress" />

const URL = "http://127.0.0.1:5500/calcular-edades/index.html";
const divIntegrante = document.querySelectorAll(".div-integrante");

describe("Test del programa calcular-edades", () => {
    before(() => {
        cy.visit(URL);
    });

    it("tests",() => {
        cy.get(".input-cantidad-integrantes").type("2");
        cy.get("#submit-cantidad-integrantes").click();
        cy.get(".div-integrante").eq(0).type("10");
        cy.get(".div-integrante").eq(1).type("20");
        cy.get("#submit-calculos").click();
        cy.get("#mayor-edad").should("have.text","20");
        cy.get("#menor-edad").should("have.text","10");
        cy.get("#promedio-edad").should("have.text","15");

        cy.get(".resetear").click();
        cy.get(".div-integrante").should("have.length",0);
        cy.get("#div-calculos").should("have.class","oculto");      
    })
})