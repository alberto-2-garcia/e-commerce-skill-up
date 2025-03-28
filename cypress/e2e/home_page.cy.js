describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');

        cy.get('h4').should('contain', 'Home');
        cy.get('h5').should('contain', 'Cabeza de Lego');
        cy.get('p').should('contain', '$100.0');
        cy.get('button').should('contain', 'Agregar al carrito');
    });

    it('login', () => {
        const username = "test@test.test";
        const password = "test1234";
    
        // cy.visit('/');
        // cy.get('button').contains('Iniciar sesion').first().click();

        // cy.get('input[name=email]').type(username);

        // cy.get('input[name=password]').type(`${password}{enter}`);

        // cy.url().should('include', '/');

        // cy.get('button').should('contain', 'Ordenes');
        cy.login(username, password);
    });

    it('opens shopping cart when adding product', () => {
        cy.visit('/');
        
        cy.get('button').contains('Agregar al carrito').first().click();

        cy.url().should('include', '/shopping-cart');

        cy.get('h6').should('contain', 'Cabeza de Lego');
        cy.get('p').should('contain', 'Coleccion de cabeza de legos a granel para armado');
        cy.get('p').should('contain', '$100.0');
        cy.get('p').should('contain', '1');
        cy.get('button').should('contain', 'Eliminar producto');

        cy.get('p').should('contain', 'Total: $100.0');

        cy.get('button').should('contain', 'Confirmar compra');

    });
});
