//....................... Maja .......................

import sustainabilityDataService from "../services/sustainabilityData.js";
class ChartService {
    constructor() {
        this.northColor = '#7d5d8a';
        this.southColor = '#f8353c';
        this.zeaColor = '#3cc4eb';
        this.denmarkColor = '#efc531';
        this.myColor = '#4bb131';

        this.chart;
        this.init();

    }

    // Initial function to run
    async init() {
        let uid = "7OIHxbSLJcSF2sXVtxTA"; // Using a fixed uid - want to make sure there's data matching an uid in the database
        let data = await sustainabilityDataService.getPreparedDataByUid(uid); // Getting prepared data from the sustainabilityData service
        this.createChart(data, uid);

    }
    //Appending the chart
    createChart(data, uid) {
        let chartContainer = document.getElementById("chartContainer");
        this.chart = new Chart(chartContainer, { // Generate chart
            type: 'line',
            data: {
                datasets: [
                    //     {
                    //     data: data.dieselMyData,
                    //     label: uid,
                    //     fill: false,
                    //     borderColor: this.northColor,

                    //     pointBackgroundColor: this.northColor,
                    //     pointBorderColor: this.northColor,
                    //     pointHoverBackgroundColor: this.northColor,
                    //     pointHoverBorderColor: this.northColor,
                    // }
                ],
                labels: data.years
            }
        });
    }
}

const chartService = new ChartService();
export default chartService;