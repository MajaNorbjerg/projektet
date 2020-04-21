class DataService {
    constructor() {
        this.data = _db.collection("farmers");

    }


    createFarmer() {

        let inputs = document.querySelector('#inputs');
        let forms = inputs.getElementsByTagName('FORM');
        let inputField;
        let createProperty = "";
        let propertyArr = [];
        let theFarmerData = {}
        let propertyObj = {}
        let allArr = [];

        for (const form of forms) {

            let formChildren = document.querySelector(`#${form.id}`).getElementsByTagName('INPUT');

            for (const child of formChildren) {

                inputField = document.querySelector(`#${child.id}`)
                let value = inputField.value
                let id = inputField.id;

                createProperty = {
                    value: value,
                    id: id
                }



                propertyArr.push(createProperty);
                console.log(propertyArr)

                createProperty = "";


            }

            propertyObj = {
                propertyArr
            };

            propertyArr = [];


            allArr.push(propertyObj);

            let farmer = document.querySelector('#farmer');

            theFarmerData = {

                farmer: farmer.value,

                allArr
            }

        }
        this.data.add(theFarmerData);
        inputField.value = "";
    }
}
const dataService = new DataService();
export default dataService;