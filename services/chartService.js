import sustainabilityDataService from "../services/sustainabilityData.js";
class ChartService {
    constructor() {
        // // this.uuid = '9wuor7U0o7isnnv6MBzl'
        // this.farmerData = _db.collection("farmers").doc(`${this.uuid}`);

        // //         // Vi skal burge: --- findes ved... farmers -> id -> allArr[0 = 2015][8-11]
        // //         //('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')[7]
        // //         // ('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')[8]
        // //         //('Digestion, cows', 'Methane', 'kg CO2 per kg milk')[9]
        // //         // ('Imported feed','Carbon dioxide','kg CO2 per kg milk')[10]

        // //         // ('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2') --- nederste i arr [11]

        // // Regioner regnes ud fra sealand
        // this.chart;

        // this.dieselMyData = [];
        // this.energyMyData = [];
        // this.digestionMyData = [];
        // this.importedMyData = [];
        // this.carbonFootprintMyData = [];

        // // this.year = [];
        this.init();

    }

    async init() {
        // let = authService.authUser.uid;
        let uid = "9wuor7U0o7isnnv6MBzl"; // using a fixed uid - want to make sure there's data matching an uid in the database
        let data = await sustainabilityDataService.getPreparedDataByUid(uid); // getting prepared data from the service
        // call append functions with the dataset: data
        this.appendCowsChart(data);

    }
    //appending the chart
    appendCowsChart(data) {
        // generate chart
        console.log(data.dieselMyData)
        let chartContainer = document.getElementById("chartContainer");
        let chart = new Chart(chartContainer, {
            type: 'line',
            data: {
                datasets: [{
                    data: data.dieselMyData,
                    label: 'Number of Cows',
                    fill: false,
                    borderColor: "#e755ba",
                    backgroundColor: "#e755ba",
                    pointBackgroundColor: "#55bae7",
                    pointBorderColor: "#55bae7",
                    pointHoverBackgroundColor: "#55bae7",
                    pointHoverBorderColor: "#55bae7",
                }],
                labels: data.years
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            // min: (Math.min(...data.dieselMyData) - 5),
                            // max: (Math.max(...data.dieselMyData) + 1)
                        }
                    }]
                }
            }
        });
    }









    // async init() {
    //     let uid = '9wuor7U0o7isnnv6MBzl';
    //     let data = await sustainabilityDataService.getPreparedDataByUid(uid);
    //     console.log(data)
    //     // this.dieselMyData = await this.getAllData(7);
    //     // this.appendChart(this.dieselMyData);

    // }

    // async getAllData(number) {
    //     let arrayToReturn = [];
    //     let doc = await this.farmerData.get();
    //     let allFarmerData = doc.data();


    //     for (const year of allFarmerData.allArr) {
    //         let yearlyDiesel = {
    //             year: year.propertyArr[0].value,
    //             value: year.propertyArr[`${number}`].value
    //         }

    //         arrayToReturn.push(yearlyDiesel);
    //     }
    //     return arrayToReturn;
    // }


    // // 2: prepare data for chart
    // // seperating the objects to arrays: months and sales
    // // why? that's how chart.js reads the data :)
    // prepareData(data) {
    //     // declaring two array to store the data 
    //     let years = [];
    //     let dieselData = [];
    //     let energyData = [];
    //     let digestionData = [];
    //     let footprintData = [];
    //     console.log(data)
    //     // looping through the data array
    //     for (const object of data) {
    //         // adding the values to the different arrays
    //         console.log(object)
    //         years.push(object.year);
    //         dieselData.push(object.value);

    //     }

    //     console.log(years, dieselData)
    //     // returning the two arrays (months & sales) inside and object
    //     // we cannot return to values - that's why we have to do it inside an array
    //     return {
    //         years,
    //         dieselData
    //     };
    // }

    // // 3: create and append the chart
    // appendChart(salesData) {
    //     console.log(salesData)

    //     // using prepareData() to get the excact data we want
    //     let data = this.prepareData(salesData);

    //     //open the developer console to inspect the result

    //     let chartContainer = document.getElementById('chartContainer');
    //     this.chart = new Chart(chartContainer, {
    //         // The type of chart we want to create
    //         type: 'line',
    //         // The data for our dataset
    //         data: {
    //             labels: data.years, // refering to the data object, holding data from prepareData()
    //             datasets: [{
    //                 data: data.dieselData, // refering to the data object, holding data from prepareData()
    //                 label: 'Kg Co2 pr. kg mælk',
    //                 borderColor: '#145823' // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
    //                 // borderColor: 'rgb(255, 255, 132)'



    //                 // hoverBorderColor: '#006c3a',
    //                 // borderWidth: 4

    //             }]

    //         }

    //     });


    // }

    // async addDataset() {
    //     // this.chart.data.datasets.forEach((dataset) => {
    //     //     dataset.data.pop();
    //     // });
    //     this.energyMyData = await this.getAllData(8);
    //     let arr = []
    //     for (const year of this.energyMyData) {
    //         arr.push(year.value)
    //     }

    //     //   // user 2 - Ep7o7EToQtZzdKnEDy2ahirFHc43
    //     //   let uidCompare = "Ep7o7EToQtZzdKnEDy2ahirFHc43"; // matching an uid from the database
    //     //   let dataCompare = await sustainabilityDataService.getPreparedDataByUid(uidCompare); // getting prepared data from the service
    //     // creating the dataset to add
    //     let datasetToAdd = {
    //         label: 'User: Ep7o7EToQtZzdKnEDy2ahirFHc43',
    //         data: arr,
    //         fill: false,
    //         borderColor: "#55bae7",
    //         backgroundColor: "#55bae7",
    //         pointBackgroundColor: "#e755ba",
    //         pointBorderColor: "#e755ba",
    //         pointHoverBackgroundColor: "#e755ba",
    //         pointHoverBorderColor: "#e755ba",
    //         type: 'line'
    //     };
    //     this.chart.data.datasets.push(datasetToAdd);
    //     this.chart.update();
    //     console.log(this.chart.data.datasets)
}

const chartService = new ChartService();
export default chartService;