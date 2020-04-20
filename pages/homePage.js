export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML = /*html*/ `
            <section id="forside" class="page">
                <header class="topbar">
                    <h2>USER CRUD</h2>            
                  
                </header>
            
            </section>`
    }
}