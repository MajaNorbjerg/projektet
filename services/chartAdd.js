import sustainabilityDataService from "../services/sustainabilityData.js";

import chartService from "../services/chartService.js";

class ChartAdd {
    constructor() {
        // this.template();
        this.chart;
        // this.startChart();
    }

    // dataInput(data){

    startChart() {
        let checkBox = document.querySelector('#northDenmark');
        if (checkBox.checked) {
            this.addDataset(checkBox, '7OIHxbSLJcSF2sXVtxTA', 'dieselMyData', '#147896')
        }

    }

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


        chartService.chart.options = {

            scales: {
                xAxes: [{
                    ticks: {
                        min: from.value,
                        max: to.value
                    }
                }]
                // yAxes: [{
                //     display: true
                // }]
            }
        };
        chartService.chart.update();

    }

    mapToChart(element, checkboxId, id, color) {
        let checkBox = document.querySelector(`#${checkboxId}`);

        if (checkBox.checked === false) {
            checkBox.checked = true;
            this.addDataset(checkBox, id, 'dieselMyData', color)
            console.log('now its true')
            element.style.stroke = "#459632"
        } else if (checkBox.checked === true) {
            checkBox.checked = false;
            this.addDataset(checkBox, id, 'dieselMyData', color)
            console.log('now its NOT true')
            element.style.stroke = "none"
        }
    }




}
const chartAdd = new ChartAdd();
export default chartAdd;