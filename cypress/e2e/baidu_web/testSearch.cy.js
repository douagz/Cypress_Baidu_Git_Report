import SearchPage from './pages/searchpage.js'
import ResultPage from './pages/resultpage.js'
/// <reference types="Cypress" />

describe("baiduSearch",()=>{
    const phrases=['cypress','playwright']

    beforeEach(()=>{
        let url="https://baidu.com"
        cy.visit(url)
    })

    phrases.forEach((phrase)=>{
        it("search the input phrase",()=>{
            let searchpage = new SearchPage()            
            searchpage.search(phrase)
    
            let resultpage= new ResultPage()
            resultpage.url.should('include',phrase)

        })
    })
})

