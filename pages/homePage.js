export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="forside" class="page">
            <h1>Arlagården Plus</h1>
            <div class="flexContainer">
                <div class="frontPageBoks1" id="boks1"><img src="../img/data.svg"><h2>Indtast Data</h2></div>
                <div class="frontPageBoks2" id="boks2"><img src="../img/graf.svg"><h2>Data og Medaljer</h2></div>
                <div class="frontPageCircle"><img src="../img/Arla_Logo_RGB.svg"> </div>
                <div class="frontPageBoks2" id="boks3"><img src="../img/danmark.svg"><h2>Sammenligning</h2></div>
                <div class="frontPageBoks1" id="boks4"><img src="../img/tiltag.svg"><h2>Mulige Tiltag</h2></div>
                </div>
            </article>`
    }
}