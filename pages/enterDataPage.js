export default class EnterDataPage {
    constructor() {
        this.template();
    }

    template() {
        //home page
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="indtast-data" class="page">
                <header>
                    <h2>Indtast data</h2>            
                         
                </header>
              
            </article>`
    }
}