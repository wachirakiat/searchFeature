/// <reference types="cypress" />

describe('Search Feature Backend', () => {
  
    it('TC_BE_SEARCH_001 Verify API /api/search/suggest in case have suggest product', () => {
      cy.request('GET', 'https://www.officemate.co.th/en/search/hp').should((response) => {
        expect(response.status).to.eq(200)
      })
    });
})



