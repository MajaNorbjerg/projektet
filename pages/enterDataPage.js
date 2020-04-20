export default class EnterDataPage {
    constructor() {
        this.template();
    }

    template() {
        //home page
        document.querySelector('#pagesSection').innerHTML = /*html*/ `
            <section id="indtast-data" class="page">
                <header class="topbar">
                    <h2>USER CRUD</h2>            
                         
                </header>
              
            </section>`
    }
}