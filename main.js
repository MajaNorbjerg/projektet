// import pages
import HomePage from "./pages/homePage.js";
import EnterDataPage from "./pages/enterDataPage.js";
import CompareDataPage from "./pages/comepareDataPage.js"
import AddDataPage from "./pages/addDataToFirebase.js"

import SpaService from "./services/spa-service.js";
import dataService from "./services/addDataService.js"
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
window.createFarmer = () => dataService.createFarmer();