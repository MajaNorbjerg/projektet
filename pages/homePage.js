export default class HomePage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="forside" class="page">
            <h1>Arlagården Plus</h1>
            <div class="flexContainer">
                <div class="frontPageBoks1" id="boks1"><img src="../img/indtastData.svg"></div>
                <div class="frontPageBoks2" id="boks2"><img src="../img/graf.svg"></div>
                <div class="frontPageCircle"><img src="../img/Arla_Logo_RGB.svg"> </div>
                <div class="frontPageBoks2" id="boks3"><img src="../img/danmark.svg"></div>
                <div class="frontPageBoks1" id="boks4"><img src="../img/lightballFull.svg"></div>
                </div>
            </article>`
    }
}