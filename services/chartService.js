class ChartService {
    constructor() {
        this.uuid = '9wuor7U0o7isnnv6MBzl'
        this.farmerData = _db.collection("farmers").doc(`${this.uuid}`);

        //         // Vi skal burge: --- findes ved... farmers -> id -> allArr[0 = 2015][8-11]
        //         //('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')[7]
        //         // ('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')[8]
        //         //('Digestion, cows', 'Methane', 'kg CO2 per kg milk')[9]
        //         // ('Imported feed','Carbon dioxide','kg CO2 per kg milk')[10]

        //         // ('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2') --- nederste i arr [11]

        // Regioner regnes ud fra sealand

        this.dieselMyData = [];
        this.energyMyData = [];
        this.digestionMyData = [];
        this.importedMyData = [];
        this.carbonFootprintMyData = [];

        this.getAllData(7, this.dieselMyData);
        this.getAllData(8, this.energyMyData);
        this.getAllData(9, this.digestionMyData);
        this.getAllData(10, this.importedMyData);

        this.appendChart(this.dieselMyData);


    }

    async getAllData(number, arr) {
        await this.farmerData.get().then(function (doc) {

            let allFarmerData = doc.data();

            for (const year of allFarmerData.allArr) {
                let yearlyDiesel = {
                    year: year.propertyArr[0].value,
                    value: year.propertyArr[`${number}`].value
                }
                // console.log(yearlyDiesel)
                // console.log(number)
                arr.push(yearlyDiesel);
            }
            // console.log(arr)
        })
        console.log(this.dieselMyData)
    }


    // 2: prepare data for chart
    // seperating the objects to arrays: months and sales
    // why? that's how chart.js reads the data :)
    prepareData(data) {
        // declaring two array to store the data 
        let years = [];
        let kgCO2ForKgMilk = [];
        console.log(data)
        // looping through the data array
        for (const object of data) {
            // adding the values to the different arrays
            console.log(object)
            years.push(object.year);
            kgCO2ForKgMilk.push(object.value);
            years = ['hi', 'you']
        }
        years = ['hi', 'you']
        console.log(years, kgCO2ForKgMilk)
        // returning the two arrays (months & sales) inside and object
        // we cannot return to values - that's why we have to do it inside an array
        return {
            years,
            kgCO2ForKgMilk
        };
    }

    // 3: create and append the chart
    async appendChart(salesData) {
        console.log(salesData)
        console.log(this.dieselMyData)
        // using prepareData() to get the excact data we want
        let data = await this.prepareData(salesData);
        console.log(salesData)
        //open the developer console to inspect the result
        console.log(data);
        let chartContainer = document.getElementById('chartContainer');
        let chart = new Chart(chartContainer, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: data.years, // refering to the data object, holding data from prepareData()
                datasets: [{
                    data: data.kgCO2ForKgMilk, // refering to the data object, holding data from prepareData()
                    label: 'Kg Co2 pr. kg mælk',
                    borderColor: '#145823' // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
                    // borderColor: 'rgb(255, 255, 132)'



                    // hoverBorderColor: '#006c3a',
                    // borderWidth: 4

                }]

            },

            // Configuration options goes here
            // Go to the docs to find more: https://www.chartjs.org/docs/latest/
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 45,
                            max: 55
                        }
                    }]
                }
            }

        });


    }
}
const chartService = new ChartService();
export default chartService;