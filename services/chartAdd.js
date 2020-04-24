import sustainabilityDataService from "../services/sustainabilityData.js";

import chartService from "../services/chartService.js";

class ChartAdd {
    constructor() {
        // this.template();
        this.chart;
        // this.startChart();
        // this.north = document.querySelector('#northMap')
        // this.mapToChart('document.querySelector("#northMap")', 'northDenmark', '7OIHxbSLJcSF2sXVtxTA', '#7d5d8a')

    }

    // dataInput(data){

    // startChart() {
    //     let checkBox = document.querySelector('#northDenmark');
    //     if (checkBox.checked) {
    //         // this.addDataset(checkBox, '7OIHxbSLJcSF2sXVtxTA', 'dieselMyData', '#147896')
    //     }

    // }

    // }

    async addDataset(element, id, data, color) {
        console.log(element);
        console.log(element.checked);
        console.log(data)


        if (element.checked) {
            // user 2 - Ep7o7EToQtZzdKnEDy2ahirFHc43
            let uidCompare = id; // matching an uid from the database
            console.log(uidCompare)
            let dataCompare = await sustainabilityDataService.getPreparedDataByUid(uidCompare); // getting prepared data from the service
            console.log(dataCompare)
            // creating the dataset to add
            let datasetToAdd = {
                label: `User: ${id}`,
                data: dataCompare[data],
                fill: false,
                borderColor: color,
                backgroundColor: color,
                pointBackgroundColor: color,
                pointBorderColor: color,
                pointHoverBackgroundColor: color,
                pointHoverBorderColor: color,
                type: 'line'
            };
            chartService.chart.data.datasets.push(datasetToAdd);
            chartService.chart.update();
        } else if (!element.checked) {

            chartService.chart.data.datasets.forEach((dataset) => {
                if (dataset.label.includes(id)) {
                    let arr = chartService.chart.data.datasets
                    let index = arr.indexOf(dataset)
                    arr.splice(index, 1);
                }
            });
            chartService.chart.update();
        }
    }

    removeData() {
        let from = document.querySelector('#fromYear');
        let to = document.querySelector('#toYear');

        document.getElementById("fromYearTable").innerHTML = +from.value;
        document.getElementById("toYearTable").innerHTML = +to.value;

        chartService.chart.options = {

            scales: {
                xAxes: [{
                    ticks: {
                        min: from.value,
                        max: to.value
                    }
                }]

            }
        };
        chartService.chart.update();


        /* -----------  fra tidslinje til tabel ----- */

        /* function myFunction() {
        var x = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
      } */

        // console.log(element.id)
        // if (element.id === 'fromYear') {

        //     if (element.value === 2017) {
        //         chartService.chart.data.labels.slice(1, 3);
        //         chartService.chart.data.datasets.forEach((dataset) => {
        //             console.log(dataset.data)
        //         });

        //     }

        //     chartService.chart.data.labels.shift();

        //     // let spliced = arr.slice(0, 3)
        //     // console.log(arr, spliced)
        //     chartService.chart.data.datasets.forEach((dataset) => {
        //         console.log(dataset.data)
        //         dataset.data.shift();

        //     });

        // } else if (element.id === 'toYear') {
        //     console.log(element.id)


        //     chartService.chart.data.labels.pop();
        //     chartService.chart.data.labels.pop();
        //     // let spliced = arr.slice(0, 3)
        //     // console.log(arr, spliced)
        //     chartService.chart.data.datasets.forEach((dataset) => {
        //         console.log(dataset.data)

        //         dataset.data.pop();
        //         dataset.data.pop();
        //     });
        // }
        // // fromYear
        // // toYear

        // chartService.chart.update();
    }

    mapToChart(element, checkboxId, id, color, tdtext, r) {
        let checkBox = document.querySelector(`#${checkboxId}`);
        console.log(checkboxId);
    }

    mapToChart(element, checkboxId, id, color) {
        console.log(element)
        let checkBox = document.querySelector(`#${checkboxId}`);
        console.log(checkBox)


        if (checkBox.checked === false) {
            checkBox.checked = true;
            this.addDataset(checkBox, id, 'dieselMyData', color)
            console.log('now its true')
            element.style.stroke = "#459632"
            let table = document.getElementById("graphTable");
            let row = table.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = tdtext;

        } else if (checkBox.checked === true) {
            checkBox.checked = false;
            this.addDataset(checkBox, id, 'dieselMyData', color)
            console.log('now its NOT true')
            element.style.stroke = "none";

            /* var table = document.getElementById("graphTable");
             console.log(table);
             
             for (const row of table.children) {
                 console.log(row[1]);
                 
             } */

            /*
             for (var i = 0, row; row = table.rows[i]; i++) {
                console.log(table.rows);
                
                var a = tdtext.indexOf();
                a.deleteRow(td)
                
                 //iterate through cells
                 //cells would be accessed using the "cell" variable assigned in the for loop
            } */
        }
    }




}
const chartAdd = new ChartAdd();
export default chartAdd;