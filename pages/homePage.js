export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="forside" class="page">
                <header>
                    <h2>Forside</h2>            
                  
                </header>
            
            </article>`
    }
}