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

        this.dieselData = [];
        this.energyData = [];
        this.digestionData = [];
        this.importedData = [];
        this.carbonFootprintData = [];

        this.getAllData(7, this.dieselData);
        this.getAllData(8, this.energyData);
        this.getAllData(9, this.digestionData);
        this.getAllData(10, this.importedData);


    }

    async getAllData(number, arr) {
        await this.farmerData.get().then(function (doc) {

            let allFarmerData = doc.data();

            for (const year of allFarmerData.allArr) {
                let yearlyDiesel = {
                    year: year.propertyArr[0].value,
                    value: year.propertyArr[`${number}`].value
                }
                console.log(yearlyDiesel)
                console.log(number)
                arr.push(yearlyDiesel);
            }
            console.log(arr)
        })
    }

    // getAllData() {
    //     console.log(this.farmerData)
    //     this.farmerData.onSnapshot(snapshotData => {
    //         this.allFarmersData = [];
    //         // snapshotData.forEach(doc => {

    //         let user = doc.data();
    //         user.id = doc.id;
    //         this.allFarmersData.push(user)
    //         // })
    //         console.log(this.allFarmersData);
    //     });
    // }


}
const chartService = new ChartService();
export default chartService;