import sustainabilityDataService from "../services/sustainabilityData.js";

import chartService from "../services/chartService.js";

class ChartAdd {
    constructor() {
        // this.template();
        this.chart;
    }

    // async init() {
    //     // user 1 - auth user 
    //     // let = authService.authUser.uid;
    //     let uid = "j7WsepsaogO7mvb2S35LEfdQLmq1"; // using a fixed uid - want to make sure there's data matching an uid in the database
    //     let data = await sustainabilityDataService.getPreparedDataByUid(uid); // getting prepared data from the service
    //     let chartContainer = document.getElementById('chartContainer');
    //     this.chart = new Chart(chartContainer, {
    //         type: 'line',
    //         data: {
    //             datasets: [
    //                 // first iniial dataset - auth user
    //                 {
    //                     data: data.milkProduction,
    //                     label: 'User: AuthUser',
    //                     fill: false,
    //                     borderColor: "#e755ba",
    //                     backgroundColor: "#e755ba",
    //                     pointBackgroundColor: "#55bae7",
    //                     pointBorderColor: "#55bae7",
    //                     pointHoverBackgroundColor: "#55bae7",
    //                     pointHoverBorderColor: "#55bae7",
    //                 }
    //             ],
    //             labels: data.years
    //         }
    //     });
    // }

    // template() {
    //     document.getElementById('content').innerHTML += /*html*/ `
    //   <section id="chartCompare" class="page">
    //     <header class="topbar">
    //       <h2>Charts Add Dataset</h2>
    //     </header>
    //     <h3>Milk Production pr cow</h3>
    //     <canvas id="milkProductionCompare"></canvas>
    //     <button onClick="addDataset()">Add Dataset</button>
    //   </section>
    // `;
    // }

    async addDataset(element, id, data, color) {
        console.log(element);
        console.log(element.checked);



        if (element.checked) {
            // user 2 - Ep7o7EToQtZzdKnEDy2ahirFHc43
            let uidCompare = id; // matching an uid from the database
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

    async removeData(id) {
        // chartService.chart.data.labels.pop();
        chartService.chart.data.datasets.forEach((dataset) => {
            if (dataset.label.includes(id)) {
                for (const d of datset.data) {
                    d.pop();
                }

            }
        });
        chartService.chart.update();
    }

    northFunction(element) {
        let checkBox = document.querySelector('#northDenmark');

        if (checkBox.checked === false) {
            checkBox.checked = true;
            this.addDataset(checkBox, 'SkosNYUR2FJDB5KYpqDQ', 'dieselMyData', '#147896')
            console.log('now its true')
            element.style.stroke = "#459632"
        } else if (checkBox.checked === true) {
            checkBox.checked = false;
            this.addDataset(checkBox, 'SkosNYUR2FJDB5KYpqDQ', 'dieselMyData', '#147896')
            console.log('now its NOT true')
            element.style.stroke = "none"
        }
    }
}
const chartAdd = new ChartAdd();
export default chartAdd;