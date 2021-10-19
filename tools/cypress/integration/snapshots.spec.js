describe('Snapshot testing - fullpage', () => {
  it('home', () => {
    cy.visit('http://127.0.0.1:1111')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})

describe('Snapshot testing - desktop', () => {
  before(()=>{
    cy.viewport('macbook-16') // Set viewport to 375px x 667px
  })

  it('home', () => {
    cy.visit('http://127.0.0.1:1111')
    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})

describe('Snapshot testing - ipad vertical', () => {
  before(()=>{
    cy.viewport('ipad-2') // Set viewport to 375px x 667px
  })

  it('home', () => {
    cy.visit('http://127.0.0.1:1111')

    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})

describe('Snapshot testing - ipad horizontal', () => {
  before(()=>{
    cy.viewport(1024, 768)
  })

  it('home', () => {
    cy.visit('http://127.0.0.1:1111')

    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})

describe('Snapshot testing - mobile', () => {
  before(()=>{
    cy.viewport('iphone-6') // Set viewport to 375px x 667px
  })

  it('home', () => {
    cy.visit('http://127.0.0.1:1111')

    cy.matchImageSnapshot({ capture: 'fullPage' });
  })
})
