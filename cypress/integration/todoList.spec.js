describe('Todo List Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows header', () => {
    cy.get('h1').should('contain', 'React Testing Demo');
  });

  it('shows TODO list with 4 items', () => {
    cy.get('ul > li').should('have.length', 4);
  });

  it('should have "code Todo list logic" item completed', () => {
    cy.get('[data-testid="code Todo list logic"]').should(
      'have.class',
      'todo-item--completed'
    );
  });

  it('should have "use Cypress" item NOT completed', () => {
    cy.get('[data-testid="use Cypress"]').should(
      'not.have.class',
      'todo-item--completed'
    );
  });

  it('after click, should have "use Cypress" item completed', () => {
    cy.get('[data-testid="use Cypress"]')
      .click()
      .then(() => {
        cy.get('[data-testid="use Cypress"]').should(
          'have.class',
          'todo-item--completed'
        );
      });
  });
});
