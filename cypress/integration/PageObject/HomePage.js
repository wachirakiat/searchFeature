class HomePage {
    navigateToHomePage() {
        cy.visit('https://www.officemate.co.th/en')
    }

    enterSearchKeyword(searchKeyword) {
        cy.get('[data-testid="txt-SearchBar"]').type(searchKeyword)
        return this
    }

    clickSearchButton() {
        cy.get('[id="btn-searchResultPage"]').click()
    }
}

export default HomePage