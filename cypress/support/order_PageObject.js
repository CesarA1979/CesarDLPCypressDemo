/// <reference types="Cypress" />

class OrderPO{
    UiLogin(){
        //Enter UserName and Password
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        //Click on Login Button
        cy.get('[data-test="login-button"]').click();
    }

    EnterUserInfo(){ 
        //Input User Information
        cy.get('[data-test="firstName"]').type("Test");
        cy.get('[data-test="lastName"]').type("Tester");
        cy.get('[data-test="postalCode"]').type("12345");
    }

}

export default OrderPO