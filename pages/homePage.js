export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="forside" class="page">
            <h1>Arlagården Plus</h1>
            <div class="flexContainer">
                <div class="frontPageBoks1" id="boks1"><img src="../img/data.svg"><h2 class="h2Home">Indtast Data</h2></div>
                <div class="frontPageBoks1" id="boks2"><img src="../img/graf.svg"><h2 class="h2Home">Data og Medaljer</h2></div>
                <div class="frontPageBoks1"><div class="frontPageCircle"></a><img src="../img/Arla_Logo_RGB.svg"> </div></div>
                <div class="frontPageBoks1" id="boks3"><a href="#comepare-data"><img src="../img/danmark.svg"></a><h2 class="h2Home">Sammenligning</h2></div>
                <div class="frontPageBoks1" id="boks4"><img src="../img/tiltag.svg"><h2 class="h2Home">Mulige Tiltag</h2></div>
            </div>
            <div id="frontPageTekst">
            <h3>Her har du mulighed for:</h3>
            <ul>
            <li>Indtaste data for det forgangene år</li>
            <li>Se dine tidligere indtastede data og badges</li>
            <li>Yderligere sammenligning med andre regioner</li>
            <li>Se vores forslag til mulige forbedringer</li>
            </ul>
            </div>
            </article>`
    }
}