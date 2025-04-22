

const { before } = require('mocha')
const{email, senha}=require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('teste de autenticacao', () => {


  beforeEach(() => {
    cy.login(email,senha)
  });

  it(' categories should be visible', () => {
  cy.intercept('GET', '**/public/getCategories', {fixture: 'categoires.json'}).as('getCategories')
   homePage.openSearchProduct()
   homePage.openCategoriesFilter()
   homePage.categories().should('have.length.greaterThan', 1 )
  })

  it(' categories should be empty', () => {
    cy.intercept('GET', '**/public/getCategories', {fixture: 'noCategoires.json'}).as('getCategoriesEmpty')
     homePage.openSearchProduct()
     homePage.openCategoriesFilter()
     homePage.categories().should('have.length', 1 )
    })

    it(' categories should be empty with error', () => {
      cy.intercept('GET', '**/public/getCategories', {statusCode: 500 }).as('getCategoriesError')
       homePage.openSearchProduct()
       homePage.openCategoriesFilter()
       homePage.categories().should('have.length', 1 )
      })

  afterEach(() => {
    
  });

  after(() => {
    
  });

})