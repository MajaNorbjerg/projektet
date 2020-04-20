export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <section id="forside" class="page">
                <header>
                    <h2>Arlagården Plus</h2>            
                  
                </header>
            
            </section>`
    }
}