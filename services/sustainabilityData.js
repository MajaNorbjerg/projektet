class SustainabilityDataService {
    constructor() {
        this.farmerData = _db.collection("farmers")
    }

    // data from firebase
    // There are two ways to retrieve data stored in Cloud Firestore. Either of these methods can be used with documents, collections of documents, or the results of queries:
    // - Call a method to get the data.
    // - Set a listener to receive data-change events.
    // In this case we're using get() to get data once without listning for changes.
    async getDataByUid(uid) {

        // let data = await _db.collection('farmers').get();
        // let sustainabilityData = [];
        // data.forEach(doc => {

        //     console.log(doc.id, " => ", doc.data());

        //     let data = doc.data(); // save the data in a variable
        //     data.id = doc.id; // add the id to the data variable
        //     sustainabilityData.push(data); // push the data to the array

        //     // do what ever you want with the data array 🎉


        // });
        // console.log(sustainabilityData)
        // return sustainabilityData;



        let doc = await this.farmerData.doc(`${uid}`).get()

        let sustainabilityData = [];

        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        sustainabilityData.push(data); // push the data to the array

        // do what ever you want with the data array 🎉

        // console.log(sustainabilityData)
        return sustainabilityData;
    }





    // prepares all the data for the charts
    prepareData(sustainabilityData) {
        let years = [];
        let dieselMyData = [];
        let energyMyData = [];
        let digestionMyData = [];
        let importedMyData = [];
        let carbonFootprintMyData = [];
        // console.log(sustainabilityData[0].allArr)
        for (const year of sustainabilityData[0].allArr) { // looping through all data and pushing to arrays
            years.push(year.propertyArr[0].value);
            dieselMyData.push(year.propertyArr[7].value);
            energyMyData.push(year.propertyArr[8].value);
            digestionMyData.push(year.propertyArr[9].value);
            importedMyData.push(year.propertyArr[10].value);
            carbonFootprintMyData.push(year.propertyArr[11].value);
        }
        // console.log({
        //     years,
        //     dieselMyData,
        //     energyMyData,
        //     digestionMyData,
        //     importedMyData,
        //     carbonFootprintMyData
        // })
        return {
            years,
            dieselMyData,
            energyMyData,
            digestionMyData,
            importedMyData,
            carbonFootprintMyData
        };
    }

    async getPreparedDataByUid(uid) {
        let firebaseData = await this.getDataByUid(uid); // get the data from Firebase
        let preparedData = this.prepareData(firebaseData); // Prepare all the data. Returning an object with arrays: years, numberOfCows, milkProduction & carbonFootprint
        // console.log(preparedData);
        return preparedData; // returning the data back to the "caller", in this case the chart pages 
    }
}

const sustainabilityDataService = new SustainabilityDataService();
export default sustainabilityDataService;