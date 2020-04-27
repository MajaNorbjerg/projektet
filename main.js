// import pages
import HomePage from "./pages/homePage.js"
import EnterDataPage from "./pages/enterDataPage.js"
import CompareDataPage from "./pages/comepareDataPage.js"
import AddDataPage from "./pages/addDataToFirebase.js"
import SpaService from "./services/spa-service.js"
import dataService from "./services/addDataService.js"
import _donutService from "./services/donutService.js"
import chartAdd from "./services/chartAdd.js"

// // Declare and init pages
let homePage = new HomePage();
let enterDataPage = new EnterDataPage();
let compareDataPage = new CompareDataPage();
let addDataPage = new AddDataPage();


let _spaService = new SpaService("forside");


window.pageChange = function () {
  _spaService.pageChange();
}
compareDataPage.init();

window.border = (element, checkboxId) => compareDataPage.border(element, checkboxId);
window.ikkeBorder = (element, checkboxId) => compareDataPage.ikkeBorder(element, checkboxId);
window.farveskift1 = () => compareDataPage.farveskift1();
window.farveskift2 = () => compareDataPage.farveskift2();
window.farveskift3 = () => compareDataPage.farveskift3();
window.farveskift4 = () => compareDataPage.farveskift4();
window.farveskift5 = () => compareDataPage.farveskift5();
window.showFlower = () => compareDataPage.showFlower();
window.selected = (element) => compareDataPage.selected(element);
window.drawCharts = () => _donutService.drawCharts();
window.generateTable = () => chartAdd.generateTable();
window.createFarmer = () => dataService.createFarmer();
window.addDataset = (element, id, color) => chartAdd.addDataset(element, id, color);
window.mapToChart = (element, checkboxId, id, color, tdText) => chartAdd.mapToChart(element, checkboxId, id, color, tdText);
window.dataInput = (value) => chartAdd.dataInput(value);