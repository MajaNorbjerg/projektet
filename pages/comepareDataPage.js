export default class CompareDataPage {
    constructor() {
        this.template();
    }

    template() {
        //home page
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <section id="comepare-data" class="page">
            <nav class="tabbar">
            <a href="#regioner">Regioner</a>
            <a href="#lande">Lande</a>
          </nav>  
            <header>
                    <h2>Sammenlign data</h2>            
                </header>
                <article><p>Tidsperiode</p><select id="fromYear"></select><p>Til</p><select id="toYear"></select></article>

                <article><button type="button">I alt</button><button type="button">Metan</button><button type="button">Diesel</button><button type="button">Foder</button><button type="button">Strøm</button></article>
                <article>
                <div>TEKST med farver
                <button type="button">Danmarks data</button><button type="button">Din data</button>
                </div>
                <svg></svg>
                </article>

                <article>
                Graf
                Tabel
                </article>

                <button type="button">Vis mere data</button><button type="button">Eksporter som excel (evt som PDF)</button>
              
            </section>`
    }
}