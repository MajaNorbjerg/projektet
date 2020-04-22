// import pages
import HomePage from "./pages/homePage.js";
import EnterDataPage from "./pages/enterDataPage.js";
import CompareDataPage from "./pages/comepareDataPage.js"
import AddDataPage from "./pages/addDataToFirebase.js"

import SpaService from "./services/spa-service.js";
import dataService from "./services/addDataService.js"
import chartService from "./services/chartService.js"

// // Declare and init pages
let homePage = new HomePage();
let enterDataPage = new EnterDataPage();
let compareDataPage = new CompareDataPage();
let addDataPage = new AddDataPage()

let _spaService = new SpaService("forside");
let _selectedUserId = "";
let _selectedImgFile = "";



window.pageChange = function () {
  _spaService.pageChange();
}

window.border = (x) => compareDataPage.border(x);
window.ikkeBorder = (x) => compareDataPage.ikkeBorder(x);
window.farveskift1 = () => compareDataPage.farveskift1();

window.createFarmer = () => dataService.createFarmer();
window.appendChart = () => chartService.appendChart();