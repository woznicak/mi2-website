describe('Snapshot testing - ipad horizontal', () => {
  before(()=>{
    cy.viewport(1024, 768)
  })

  it('home', () => {
    cy.visit('http://127.0.0.1:1111')

    cy.matchImageSnapshot({ capture: 'fullPage' });
  })


  it('team', () => {
    cy.visit('http://127.0.0.1:1111/the-team.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })

  it('contact', () => {
    cy.visit('http://127.0.0.1:1111/contact.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })

  it('papers and books', () => {
    cy.visit('http://127.0.0.1:1111/papers-and-books.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })

  it('research', () => {
    cy.visit('http://127.0.0.1:1111/mi²-research.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })

  it('grants', () => {
    cy.visit('http://127.0.0.1:1111/research-grants.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })

  it('teaching', () => {
    cy.visit('http://127.0.0.1:1111/teaching.html')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})
