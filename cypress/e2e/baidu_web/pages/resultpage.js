export default class ResultPage {
    get title() {
        console.log(this.title())
        return cy.title()
    }

    get url() {
        console.log(cy.url())
        return cy.url()
    }

}