import SpaService from "./services/spa-service.js";

// import pages
import HomePage from "./pages/homePage.js";
import EnterDataPage from "./pages/enterDataPage.js";
import CompareDataPage from "./pages/comepareDataPage.js"

let _spaService = new SpaService("forside");
let _selectedUserId = "";
let _selectedImgFile = "";

// // Declare and init pages
let homePage = new HomePage();
let enterDataPage = new EnterDataPage();
let compareDataPage = new CompareDataPage();

window.pageChange = function () {
  _spaService.pageChange();
}