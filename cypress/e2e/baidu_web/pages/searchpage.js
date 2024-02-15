import locator from './locator.json'

export default class SearchPage {
    constructor(){
        console.log(locator)
    }

    get input() {
        
        return cy.get(locator.searchPage.input)
    }

    get button() {
        return cy.get(locator.searchPage.button)
    }

    search(phrase){
        this.input.type(phrase)
        this.button.click()
    }
}