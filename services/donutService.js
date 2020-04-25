class DonutService {
    constructor() {
        this._badgeDataNordjylland = [{
            label: "Guld",
            count: 13,
            color: "#d1a535"
        }, {
            label: "Sølv",
            count: 14,
            color: "#8e8c8c"
        }, {
            label: "Bronce",
            count: 20,
            color: "#b57c46"
        }, {
            label: "Ingen",
            count: 53,
            color: "#E5E5E7"
        }]
        this._badgeDataSoenderjylland = [{
            label: "Guld",
            count: 20,
            color: "#d1a535"
        }, {
            label: "Sølv",
            count: 20,
            color: "#8e8c8c"
        }, {
            label: "Bronce",
            count: 40,
            color: "#b57c46"
        }, {
            label: "Ingen",
            count: 20,
            color: "#E5E5E7"
        }]
        this._badgeDataSealand = [{
            label: "Guld",
            count: 17,
            color: "#d1a535"
        }, {
            label: "Sølv",
            count: 21,
            color: "#8e8c8c"
        }, {
            label: "Bronce",
            count: 37,
            color: "#b57c46"
        }, {
            label: "Ingen",
            count: 25,
            color: "#E5E5E7"
        }]

    }

    prepareData(data) {
        // declaring two array to store the data 
        let labels = [];
        let counts = [];
        let colors = [];
        // looping through the global _salesData array
        for (const badgeObject of data) {
            // adding the values to the different arrays
            labels.push(badgeObject.label);
            counts.push(badgeObject.count);
            colors.push(badgeObject.color);
        }
        // returning the two arrays (months & sales) inside and object
        // we cannot return to values - that's why we have to do it inside an array
        return {
            labels,
            counts,
            colors
        };
    }

    // 3: create and append the chart

}
const _donutService = new DonutService();
export default _donutService;