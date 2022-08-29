/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'


describe('Submit Customer Service for a new - commerce website', ()=> {
    
    it('Submit form', () => {
        cy.visit('http://automationpractice.multiformis.com/');
        //click on Contact Us tab menu
        cy.get('#contact-link > a', { timeout: 10000 }).should('be.visible')
        .click()
        //click on heading element
        cy.get('#id_contact').select('Webmaster')
        //enter email
        cy.get('#email').type(faker.internet.email())
        //enter order id
        cy.get('#id_order').type(faker.finance.account())
        //attach picture
        cy.get('#fileUpload').selectFile('cypress/fixtures/Blankpic.jpg')
        //Create a message
        cy.get('#message').type(faker.lorem.paragraph())
        //click on Send and Verify message
        cy.get('#submitMessage > span').click()
        cy.get('.alert', { timeout: 15000 }).should('be.visible')
        .then(message => {
            const m = message.text()
            expect(m).to.eq('Your message has been successfully sent to our team.')
        })
    })



})