  /*.............................. Helle ................................. */
  class DonutService {
      constructor() {
          //  Fictive array over the badge count for every region
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
              count: 25,
              color: "#d1a535"
          }, {
              label: "Sølv",
              count: 17,
              color: "#8e8c8c"
          }, {
              label: "Bronce",
              count: 38,
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

          //  collection of the data, witch is used for the doughnut chart
          this.preparedDataNord = this.prepareData(this._badgeDataNordjylland);
          this.preparedDataSyd = this.prepareData(this._badgeDataSoenderjylland);
          this.preparedDataSealand = this.prepareData(this._badgeDataSealand);
      }

      prepareData(data) {
          // declaring arrays to store the data 
          let labels = [];
          let counts = [];
          let colors = [];
          // looping through the global arrays and adding the values to the different arrays
          for (const badgeObject of data) {
              labels.push(badgeObject.label);
              counts.push(badgeObject.count);
              colors.push(badgeObject.color);
          }

          return {
              labels,
              counts,
              colors
          };
      }

      //  appending doughnut charts inside the element with id="charts"
      appendChart(data, chart) {
          // generate chart
          let chartContainerNord = document.getElementById(chart);
          let chart1 = new Chart(chartContainerNord, {
              type: 'doughnut',
              //  This information is what is drawn in the chart
              data: {
                  labels: data.labels,
                  datasets: [{
                      data: data.counts,
                      backgroundColor: data.colors
                  }]
              },
              //  the legend (bars in the top saying gold in front of the gold colored line) is not shown
              options: {
                  legend: {
                      display: false
                  }
              }
          });



      }

      // function called from compareDataPage, checks the information on the button, and switches it, and checks if the charts is alredy drawn, or draws it
      drawCharts() {
          let donutChart = document.getElementById("donutChart");
          let buttonText = document.getElementById("donutChartButton")

          if (buttonText.innerHTML === '<img class="flower" src="/img/blomst.svg">Se medaljefordeling') {

              buttonText.innerHTML = '<img class="flower" src="/img/blomst.svg">Skjul medaljefordeling';
          } else {
              buttonText.innerHTML = '<img class="flower" src="/img/blomst.svg">Se medaljefordeling';
          }
          if (donutChart.style.display == "none" || donutChart.style.display === "") {

              donutChart.style.display = "flex";
              console.log(donutChart.style.display)
          } else {
              donutChart.style.display = "none";
          }
          let hasCharts = document.querySelector('#donutChart .chartjs-size-monitor');

          if (!hasCharts) {
              this.appendChart(this.preparedDataNord, "chartNord");
              this.appendChart(this.preparedDataSyd, "chartSyd");
              this.appendChart(this.preparedDataSealand, "chartSealand");
          }
      }

  }
  const _donutService = new DonutService();
  export default _donutService;