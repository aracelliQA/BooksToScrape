// Aracelli Novaes da Palma
// QA Tester
// LinkedIn: www.linkedin.com/in/aracelliqa
// Testing Books to Scrape functionalities using Cypress
// App link: https://books.toscrape.com/index.html

describe('Browser Actions', () => {
  beforeEach( ()=> {

      cy.visit('https://books.toscrape.com/index.html')
      cy.url().should('include','index.html')
    
  })
  describe('Should check home page elements', () => {

    it('Should check the home page elements', () => {

      cy.get('h1').should('have.text', 'All products')
      cy.get('.alert').should('be.visible')
      cy.get('.side_categories').should('be.visible')
      cy.get('.product_pod').should('be.visible')

    })

  })
  describe('Should check filtering functionalities', () => {

  it('Should click on Travel category', ()=>{

    cy.get('a').contains('Travel').click()
    cy.get('h1').contains('Travel')
    cy.get('.product_pod').should('have.length', 11)

  })

})
  describe('Should check product page elements',()=>{

    it('Should access the product Tipping the Velvet', () =>{

      cy.get('a').contains('Tipping the Velvet').click()
      cy.url().should('include', 'tipping-the-velvet_999/index.html')

      it('Should check the product page', () => {

        cy.get('h1').should('have.text', 'Tipping the Velvet')
        cy.get('.price_color').should('be.visible')
        cy.get('.price_color').should('have.text', '£53.74')

      })
    }) 

  })

})