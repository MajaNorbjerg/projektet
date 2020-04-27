import sustainabilityDataService from "../services/sustainabilityData.js";
import chartService from "../services/chartService.js";

class ChartAdd {
    constructor() {
        // this.template();
        this.farmerData = _db.collection("farmers")
        this.chart;
        this.data = 'dieselMyData';
        // this.element = document.querySelector('#northMap');
        // this.mapToChart(this.element, 'northDenmark', '7OIHxbSLJcSF2sXVtxTA', '#7d5d8a', 'NordDanmark')

    }

    dataInput(data) {
        this.data = data;
        console.log(this.data)

        // chartService.chart.data.labels.push(label);
        chartService.chart.data.datasets.forEach((dataset) => {
            console.log(dataset.label)
        });
        chartService.chart.update();
    }


    async mapToChart(element, checkboxId, id, color, tdtext) {
        console.log(element, checkboxId, id, color, tdtext)
        let checkBox = document.querySelector(`#${checkboxId}`);
        console.log(checkBox)


        if (checkBox.checked === false) {
            checkBox.checked = true;
            await this.addDataset(checkBox, id, color, tdtext)
            console.log('now its true')
            element.style.stroke = "#FFCC32";
            element.style.strokeWidth = 4;


        } else if (checkBox.checked === true) {
            checkBox.checked = false;
            await this.addDataset(checkBox, id, color, tdtext)
            console.log('now its NOT true')
            element.style.stroke = "none";


        }
        setTimeout(() => {
            this.generateTable(color);
        }, 300);
    }

    /*.........................johanne.............................*/

    /* ------------Table generator----------- */
    generateTable() {

        let from = document.querySelector('#fromYear'); //makes variable: "from" by Id #fromYear
        let to = document.querySelector('#toYear'); //makes variable: "to" by Id #toYear

        // Change labes of chart
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



        let htmlTemplate = /*html*/ `
    <table id="graphTable">
  <tbody>
    <tr id="thFirst">
    <th></th>
    <th id="fromYearTable">${from.value}</th>
    <th id="toYearTable">${to.value}</th>
  </tr>`;


        let labels = chartService.chart.data.labels;
        let fromIndex = labels.indexOf(from.value);
        let toIndex = labels.indexOf(to.value);

        // generates a "new" table each time data is contained in the data set.
        for (const data of chartService.chart.data.datasets) {

            htmlTemplate += /*html*/ `
    
    <tr>
    <!-- data.label as class on td to make backgroundcolor that matches the regions in the table-->
      <!-- data.label in td to add regions name by tdtext-->
    <td class="${data.label}">${data.label}</td> 
    <td> ${data.data[fromIndex]}</td>
    <td>${data.data[toIndex]}</td>
    </tr>
    `;
        }

        htmlTemplate += /*html*/ `
  </tbody>
  </table>
    `;

        //Change the HTML content of table with htmltemplate with id="#graphTable# and tbody
        document.querySelector("#graphTable tbody").innerHTML = htmlTemplate
    }

    async addDataset(element, id, color, tdtext) {
        console.log(element, id, color);
        console.log(element.checked);
        // console.log(data)



        if (element.checked) {

            // let doc = await this.farmerData.doc(`${id}`).get()
            // let data = doc.data(); // save the data in a variable
            // data.id = doc.id;

            // user 2 - Ep7o7EToQtZzdKnEDy2ahirFHc43
            let uidCompare = id; // matching an uid from the database
            let dataCompare = await sustainabilityDataService.getPreparedDataByUid(uidCompare); // getting prepared data from the service

            // creating the dataset to add
            let datasetToAdd = {
                label: `${tdtext}`,
                data: dataCompare[this.data],
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
                if (dataset.label.includes(tdtext)) {
                    let arr = chartService.chart.data.datasets
                    let index = arr.indexOf(dataset)
                    arr.splice(index, 1);
                }
            });
            chartService.chart.update();
        }
    }

    /*.........................johanne & maja.............................*/
    removeData() {
        let from = document.querySelector('#fromYear'); //makes variable: "from" by Id #fromYear
        let to = document.querySelector('#toYear'); //makes variable: "to" by Id #toYear

        //Return the value property of the variabels from and to in id's fromYearTable and toYearTable.
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

    // mapToChart(element, checkboxId, id, color, tdtext, r) {
    //     let checkBox = document.querySelector(`#${checkboxId}`);
    //     console.log(checkboxId);
    // }





}
const chartAdd = new ChartAdd();
export default chartAdd;