Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');

    cy.get('button').contains('Iniciar sesion').first().click();
  
    cy.get('input[name=email]').type(username)
  
    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`, { log: false })
  
    // we should be redirected to /dashboard
    cy.url().should('include', '/');

    cy.get('button').should('contain', 'Ordenes');

    cy.visit('/profile');

    cy.get('p').should('contain', 'Usuario: userAlberto');
    cy.get('p').should('contain', 'Nombre: Alberto García');
    cy.get('p').should('contain', 'Correo: test@test.test');
});
