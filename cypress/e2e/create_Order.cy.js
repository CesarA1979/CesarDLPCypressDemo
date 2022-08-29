/// <reference types="Cypress" />
import OrderPO from '../support/order_PageObject';
const orderHome = new OrderPO();

describe('Submit and Validate an Order', () => {
    it('Create and Validate Order', () => {
        //Open Browser
        cy.visit('https://www.saucedemo.com/');
        //Verify Title
        cy.title().should('eq', 'Swag Labs')
        //Login
        orderHome.UiLogin();
        //Verify Iventory page
        cy.get('.title', { timeout: 3000 }).should('be.visible')
        .then(inventory => {
            let inventoryTitle = inventory.text();
            expect(inventoryTitle).eq("Products");
            console.log(inventoryTitle);
        });
        // Add Sauce Labs Backpack
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // Click on View Shopping cart
        cy.get('.shopping_cart_link', { timeout: 3000 }).should('be.visible')
        .click();
        //Verify Item Name
        cy.get('.inventory_item_name')
        .then(item => {
            expect(item.text()).eq("Sauce Labs Backpack");
        })
        //click on CheckOut Button
        cy.get('[data-test="checkout"]').click();
        // Enter User Information
        orderHome.EnterUserInfo();
        //Click on Continue Button
        cy.get('[data-test="continue"]').click();
        //Click on Finish Button
        cy.get('[data-test="finish"]', { timeout: 3000 }).should('be.visible').click();
        //Verify Success Screen
        cy.get('.complete-header')
        .then(successScreen => {
            expect(successScreen.text()).eq("THANK YOU FOR YOUR ORDER");
        })
    });

});