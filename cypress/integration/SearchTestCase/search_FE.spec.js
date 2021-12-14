/// <reference types="cypress" />

import HomePage from "../PageObject/HomePage"

describe('Search Feature', function() {
  it('TC_FE_SEARCH_001 Customer input keyword', function() {
    const homePage = new HomePage();
    homePage.navigateToHomePage();
    homePage.enterSearchKeyword('kn95');
    cy.get('body', {timeout: 10000}).should('contain','KN95 Foldable mask ')
  })

  it('TC_FE_SEARCH_008 Customer search product with some part of product name', function() {
    const homePage = new HomePage();
    homePage.navigateToHomePage();
    homePage.enterSearchKeyword('HP');
    homePage.clickSearchButton();
    cy.url().should('include', '/search/HP')
    cy.get('body', {timeout: 10000}).should('contain','DeskJet 2330 Multifuntion Printer 7WN43A White')
  })
})
