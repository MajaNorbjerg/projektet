import sustainabilityDataService from "../services/sustainabilityData.js";
import chartService from "../services/chartService.js";

class ChartAdd {
    constructor() {
        // this.template();
        this.farmerData = _db.collection("farmers")
        this.chart;
        this.data = 'dieselMyData';
    }

    //....................... Maja .......................
    // Changes the data input for the chart. (Not fully inplemented)
    dataInput(data) {
        this.data = data;
        console.log(this.data)

        chartService.chart.data.datasets.forEach((dataset) => {
            console.log(dataset.label)
        });
        chartService.chart.update();
    }

    //....................... Maja .......................
    // Add data to the chart and table based on a click on a region on the map
    async mapToChart(element, checkboxId, id, color, tdtext) {
        let checkBox = document.querySelector(`#${checkboxId}`); // One checkbox for each region


        if (checkBox.checked === false) { // If the checkbox isn´t checked
            checkBox.checked = true; // check it
            await this.addDataset(checkBox, id, color, tdtext) // Run addDataset function
            element.style.stroke = "#FFCC32"; // Give the region a stroke
            element.style.strokeWidth = 4;


        } else if (checkBox.checked === true) { // If checkbox is checked
            checkBox.checked = false; // Uncheck it
            await this.addDataset(checkBox, id, color, tdtext) // Run addDataset function
            element.style.stroke = "none"; // Remove stroke from region


        }
        setTimeout(() => { // genereate the Table
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
    <th id="fromYearTable">${from.value}</th> <!-- Gets the value of the "from" selectbox -->
    <th id="toYearTable">${to.value}</th> <!-- Gets the value of the "to" selectbox -->
  </tr>`;


        let labels = chartService.chart.data.labels; // variable made from the graph, data in graph, and the labels in graph (an Array)
        let fromIndex = labels.indexOf(from.value); // Gets the index number of "from"
        console.log(labels.indexOf(from.value)); // Gets the index number of "to"

        let toIndex = labels.indexOf(to.value);

        // generates a "new" table each time data is contained in the data set.
        for (const data of chartService.chart.data.datasets) {

            htmlTemplate += /*html*/ `
    
    <tr>
    

    <td class="${data.label}">${data.label}</td> <!-- data.label as class on td to make backgroundcolor that matches the regions in the table. data.label in td to add regions name by tdtext-->
    <td> ${data.data[fromIndex]}</td>  <!-- Gets the data from the graph thats matches the year in "from" selectbox -->
    <td>${data.data[toIndex]}</td>  <!-- Gets the data from the graph thats matches the year in "to" selectbox -->
    </tr>
    `;
        }

        htmlTemplate += /*html*/ `
  </tbody>
  </table>
    `;

        //Change the HTML content of table with htmltemplate with id="#graphTable and tbody
        document.querySelector("#graphTable tbody").innerHTML = htmlTemplate
    }

    //....................... Maja .......................
    async addDataset(element, id, color, tdtext) {

        if (element.checked) { // If the checkbox is checked
            let uidCompare = id; // matching an uid from the database
            let dataCompare = await sustainabilityDataService.getPreparedDataByUid(uidCompare); // getting prepared data from the service

            // Creating the dataset to add
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

            chartService.chart.data.datasets.push(datasetToAdd); // Pushing the dataset to the chart
            chartService.chart.update(); // Updates the chart


        } else if (!element.checked) { // If checkbox not checked

            chartService.chart.data.datasets.forEach((dataset) => {
                if (dataset.label.includes(tdtext)) { // Find the dataset with the tdtext
                    let arr = chartService.chart.data.datasets
                    let index = arr.indexOf(dataset)
                    arr.splice(index, 1); // And remove it from the chart
                }
            });
            chartService.chart.update(); // Update the chart
        }
    }
}
const chartAdd = new ChartAdd();
export default chartAdd;