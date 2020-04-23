class DonutService {
    constructor() {
        this._badgeDataNordjylland = [{
            label: "Guld",
            count: 13,
            color: "#ff200d"
        }, {
            label: "Sølv",
            count: 14,
            color: "#FF4F40"
        }, {
            label: "Bronce",
            count: 20,
            color: "#FF7061"
        }, {
            label: "Ingen",
            count: 53,
            color: "#FF998F"
        }]
        this._badgeDataSoenderjylland = [{
            label: "Guld",
            count: 20,
            color: "#ff200d"
        }, {
            label: "Sølv",
            count: 20,
            color: "#FF4F40"
        }, {
            label: "Bronce",
            count: 40,
            color: "#FF7061"
        }, {
            label: "Ingen",
            count: 20,
            color: "#FF998F"
        }]
        this._badgeDataSealand = [{
            label: "Guld",
            count: 17,
            color: "#ff200d"
        }, {
            label: "Sølv",
            count: 21,
            color: "#FF4F40"
        }, {
            label: "Bronce",
            count: 37,
            color: "#FF7061"
        }, {
            label: "Ingen",
            count: 25,
            color: "#FF998F"
        }]
        console.log(_badgeDataNordjylland);
        console.log(_badgeDataSoenderjylland);
        console.log(_badgeDataSealand);
    }





}
const _donutService = new DonutService();
export default _donutService;