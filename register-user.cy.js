
const random = Date.now()
const email = `emailaleatorio${random}@gmail.com`
describe("cadastro de usuário", () => {


   it('Registrar usuario com sucesso', () => {

      cy.visit("https://seubarriga.wcaquino.me/cadastro");
      cy.get('#nome').type("Emerson");
      cy.get('#email').type(email)
      cy.get("#senha").type("12345678")
      cy.get(".btn.btn-primary").click()
   });

   it('Registro de usuário com e-mail já existente', () => {

      cy.visit("https://seubarriga.wcaquino.me/cadastro");
      cy.get('#nome').type("Emerson");
      cy.get('#email').type("Emerson12@gmail.com")
      cy.get("#senha").type("12345678")
      cy.get(".btn.btn-primary").click()
   });


   it('Registro de usuário com campo nome  vazio', () => {

      cy.visit("https://seubarriga.wcaquino.me/cadastro");
      cy.get('#email').type("Emerson12@gmail.com")
      cy.get("#senha").type("12345678")
      cy.get(".btn.btn-primary").click()
   });
   it('Registro de usuário com campo email  vazio', () => {

      cy.visit("https://seubarriga.wcaquino.me/cadastro");
      cy.get('#nome').type("emerson");
      cy.get("#senha").type("12345678")
      cy.get(".btn.btn-primary").click()
   });

   it('Registro de usuário com campos vazios', () => {

      cy.visit("https://seubarriga.wcaquino.me/cadastro");
     

      cy.get(".btn.btn-primary").click()
   });





})