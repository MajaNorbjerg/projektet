//....................... Maja .......................
class DataService {
    constructor() {
        this.data = _db.collection("farmers");

    }

    // Add data to firebase
    createFarmer() {

        let inputs = document.querySelector('#inputs');
        let forms = inputs.getElementsByTagName('FORM');
        let inputField;
        let createProperty = "";
        let propertyArr = [];
        let theFarmerData = {}
        let propertyObj = {}
        let allArr = [];

        for (const form of forms) { // Run thrugh all forms
            let formChildren = document.querySelector(`#${form.id}`).getElementsByTagName('INPUT'); // Find all input fields


            for (const child of formChildren) { // Run thrugh the input fields

                inputField = document.querySelector(`#${child.id}`)
                let value = inputField.value
                let id = inputField.id;

                createProperty = { // Create an object for each input field
                    value: value,
                    id: id
                }

                propertyArr.push(createProperty); // And push them to an arr
                createProperty = "";
            }

            propertyObj = { // Put the arr into an object
                propertyArr
            };

            propertyArr = []; // And clear the arr for the inputs from the next year


            allArr.push(propertyObj); // Push the object to an array which is going to hold information from all years

            let farmer = document.querySelector('#farmer');

            theFarmerData = { // Prepare an object with all information about one farmer
                farmer: farmer.value,
                allArr
            }

        }
        this.data.add(theFarmerData); // and add this to firebase
        inputField.value = "";
    }
}
const dataService = new DataService();
export default dataService;