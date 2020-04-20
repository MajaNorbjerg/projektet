import SpaService from "./services/spa-service.js";

// import pages
import HomePage from "./pages/homePage.js";
import EnterDataPage from "./pages/enterDataPage.js";

let _spaService = new SpaService("forside");
let _selectedUserId = "";
let _selectedImgFile = "";

// // Declare and init pages
let homePage = new HomePage();
let enterDataPage = new EnterDataPage();

window.pageChange = function () {
  _spaService.pageChange();
}



window.previewImage = (file, previewId) => {
  if (file) {
    _selectedImgFile = file;
    let reader = new FileReader();
    reader.onload = event => {
      document.querySelector('#' + previewId).setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file);
  }
}