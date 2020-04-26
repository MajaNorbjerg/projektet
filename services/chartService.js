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
        // let = authService.authUser.uid; 
        let uid = "7OIHxbSLJcSF2sXVtxTA"; // using a fixed uid - want to make sure there's data matching an uid in the database
        let data = await sustainabilityDataService.getPreparedDataByUid(uid); // getting prepared data from the service
        let region = "NordDanmark";
        // call append functions with the dataset: data
        this.appendCowsChart(data, uid, region);

    }
    //appending the chart
    appendCowsChart(data, uid, region) {
        // generate chart
        let chartContainer = document.getElementById("chartContainer");
        this.chart = new Chart(chartContainer, { // Generate chart
            type: 'line',
            data: {
                datasets: [{
                    data: data.dieselMyData,
                    label: region,
                    fill: false,
                    borderColor: this.northColor,

                    //     pointBackgroundColor: this.northColor,
                    //     pointBorderColor: this.northColor,
                    //     pointHoverBackgroundColor: this.northColor,
                    //     pointHoverBorderColor: this.northColor,
                    // }
                }],
                labels: data.years
            }
        });
    }
}

const chartService = new ChartService();
export default chartService;