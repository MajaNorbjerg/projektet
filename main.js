// import pages
import HomePage from "./pages/homePage.js"
import EnterDataPage from "./pages/enterDataPage.js"
import CompareDataPage from "./pages/comepareDataPage.js"
import AddDataPage from "./pages/addDataToFirebase.js"

import SpaService from "./services/spa-service.js"
import dataService from "./services/addDataService.js"
import chartService from "./services/chartService.js"
// import _donutService from "./services/donutService.js"
import sustainabilityDataService from "./services/sustainabilityData.js"

// // Declare and init pages
let homePage = new HomePage();
let enterDataPage = new EnterDataPage();
let compareDataPage = new CompareDataPage();
let addDataPage = new AddDataPage();

let _spaService = new SpaService("forside");
let _selectedUserId = "";
let _selectedImgFile = "";



window.pageChange = function () {
  _spaService.pageChange();
}

window.border = (x) => compareDataPage.border(x);
window.ikkeBorder = (x) => compareDataPage.ikkeBorder(x);
window.farveskift1 = () => compareDataPage.farveskift1();
window.showFlower = () => compareDataPage.showFlower();
window.selected = (element) => compareDataPage.selected(element);

window.createFarmer = () => dataService.createFarmer();
// window.appendChart = () => chartService.appendChart();
window.addDataset = () => chartService.addDataset();
window.removeData = (dataset) => chartService.removeData(dataset);











// // 1: data
// // Array of objects with sale
// let _salesData2018 = [{
//     month: 'January',
//     sale: 1000000
//   },
//   {
//     month: 'February',
//     sale: 890000
//   },
//   {
//     month: 'March',
//     sale: 690000
//   },
//   {
//     month: 'April',
//     sale: 880000
//   },
//   {
//     month: 'May',
//     sale: 705000
//   },
//   {
//     month: 'June',
//     sale: 980000
//   }
// ];

// // console.log(_salesData2018);

// // Antother array of objects with sale
// let _salesData2019 = [{
//     month: 'January',
//     sale: 900000
//   },
//   {
//     month: 'February',
//     sale: 790000
//   },
//   {
//     month: 'March',
//     sale: 790000
//   },
//   {
//     month: 'April',
//     sale: 880000
//   },
//   {
//     month: 'May',
//     sale: 705500
//   },
//   {
//     month: 'June',
//     sale: 900000
//   }
// ];

// // console.log(_salesData2019);



// let months = [];
// let sales = [];

// // 2: prepare data for chart
// // seperating the objects to arrays: months and sales
// // why? that's how chart.js reads the data :)
// function prepareData(data) {
//   // declaring two array to store the data 
//   months = []
//   sales = []

//   // looping through the global _salesData array
//   for (const saleObject of data) {
//     // adding the values to the different arrays
//     months.push(saleObject.month);
//     sales.push(saleObject.sale);
//   }
//   // returning the two arrays (months & sales) inside and object
//   // we cannot return to values - that's why we have to do it inside an array
//   return {
//     months,
//     sales
//   };
// }
// let chart;
// let data2018 = prepareData(_salesData2018);
// let data2019 = prepareData(_salesData2019);
// console.log(data2018.sales.length)

// let sliceNumber = 2;

// let theFirstData = data2018.sales.slice(data2018.sales.length - sliceNumber);
// let theLabels = months.slice(months.length - sliceNumber)
// console.log(theFirstData, data2019.sales)

// let firstDataset = {
//   data: theFirstData, //data2018.sales refering to the data object, holding data from prepareData()
//   label: 'Revenue first 6 month 2018',
//   backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
//   borderColor: '#ff6384'
// }

// // second dataset - 2019
// let secondDataset = {
//   data: data2019.sales,
//   label: 'Revenue first 6 month 2019',
//   backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
//   borderColor: '#d863ff'
// }


// // 3: create and append the chart
// function appendChart() {
//   // using prepareData() to get the excact data we want

//   //open the developer console to inspect the result
//   // console.log(data2018);
//   // console.log(data2019);

//   let chartContainer = document.getElementById('chartContainer');

//   chart = new Chart(chartContainer, {
//     // The type of chart we want to create
//     type: 'line',
//     // The data for our dataset
//     data: {
//       labels: theLabels, //data2018.months refering to the data object, holding data from prepareData()
//       datasets: [
//         // first dataset - 2018
//         firstDataset
//         // {
//         //   data: data2018.sales, // refering to the data object, holding data from prepareData()
//         //   label: 'Revenue first 6 month 2018',
//         //   backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
//         //   borderColor: '#ff6384'
//         // }
//         // second dataset - 2019
//         // {
//         //   data: data2019.sales,
//         //   label: 'Revenue first 6 month 2019',
//         //   backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
//         //   borderColor: '#d863ff'
//         // }
//       ]
//     },
//     // Configuration options goes here
//     // Go to the docs to find more: https://www.chartjs.org/docs/latest/
//     options: {
//       title: {
//         display: true,
//         text: 'Sales'
//       }
//     }

//   });


//   // chart.data.datasets.push(firstDataset);
// }

// appendChart();


// function addMonth() {


//   sliceNumber++;

//   let theData = data2018.sales.slice(data2018.sales.length - sliceNumber);
//   let theLabel = months.slice(months.length - sliceNumber, months.length - sliceNumber + 1);
//   if (theLabel.length > -1) {
//     console.log(theFirstData)


//     chart.data.labels.unshift(theLabel[0]);
//     chart.data.datasets.forEach((dataset) => {
//       dataset.data.unshift(theData[0]);
//     });
//     chart.update();
//   }
// }

// function removeMonth() {
//   sliceNumber--;
//   chart.data.labels.shift();
//   chart.data.datasets.forEach((dataset) => {
//     dataset.data.shift();
//   });
//   chart.update();
// }


// function addData(theDataset) {
//   document.querySelector('#kurvetekst').innerHTML = "";
//   let first = "";
//   let second = "";

//   if (chart.data.datasets.indexOf(theDataset) === -1) {
//     chart.data.datasets.push(theDataset);
//     chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(secondDataset.data);
//     });
//     chart.update();
//   } else {
//     console.log('The dataset is allready there')
//   }
//   console.log(chart.data.datasets)

//   if (chart.data.datasets.includes(firstDataset)) {
//     first = /*html*/ `
//   ${firstDataset.label} 
//   `;
//   } else {
//     fisrt = "";
//   }

//   if (chart.data.datasets.includes(secondDataset)) {
//     second = /*html*/ `
//   ${secondDataset.label} 
//   `;
//   } else {
//     second = "";
//   }


//   document.querySelector('#kurvetekst').innerHTML = /*html*/ `
// ${first}
// ${second}
// `;
// }

// function removeData(theDataset) {
//   document.querySelector('#kurvetekst').innerHTML = "";
//   let first = "";
//   let second = "";


//   let theIndex = chart.data.datasets.indexOf(theDataset);
//   if (theIndex > -1) {
//     chart.data.datasets.splice(theIndex, 1);
//     chart.update();
//   } else {
//     console.log('The dataset has allready been removed')
//   }
//   console.log(chart.data.datasets)


//   if (chart.data.datasets.includes(firstDataset)) {
//     first = /*html*/ `
//   ${firstDataset.label} 
//   `;
//   } else {
//     fisrt = "";
//   }

//   if (chart.data.datasets.includes(secondDataset)) {
//     second = /*html*/ `
//   ${secondDataset.label} 
//   `;
//   } else {
//     second = "";
//   }


//   document.querySelector('#kurvetekst').innerHTML = /*html*/ `
// ${first}
// ${second}
// `;
// }