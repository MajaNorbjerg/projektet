//....................... Maja .......................
class SustainabilityDataService {
    constructor() {
        this.farmerData = _db.collection("farmers")
    }

    // Get farmer data based on firebase document id
    async getDataByUid(uid) {
        let doc = await this.farmerData.doc(`${uid}`).get() // Wait for the data and put it into a variable

        let sustainabilityData = [];

        let data = doc.data(); // Save the data in a variable
        data.id = doc.id; // Add the id to the data variable
        sustainabilityData.push(data); // Push the data to the array

        return sustainabilityData;
    }


    // Prepares all the data for the charts
    prepareData(sustainabilityData) {
        let years = [];
        let dieselMyData = [];
        let energyMyData = [];
        let digestionMyData = [];
        let importedMyData = [];
        let carbonFootprintMyData = [];

        for (const year of sustainabilityData[0].allArr) { // Looping through all data and pushing to arrays
            years.push(year.propertyArr[0].value);
            dieselMyData.push(year.propertyArr[7].value);
            energyMyData.push(year.propertyArr[8].value);
            digestionMyData.push(year.propertyArr[9].value);
            importedMyData.push(year.propertyArr[10].value);
            carbonFootprintMyData.push(year.propertyArr[11].value);
        }

        return { // Return all arrays in an object
            years,
            dieselMyData,
            energyMyData,
            digestionMyData,
            importedMyData,
            carbonFootprintMyData
        };
    }
    // Function to prepare the data first gotten from Firebase
    async getPreparedDataByUid(uid) {
        let firebaseData = await this.getDataByUid(uid); // Get the data from Firebase
        let preparedData = this.prepareData(firebaseData); // Prepare all the data. Returning an object with arrays

        return preparedData; // Returning the data back to the "caller", in this case the chart pages 
    }
}

const sustainabilityDataService = new SustainabilityDataService();
export default sustainabilityDataService;