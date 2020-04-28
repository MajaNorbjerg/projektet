import _donutService from "../services/donutService.js";
import chartAdd from "../services/chartAdd.js";

export default class CompareDataPage {
  constructor() {
    this.template();
  }

  // function to run after page is loaded. Adds data to the chart.
  init() {
    chartAdd.mapToChart(document.querySelector('#northMap'), 'northDenmark', '7OIHxbSLJcSF2sXVtxTA', '#7d5d8a', 'NordDanmark');
  }

  template() {
    //Compare data page
    document.querySelector('#pagesSection').innerHTML += /*html*/ `
      <article id="comepare-data" class="page">
            
        <header>
          <nav class="tabbarLand">
            <div id="regioner">Regioner</div>
            <div id="lande">Lande</div>

          </nav>              
        </header>



        <div>
          <h2 id="titelRegioner">Sammenlign data</h2> 

          <!-- Choose timeperiod -->
          <article id="timePeriod"><p>Tidsperiode</p>
                
            <select id="fromYear" value="2015" onchange="generateTable()">
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
            </select>

            <p>Til</p>

            <select id="toYear" value="2019" onchange="generateTable()">
              <option >2015</option>
              <option >2016</option>
              <option >2017</option>
              <option >2018</option>
              <option selected>2019</option>
            </select>

          </article>


          <!-- Data buttons -->
          <article id="buttons">
            <button type="button" value="carbonFootprintMyData" class="btn" onclick="selected(this); farveskift1(); dataInput(this.value)" ><img class="img" src="./img/blomst.svg">I alt</button>
            <button type="button" value="digestionMyData" class="btn" onclick="selected(this); farveskift2(); dataInput(this.value)"><img class="img" src="./img/blomst.svg">Metan</button>
            <button type="button" value="dieselMyData" class="btn selected" onclick="selected(this); farveskift3(); dataInput(this.value)"><img class="img" src="./img/blomst.svg">Diesel</button>
            <button type="button" value="importedMyData" class="btn" onclick="selected(this); farveskift4(); dataInput(this.value)"><img class="img" src="./img/blomst.svg">Foder</button>
            <button type="button" value="energyMyData" class="btn" onclick="selected(this); farveskift5(); dataInput(this.value)"><img class="img" src="./img/blomst.svg">Energi</button>
          </article>
        </div>
                
        <div id="line"></div>

        
        <!-- Content -->
        <div class="flexContainerAll">


        <!-- Chart area -->
        <div class="flexItem">

        <article>

          <!-- Chart -->
          <div id="chartDiv"> 
            <canvas id="chartContainer"></canvas>
          </div>


          <!-- Table -->
          <table id="graphTable">
            <tr id="thFirst">
              <th></th>
              <th id="fromYearTable"></th>
              <th id="toYearTable"></th>
            </tr>
          </table>


          <!-- Invisible checkboxes -->
          <input class="displayNone" type="checkbox" id="northDenmark" >
          <input class="displayNone" type="checkbox" id="southDenmark" >
          <input class="displayNone" type="checkbox" id="zeaDenmark">
          <input class="displayNone" type="checkbox" id="entireDenmark">
          <input class="displayNone" type="checkbox" id="myFarm">

        </article>


        <!-- More info buttons -->
        <div id="graphBtns-wrapper">
          <button class="graphBtns" type="button" id="donutChartButton" onclick="drawCharts()"><img class="flower" src="./img/blomst.svg">Se medaljefordeling</button>

          <button class="graphBtns" type="button"><img class="flower" src="./img/blomst.svg">Eksporter som excel</button>

        </div>
      </div>


      <!-- Map area -->
      <div class="flexItem">
        <article id="entireMap">


        <!-- Scale for the map -->
        <section id="scalebar">
          <article id="scaletitel">
            <h4> Reducering af kg CO2 pr. kg mælk i % </h4>
          </article>
                
          <div id="flex-scale">
            <article class="scaleall">
              <div class="scale" id="greyscale"></div>
              <p> < 1 </p>
            </article>
            <article class="scaleall">
              <div class="scale" id="lightgreenscale"></div>
              <p> 1 - 2 </p>
            </article>
            <article class="scaleall">
              <div class="scale" id="greenscale"></div>
              <p> 3 - 4 </p>
            </article>
            <article class="scaleall">
              <div class="scale" id="darkgreenscale"></div>
              <p> > 4 </p>
            </article>
          </div>
        </section>
                

                <!-- Map - SVG -->
                <svg id="map">            
                <style type="text/css">
                    .st0{fill:#FFFFFF;stroke:#000000;stroke-width:0.5;}
                    .st1{fill:#00441b;}
                    .st2{fill:#2a924a;}
                    .st3{fill:#4bb131;}
                    .st4{fill:#FFFFFF;}
                    .st5{fill:none;stroke:#000000;stroke-width:0.5;}
                
                    </style>
                
                /* ------------st0----------- */
                <g>
                <path class="st0" d="M157.7,223.1c0,0-5.9,0.3-14.5-2.8s-11.6-5.6-20.1-6.5c-8.5-1-14.3,3.1-23.3-1.3c-9-4.4-15-7.7-24.3-8.2
                    s-14.3-0.9-21.3,1.4c-7,2.3-22.2,3.8-27.2,0s-7.5-3.6-7.5-3.6"/>
                <g/>
                /* ------------st1 sjælland----------- */
                    <g onclick="mapToChart(this, 'zeaDenmark', 'ZpCPJdBCL6aurufSlCCY', '#3cc4eb', 'Sjælland')" onmouseover="border(this, 'zeaDenmark')" onmouseout="ikkeBorder(this, 'zeaDenmark')">
                        <path class="st1" d="M276,250.9c2-4,1.7-7.6-1.4-11.5c3.6,4.1,4.1,7.8,2,12.1c-0.7,1.4-0.6,3.3-0.9,5.2c-1.8-1.3-3.6-2.8-5.7-4.4
                            c-1.1,1.5-2,2.8-3,4.2c0-0.5,0-1,0.1-1.5c0.8-1.1,1.5-2.1,2.4-3.3c2.1,1.6,4,3.1,5.7,4.4C275.4,254.2,275.2,252.3,276,250.9z"/>
                        <path class="st1" d="M273.8,238.3c0,0.1,0,0.2,0,0.2l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2C273.8,238.3,273.8,238.3,273.8,238.3z"/>
                        <path class="st1" d="M274,237.6c0.1,0.4,0.2,0.9,0.4,1.3c0,0.1,0,0.2-0.1,0.2c-0.2-0.2-0.3-0.4-0.5-0.5c0-0.1,0-0.2,0-0.2v-0.1
                            C273.8,238,273.9,237.8,274,237.6z"/>
                        <path class="st1" d="M274.2,239.1c0-0.1,0.1-0.2,0.1-0.2v0.1L274.2,239.1z"/>
                        <path class="st1" d="M274.4,239c0,0.1,0,0.2,0,0.3l-0.1-0.1L274.4,239z"/>
                        <path class="st1" d="M309.9,333.7c1.7,4.1,0.6,6-3.8,6c-2.1,0-4.2-0.8-6.3-0.9c-4.1-0.3-7.9,0.1-10.5,4.2
                            c-1.4,2.2-3.6,3.8-5.9,6.2c0.9,1.9,1.8,4-1.6,7.4c-5.9,5.9-12.6,12.6-8.5,22.9c0.8,2,0.1,4.6,0.1,6.8c-5.4,0.8-7.3-1.1-7.5-6.1
                            c-0.3-6.2-0.9-12.3-1.4-18.5c0-0.5-0.7-1-1.4-1.4c1,3.8-2.2,7.6,0.2,11.5c0.2,0.4-2.4,2.8-4,3.9c-0.7,0.5-2.1,0.4-2.9,0
                            c-7.5-2.7-13.5,0.6-19.7,4.1c-1.5,0.9-5.3,0.1-6.4-1.3c-6.3-7.5-14.4-11.6-23.8-13.9c-5.6-1.4-6.1-4.3-2.8-11.2
                            c2.4,0.7,4.8,1.5,7.2,2.2c0.4-0.7,0.8-1.4,1.2-2.1c-1.4-1-2.9-1.8-4.1-2.9c-5-4.9-3.6-8.1,3-11c5.8-2.5,10.8-2.6,16,0.7
                            c0.7-1,1.2-2.7,2.3-3.2c3.2-1.6,6.5-3.1,10-4.1c1.4-0.4,3.8,0.3,4.8,1.3c0.7,0.8,0.4,3.4-0.4,4.5c-0.7,0.9-2.7,0.9-4.1,1.4
                            c-1.6,0.5-3.2,0.9-4.8,1.5c-1.8,0.7-3.6,1.5-6.4,2.6c4.2,3.3,8.6,6.7,11.6,9c2.6-1.9,4.1-3,5.5-4c0.2-0.1,0.8,0,0.8-0.1
                            c2.3-8.7,5.7-2.7,9.1-0.4c0.3-4.3-8-7.6-1.6-11.7c3.5-2.3,9.3,0.1,11.2,3.3c3.4-1.2,10-3.3,10.8-3.6h0.1c1.5,0.2,3,1.1,4.4,0.7
                            c3.8-1,7.6-2.5,10.7-3.6c-0.6-0.8-1.9-2.6-3.5-4.6c-1,0.1-2.4,0.3-3.7,0.5c-0.1-0.3-0.3-0.5-0.4-0.7c-0.2-0.4-0.4-0.8-0.6-1.2
                            c0.9-1,2-2.9,2.7-2.8c3,0.6,5.8,1.9,8.7,2.6c2.3,0.6,4.7,0.9,7.1,1.2C304.8,329.2,308.3,329.6,309.9,333.7z"/>
                        <path class="st1" d="M269.5,225.5c-1.7-1.5-4.9-2.1-7.3-3.2c0.2-0.1,0.4-0.1,0.6-0.2C265.4,223.1,268.3,223.8,269.5,225.5z"/>
                        <path class="st1" d="M262.3,222.3C262.3,222.3,262.2,222.3,262.3,222.3c-0.1,0-0.1,0-0.1-0.1C262.2,222.3,262.2,222.3,262.3,222.3
                            z"/>
                        <path class="st1" d="M270.9,219.6c2.1,6.4,5.9,12.3,3.5,19.3c-0.1-0.4-0.2-0.8-0.4-1.3c1.9-6.4-1.4-12-3.4-17.9
                            C270.7,219.6,270.8,219.6,270.9,219.6z"/>
                        <path class="st1" d="M266.3,255.9c0.2-0.3,0.4-0.6,0.6-0.9c0,0.5-0.1,1-0.1,1.5c1.1-1.5,1.9-2.7,3-4.2c2.1,1.7,4,3.1,5.7,4.4
                            c0.3-1.9,0.2-3.8,0.9-5.2c2.1-4.3,1.6-8-2-12.1c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3v-0.1c2.5-7-1.4-12.9-3.5-19.3
                            c-0.1,0-0.2,0.1-0.3,0.1c-0.1-0.3-0.2-0.5-0.3-0.8c-2.9,0.9-5.7,1.9-8.6,2.8c0,0-0.1,0-0.1-0.1l0,0c-1.3-0.8-2.2-1.6-2.8-2.3
                            c-1.4-1.9-0.6-3.8,2.5-5.9c6.9-4.6,13.9-9.1,20.7-13.8c4.1-2.9,7.9-2.6,11.4,0.5c2.2,1.9,4.3,2.2,7.3,2.4c3.5,0.2,7,2.9,9.9,5.3
                            c0.8,0.7,0.1,4.9-1.3,6.2c-4.6,4.3-3.7,9-2.4,14.1c0.9,3.4,1.2,7,2.1,10.5c1.3,5.2,2.5,10.3,4.3,15.3c1.2,3.3,4.4,6.3,1.3,9.9
                            c-3,3.5-6.7,4.6-11.7,1.3c0.5-2.4,1.1-5.3,1.9-9.2c-6.1,4.3-11.8,8.3-17.3,12.4c-3.3,2.4-4.7,6.3-3.2,9.7c1,2.3,4.4,3.8,7,5.3
                            c1.8,1.1,4,1.3,5.9,2.2c4.7,2.2,7.1,7.8,4.5,13.5c-1.3,2.9-5.8,4.5-9.1,6.2c-1.6,0.8-3.9,0.4-5.8,0.8c-5.2,1.1-6.2,5.1-6.6,9.1
                            c1.6,2.4,3.1,4.6,4.9,7.4c-2.6,0.6-3.8,0.9-5.9,1.4c1.2,1.5,2,2.5,2.9,3.5c0.3,0.6,0.6,1.3,1,1.9c-0.8,1.3-1.4,2.9-2.5,3.9
                            c-1.6,1.3-3.4,2-5.2,3.1l0,0h-0.1c-1.2-0.1-2.6,0.3-3.4-0.2c-7-4.3-15.5-4.3-22.7-7.9c-1.6-0.8-2.5-2.8-3.7-4.2
                            c1.9-0.2,3.8-0.4,5.6-0.4c0.7,0,1.5,0.6,3.6,1.5c-4.9-4.9-0.7-6.3,1.2-8c-2.1-2.9-4-5.4-5.8-7.9c-0.3,0.3-0.7,0.6-1,0.8
                            c0.7,1.9,1.4,3.8,2.1,5.7c-0.3,0.3-0.6,0.7-0.8,1c-4.8-2.4-9.5-4.9-13.6-7c-1.1,2-2,3.6-2.9,5.3c-1.9-1.1-3.9-2.2-5.6-3.1
                            c-2.7-1.1-5.2-2-7.6-3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.5-4.2-1.6-7.9-5.9-10c-0.8-0.4-0.9-2.3-1.4-3.8c-0.7-0.1-2-0.2-3.4-0.3
                            c-2.4-6.9,4.3-5.4,6.9-7.6c-0.8-4.1-1.5-8-2-11c-3.1-0.7-5.3-0.8-7-1.8c-0.6-0.3-0.6-3.4,0.1-4.1c1.1-1,3.1-1,5.3-1.5
                            c0.6-2.8-0.9-5.4-4.3-6.9c-2.5-1.2-5.3-1.8-7.7-3.1c-1.4-0.8-2.3-2.3-3.5-3.5c1.4-0.7,2.8-1.5,4.3-2.2c0.4-0.2,0.9-0.2,2.3-0.5
                            c-2.3-0.7-4.1-0.9-5.4-1.8c-1.4-0.9-2.3-2.5-3.4-3.8c1.7-1,3.5-2.7,5.2-2.7c2.1,0,4.2,1.6,6.2,1.3c3.3-0.2,6.8-1.2,9.9-0.4
                            c4,1,7.1-0.9,9.8-2.6c1-0.6-0.2-4.6-0.5-7.8c1.9-0.5,4.7-0.8,7.1-1.9c1.6-0.8,3.3-2.6,3.6-4.2c0.2-1.1-1.9-3.1-3.4-3.7
                            c-3.1-1.3-6.6-1.8-9.7-3.2c-1.6-0.7-3-2.5-3.8-4.2c-0.5-1-0.2-3.3,0.6-3.9c0.8-0.6,3-0.5,4,0.2c5.1,3.5,10.3,6.3,16.8,4.4
                            c0.8-0.2,2,1.1,3.1,1.3c1.5,0.3,3.1,0.3,4.6,0.2c2.2-0.1,5.1-1.5,6.5-0.6c0.5,0.3,0.9,0.7,1.1,1.1c1,1.7-0.5,3.9-1.5,5.7
                            c-0.6,1-1.4,1.8-2.3,2.8c-1.5-0.6-2.9-1.1-4.2-1.6c1.2,3.1,3.7,6.3,3.1,8.8c-0.5,2.3-4.3,3.8-6.7,5.7c0.2,0.4,0.5,0.8,0.7,1.2
                            c4.3-1.9,8.5-3.9,13.4-6.1c0.3,0.4,1.4,1.7,2.5,3c4.2-2.3,4.4-5.2,2.2-9.2c-1.3-2.4-1.4-5.4-2-8.1l0,0l0,0
                            c0.4,0.2,0.8,0.3,1.2,0.5c-0.2,0.1-0.4,0.1-0.6,0.2c0,0-0.1,0-0.1-0.1l0.1,0.1c0,0,0,0,0.1,0c2.4,1.1,5.6,1.7,7.3,3.2
                            c0,0.1,0.1,0.1,0.1,0.1c2.2,3.7,2.8,8.3,4.1,12.5c0,0.1,0,0.2-0.1,0.2l0.1,0.1c0,2.7,0,5.4,0,8.1
                            C268.4,247.3,266.2,250.1,266.3,255.9z M261.4,243.3c-2.7,6.1-5,2.4-7.1,0.8c-1.6,1.5-3.1,2.8-4.4,4.1c2.6,0.4,5.1,0.8,8.1,1.2
                            c-1.2,2.8-1.8,4.2-2.5,5.6c0.5,0.3,1,0.7,1.5,1c1.8-3.7,3.6-7.4,5.5-11.1C262.1,244.3,261.8,243.8,261.4,243.3z"/>
                        <path class="st1" d="M220.5,308.5c-0.1,0-0.1-0.1-0.2-0.1c0-0.1,0-0.3,0-0.4C220.4,308.2,220.5,308.3,220.5,308.5z"/>
                        <path class="st1" d="M220.3,308.4C220.3,308.4,220.3,308.5,220.3,308.4h-0.1H220.3z"/>
                        <path class="st1" d="M220.8,309c-0.9,2.6-1.4,5.4-2.9,7.6c-0.7,1.1-3.1,1.3-4.7,1.8c-0.3-1.6-0.9-3.2-0.7-4.8
                            c0.1-0.9,1.6-1.5,2.6-2.4c-0.4-0.7-1.4-1.7-1.3-2.5c0.2-1.6,1-3.2,1.5-4.7c1.4,0.9,2.8,1.8,4.1,2.9c0.3,0.3,0.6,0.7,0.9,1.1
                            c0,0.1,0,0.3,0,0.4h-0.1l0.1,0.1v-0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0.2,0.2,0.4,0.4,0.6C220.9,309.1,220.8,309,220.8,309z"/>
                        <path class="st1" d="M261.6,221.6c0,0,0.1,0,0.1,0.1C261.7,221.7,261.6,221.7,261.6,221.6C261.6,221.7,261.6,221.7,261.6,221.6
                            L261.6,221.6z"/>
                            <path class="st1" d="M324.3,257.3c0.2,1.3-1.9,3.8-3.1,4c-1.3,0.2-2.9-1.9-5.2-3.7c2.3-2.7,3.6-4.2,5-5.8
                            C322.1,253.7,324,255.4,324.3,257.3z"/>
                        <path class="st1" d="M311.6,145.7c1.9,0.2,3.1,7.6,2.1,10.5c-0.9,2.6-1.1,5.4-2.2,7.9c-0.6,1.3-2.3,3.1-3.5,3
                            c-3.2-0.1-6.4-0.8-9.6-1.6c-1.6-0.4-2.9-1.5-4.4-2.1c-19-7-14.7-6.9-15-23.5c-0.1-4.8,2.8-9.6,4.8-16c3,2.8,5.3,5.1,7.8,7.2
                            c2.4,2,5,3.7,7.5,5.5c1,0.8,2.6,1.2,3.2,2.2C304.2,142.8,307.1,145.1,311.6,145.7z"/>
                            <path class="st1" d="M219.4,229.4c1.6,2.7,1.5,3.2-1.9,6.4c-4.3-3.4-11.1-3.9-10.9-11.3C211.5,223.4,217.1,225.6,219.4,229.4z"/>
                            </g>
                       
                        
                /* ------------st2 Syddanmark----------- */
                            <g onclick="mapToChart(this, 'southDenmark', 'CwsGcarffzaNsTnUe6ZV', '#f8353c', 'SydDanmark')" onmouseover="border(this, 'southDenmark')" onmouseout="ikkeBorder(this, 'southDenmark')">
                            <path class="st2" d="M200.3,313.2c1.1,1.5,3.2,3.1,3,4.4c-0.7,4.8-1.9,9.5-3.4,14.2c-3.3,10.5-7.1,20.9-10.3,31.5
                            c-1.1,3.6-2.3,6.6-6.1,6.2c-3.6-0.4-3-4.2-4.1-6.8c-3.1-7.4,1.9-10.7,6.5-14.7c-1.2-1.4-2.2-2.7-3.2-3.9c0.9-2.4,1.8-4.7,2.7-7
                            l0,0c5.2-3.1,6.9-8.2,8.4-13.7c0.6-2.3,1.4-4.7,2.6-6.8C197.3,315.1,199,314.3,200.3,313.2z"/>
                            <path class="st2" d="M133.3,234c0.4,0.4,0.9,0.8,1.3,1c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0.2,0.9,0.4,1.3,0.4c1.3,0.3,2.6,0,3.9-0.5
                            c0.4-0.1,0.8-0.3,1.2-0.5c0.6-0.3,1.2-0.5,1.8-0.8c0.4-0.2,0.8-0.3,1.3-0.4c0.9-0.3,1.9-0.4,2.9-0.4c-3.6-2.5-6.4-1.7-9.1-0.6
                            c-0.4,0.2-0.8,0.3-1.2,0.5c-0.8,0.3-1.5,0.6-2.3,0.8C134.5,233.9,133.9,234,133.3,234L133.3,234z M175.6,275.7
                            c-0.7-1.7-1.5-3.5-2.8-6.3c-1.3,3.5-2,5.5-2.8,7.3c-0.7,1.5-1.7,2.9-2.6,4.3c0.3,0,0.5,0.1,0.8,0.1
                            C170.6,279.3,173,277.6,175.6,275.7z M125.8,258.3c0.9-0.4,2.2,0.5,3.4,0.8c-0.4,1.2-0.4,2.7-1.1,3.4c-2.1,2.1-4.6,4-6.7,6.4
                            c3.4-1,6.6-3.1,8.8,1.7c0.3,0.6,2.7,0.8,3.7,0.2c6-3,11.7-6.5,17.8-9.4c1.7-0.8,4.2-0.1,6.9-0.1c1.9-3.3,7.8-0.7,11.9,5.8
                            c1.9-0.8,3.9-1.1,5.1-2.3c1.6-1.4,2.5-3.5,4.5-6.5c2.8,5.4,4.9,9.6,7.2,14c1.1-0.5,2.4-1,3.7-1.5c2.6,3.5,2.4,3.1-1.1,5.1
                            c-2.1,1.1-3.6,3.5-5.7,5.7c4.4,5.4,11.4,10.3,11.4,19.9c-2.1-0.6-3.4-0.9-5.1-1.4c3.3,9.7,3.2,18.7-4.5,26.3
                            c1.6,0.5,3.1,1,4.1,1.3c-1.7,3.4-3.2,6.3-4.8,9.3l0,0c-1.1,0.7-2.1,1.3-3.1,2c-0.5,0.3-1,0.6-1.4,0.9s-0.9,0.5-1.2,0.8
                            c0.7,2.2,1.6,4,1.7,5.8c0,0.7-1.7,2.1-2.6,2.1c-1,0-2.5-1-2.9-1.9c-1.5-3.3-2.7-6.9-4-10.3c-8.3,2.7-8.3,2.7-12.1,2
                            c0.5-1.5,0.9-2.9,1.5-4.7c1.6,0.4,3,0.7,4.5,1c0.6-1.3,1.2-2.6,1.8-4c-4.3-1.7-8.5-3.3-13.8-5.4c-1.1,1.2-2.8,3.4-5,5.2
                            c-0.7,0.6-3,0.5-3.4,0c-0.8-1.4-1-3.3-0.4-5c-1.4-0.9-2.8-1.8-4.2-2.7c1.1-1.2,2.1-2.5,3.4-3.9c0.8-0.9,1.6-1.9,2.6-3
                            c-1.8-0.8-4-1.8-7.4-3.4c1.1,2.8,1.6,4,2.6,6.6c-2.5,0.4-4.7,0.7-7.8,1.1c0.7-3.9,1.1-6.5,1.7-9.9c-5.2-2.9-9.6-7.6-6.6-15.8
                            c-0.2,0.4-0.4,0.8-0.6,1.1c-1,1.7-1.9,3.5-3.2,4.9c-0.4,0.4-3.1-0.6-3.2-1.2c-0.4-2-0.2-4.2,0-6.3c0.1-0.6,0.2-1.1,0.4-1.7
                            c0.2-0.6,0.5-1.1,0.7-1.7c0.4-1.1,1-2.2,1.5-3.5c-2.6-1.6-5.2-3.2-8-5c-1,0.5-2.5,1.2-4.3,2c1.3,2.6-2.9,6.3,1.8,8.3
                            c0,2.6,0,5.3,0,8.1c3.9,2.1,5.5,8.1,2.7,11.9c-0.8,1.1-2.9,1.9-4.2,1.7c-6.8-1.2-6.7-1.4-7.1,6.6l1.5,2c1.2,5.4-3.9,5.5-8,6.4
                            c0.1,0.4,0.2,0.8,0.3,1.2c1.6,0,3.8,0.7,4.7-0.1c3.8-3.2,6.6-3.4,8.8,1.5c0.2,0.4,0.7,0.6,1.2,0.8c0.2,0.1,0.6-0.1,1-0.3
                            c0-0.4,0.2-1.1,0-1.3c-2-2.1-4.5-4.8-0.5-6.6c2.7-1.2,6.6-1.3,9.4-0.2c3.7,1.4,7,4,10.1,6.6c5.2,4.3,8.6,10.2,8.8,16.7
                            c0.1,2.2-4.3,5.5-7.3,6.6c-1.9,0.8-5-1.3-7.4-2.5c-0.4-0.2,0.1-2.4,0.3-3.6c-2.5-0.7-5.2-1.5-8.7-2.5c1.2,1.9,2.2,2.9,2.3,4.1
                            c0.2,1.4,0.1,3.3-0.7,4.1c-0.7,0.7-2.7,0.6-4,0.3c-4.6-1.1-7.8-3.8-7.9-8.5c-2.3,2-4.4,4.3-6.8,5.9c-3.4,2.3-7.2,4.1-10.9,5.9
                            c-3.1,1.5-6.3-0.2-7.4-3.7c-0.9-2.8-2.5-4.2-5.8-4.2c-3.2,0-6.3-1.4-9.5-1.9c-4.7-0.8-9.4-2.1-14.1-1.8c-7,0.5-9.2-0.9-8.6-7.8
                            c0.1-0.8,0.6-1.7,0.3-2.3c-3.9-7.2-1.7-13.6,1.1-20.6c1.4-3.5-1.1-8.5-1.6-12.9c-0.2-1.7,0.2-3.4,0-5.1c-0.4-4.5-0.7-9.1-1.6-13.5
                            c-0.3-1.5-2.5-3-4.1-3.7c-2.9-1.3-6.1-2.1-9.2-3.1c-1.6-1.1-3.3-3.3-4.9,0c-2.5-1-5.1-1.9-7.5-3.1c-2.1-1.1-3.9-3-6.1-4
                            c-3.4-1.6-4.2-3.7-2.8-7.1c1.6-3.9,2.9-8,4.3-12c2.8-7.8-1-15.2-1.5-22.8c-0.2-3.5-0.6-7-0.3-10.4c0.1-1.3,2.1-2.3,3.2-3.5
                            c1.1,1.1,3.1,2.1,3.3,3.4c0.6,3.8-1,8.4,5.1,9.3c0.8,0.1,1.2,2.7,1.8,4.2c5.4-3.1,6-5.5,3.3-10.5c-1.3-2.5-2.4-5.3-2.8-8.1
                            c-0.6-4.8-3-7.8-7.6-8.8l0.1-0.3c0,0,2.5-0.2,7.5,3.6c5.1,3.8,20.3,2.3,27.3,0s11.9-1.9,21.3-1.4s15.3,3.8,24.3,8.2
                            s14.8,0.3,23.3,1.3s11.6,3.5,20.1,6.5c7.8,2.8,13.4,2.8,14.3,2.8c0,0.1,0,0.2,0,0.3c-0.5,4.1-3,8.1-5,11.9
                            c-0.4,0.7-2.6,0.5-3.4,0.6c-1.8,1.2-3.4,2.4-5,3.5c-0.2-0.3-0.5-0.7-0.7-1c-0.7,1.4-1.5,2.9-2.2,4.4c0.9,0.3,1.9,0.7,2.9,1.1
                            c-0.9,2.8-1.6,5.4-2.6,7.8c-0.3,0.7-1.6,1.1-2.4,1.3c-1.9,0.5-3.8,0.7-5.8,1c-3.9,0.7-7.7,1.4-11.8,2.1
                            C121.1,258.3,122.1,259.8,125.8,258.3z"/>
                            <path class="st2" d="M182.1,224c1.1,2.1,2,4.3,2.5,5.4c-0.8,4.8-1.8,8.3-1.9,11.9c-0.1,3.2-1.2,4.5-4.4,4.3
                            c-3.1-0.1-6.5,0.1-6.4-4.1c0-3.9-1.9-8.4,2.8-11.3c0.4-0.3-0.1-3.7-1.1-4.4c-3.1-2.2-4-8.8-1.1-11.3c2-1.7,4.1-0.6,5.2,2
                            C178.7,219.2,180.7,221.5,182.1,224z"/>
                            <path class="st2" d="M173.1,349.4c0.5,0.8-1.3,3-2.1,4.5c-0.2,0.4-0.8,0.5-1.2,0.8c-1.9,1.3-4.1,4.1-5.5,3.7
                            c-2.4-0.6-4.6-3-6.4-5.1c-4.3-4.9-9.8-9.4-8.9-18.3c5.5,3.2,10.2,6,14.9,8.6c1.1,0.6,2.8,0.1,3.8,0.8
                            C169.7,345.8,171.8,347.4,173.1,349.4z"/>
                        <path class="st2" d="M166.5,217c1.5,2.6,3.1,4.1,2.8,5c-0.4,1.4-2.2,2.4-3.4,3.6c-1.1-1.3-2.8-2.4-3-3.8
                            C162.8,220.7,164.6,219.4,166.5,217z"/>
                        <path class="st2" d="M161,241.1c-0.2,2-0.3,5.1-1.4,5.7c-2.2,1-5.1,0.5-7.7,0.7c-0.2-0.7-0.5-1.5-0.7-2.2c2-1.7,3.9-3.7,6.2-5.1
                            C158.2,239.7,161,240.9,161,241.1z"/>
                        <path class="st2" d="M151.6,255.5c-0.2,1.6-0.5,3.3-0.7,5c-0.5,0.2-1,0.4-1.5,0.6c-0.9-1.3-2.5-2.7-2.4-3.9c0-1,2.1-1.9,3.3-2.8
                            C150.7,254.6,151.1,255.1,151.6,255.5z"/>
                            <path class="st2" d="M124.7,286.2c-0.6,1.3-1.1,2.4-1.5,3.5c-0.2,0.5-0.5,1.1-0.7,1.7h-1.9c-0.6-1.1-1.2-2.3-2.5-4.6
                            c-1.6,2.1-2.6,3.5-3.7,5c-0.1,0-0.1-0.1-0.2-0.1l0,0v0.1c-4.7-2-0.5-5.7-1.8-8.3c1.8-0.9,3.2-1.6,4.3-2
                            C119.5,282.9,123.1c-1.3,1.2-2.6,2.3-4.2,3.7l-1.5-2C106.2,318.6,106.7,317.3,107.6,315.1z
           2.1,284.5,124.7,286.2z"/>
                            <path class="st2" d="M107.6,315.1c1.4,1.2,2.6,2.1,3.8,                 "/>
                            <path class="st2" d="M40.7,294.1c0.8-0.3,3.4,1.5,3.3,2.1c-0.4,2-1.5,3.9-2.3,5.8c-0.6,0.1-1.1,0.1-1.7,0.2
                            c-0.9-1.5-2.4-3.1-2.4-4.6C37.6,296.3,39.4,294.6,40.7,294.1z"/>
                        <path class="st2" d="M39.3,305.3c5.1,1.4,5.8,3.1,4.1,7.8c-1,2.8-1.3,6-2.6,8.6c-0.7,1.4-3.1,1.9-4.7,2.9
                            c-0.8-1.8-1.7-3.6-2.5-5.5c-0.2-0.6,0-1.3,0-2c-0.1,0-0.2,0-0.3-0.1c0.4-2.2,0.9-4.5,1.3-6.7C35.2,307.7,35.1,304.1,39.3,305.3z"
                            />
                        <path class="st2" d="M31.9,277.5c6.9,3,3.5,9.7,5.8,14.4c-6.9,1.3-10.2-1.9-11-10.3c-0.2-2-0.1-4-0.1-6c1.6-3.3,3.3-1.1,4.9,0
                            C31.6,276.4,31.6,277.4,31.9,277.5z"/>
                            </g>

                 /* ------------st3 - norddanmark----------- */
                        <g id="northMap" onclick="mapToChart(this, 'northDenmark', '7OIHxbSLJcSF2sXVtxTA', '#7d5d8a', 'NordDanmark')" onmouseover="border(this, 'northDenmark')" onmouseout="ikkeBorder(this, 'northDenmark')" >
                        <path class="st3" d="M154.3,99.7c-6.2-1.4-7.2-12-15.7-9.4c5,3.8,9.9,7.4,14.8,11C153.7,100.7,154,100.2,154.3,99.7z M83.3,139
                            c2.8,0.6,5.8,1.1,8.1,2.5c0.9,0.5,0.5,3.5,0.4,5.3c0,0.9-0.6,1.8-0.9,2.5c5.1,5.5,7,5.7,8.5,0.9c-1.5,0-3,0-4.8,0
                            c0.1-2.2,0.2-4.2,0.3-6.2c0.1-2.7,0.2-5.5,0.3-8.2c-2.4,0.3-4.9,0.6-7.3,0.9c-0.4,0.1-0.8,0.2-1.2,0.4c-0.5-0.2-1-0.4-1.4-0.7
                            c0.2-0.7,0.5-1.4,0.7-2.1c0.7-2.1,1.5-4.2,2.3-6.6c-0.9-0.5-2.2-1.3-3.5-2.2c0-0.1,0-0.1,0-0.2l0,0c0,0-0.1,0-0.1-0.1
                            c0.7-2.7,1.4-5.5,1.9-8.2c0.3-1.3,0.7-2.9,0.1-3.9c-0.8-1.4-1-2.6-0.8-3.7c0.2-1.5,1.2-2.8,2.5-4.1c2.3-2.1,4.6-4.1,6.5-5.7
                            c-2.8-1.4-5.4-2.8-8-4c-0.9-0.4-2-1.1-2.7-0.9c-4.9,1.7-9.7,3.7-13.3,5.1c0.2,4.5,0,7.7,0.7,10.8c0.4,1.9,0,2.7-0.8,3.1
                            c-1.6,0.8-4.8-0.6-4.6,1.8c0.8,3,1.5,6.1,2.3,9.3c1.5-1.2,3.1-2.5,4.4-3.5c-0.8-1.7-1.5-3.3-2.2-4.9c0.3-0.2,0.7-0.3,1.1-0.5
                            c2.4-1.1,4.8-2.1,7.2-3.2c0,0-0.4-0.7-0.3-1.3c0.5-1.6,1-3.2,1.8-4.6c0.1-0.2,2.7,0.5,2.7,0.8c0,0.5,0,1-0.1,1.5
                            c-0.1,1.2-0.4,2.5-0.7,3.7c-0.2,0.9-0.9,1.6-1.2,2.5c-0.8,2.1-1.5,4.2-2.1,5.9c0.7,0.5,1.6,1.2,2.5,1.9c0.9,0.7,1.9,1.4,2.9,2.2
                            c0,0.1,0,0.1,0,0.2c0,0,0.1,0,0.1,0.1c-0.1,0.4-0.1,0.9-0.2,1.3c0,0.2,0,0.3,0,0.5c-0.1,2.2,0,4.3-0.5,6.3c-0.4,1.6-1.3,3.1-3,4.6
                            c-5,4.5-4.4,6.8,0.1,10.9c0.3-3.2,0.3-5.6,0.7-8C81.9,140.4,82.9,138.9,83.3,139z M50.1,145.9c1.4-0.1,2.7-0.3,5.3-0.6
                            c-2.1-2.1-3.6-3.5-4-3.8c-1.6,1.2-2.9,2.3-4,3.2c-0.9,0.7-1.7,1.2-2.6,1.6c-0.1,0-0.2,0.1-0.4,0.1c-1.1,0-2.8-1.1-3.6-2.1
                            c-4.4-5.6-8.5-11.5-12.7-17.2c-1.1,3.4-2.4,7.6-3.7,11.7c4.6,6.6,11.4,7.7,17.8,9.4c2.1,0.6,4.2,1.2,6.2,2.2
                            c0.1,0,0.3-0.2,0.7-0.6C49.4,148.7,49.7,147.3,50.1,145.9z M50.9,118.4c-0.1-0.3-0.3-1.2-0.7-2.6c-8.6,6.8-8.6,6.8-7.9,8.2
                            C45.1,122.2,47.9,120.3,50.9,118.4z M53.2,137c0.4,0.8,1.2,2.3,2.6,4.8c2.8-6.4,7.5-8.2,14.2-6.9c-2.7-2.3-4.4-3.9-5.6-4.9
                            C60.8,132.3,57.1,134.6,53.2,137z M52,158.6c1.3,0.4,3.1,0.3,4.2-0.3c1.6-1,0.5-9.5-1.2-11.2c-0.7,2.8-1.5,5.5-2.2,8
                            c-2.2,0.1-3.9,0.2-6.9,0.4C48.8,157,50.3,158.1,52,158.6z M184.3,201.4c-1.9-0.7-3.4-3.4-4.5-5.5c-0.6-1.2,0.2-3.1,0.4-4.6
                            c-0.7-0.2-1.4-0.3-2.1-0.4c-0.5,2.1-1.2,4.1-1.4,6.2c-0.1,1.2,1,2.6,0.7,3.8c-0.5,2.3-1.5,4.5-2.4,6.7c-1.1-0.4-2.5-0.6-3.4-1.3
                            c-2.3-1.9-3.7-4.2-1.7-7.2l0,0c0,0,0,0,0-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0,0-0.1,0.1-0.1,0.3l0,0l0,0c-3-0.8-5.9-1.4-8.7-2.4
                            c-0.4-0.2-0.5-2.9-0.1-3.4l0.1-0.1c2.3-1.1,4.8-1.7,7.7-2.6c0.1-0.6,0.3-2.4,0.4-4.3c-1.1-0.7-2.3-1.5-3.2-2.1
                            c-2.4,2.7-4.5,5.5-6.8,8c-0.8,0.9-1.5,1.7-2.4,2.5c-2.6,2.6-3.4,5.4-1.7,8.4c3.5,6.3,2.9,13.1,2.1,19.7c-0.9,0-6.6,0-14.3-2.8
                            c-8.5-3.1-11.6-5.6-20.1-6.5s-14.3,3.1-23.3-1.3c-9-4.4-15-7.7-24.3-8.2c-9.4-0.5-14.3-0.9-21.3,1.4s-22.1,3.8-27.3,0
                            c-5.1-3.8-7.5-3.6-7.5-3.6l-0.1,0.3c0,0,0,0-0.1,0c-1.8,2.9,0.6,8.4-5.7,9.5c-0.4,0.1-0.9,0.1-1.4,0.2c0.2-5.3-0.4-10.5,0.9-15.2
                            c4-14.5,2.2-29.3,2.9-44c0.3-6,0.8-12.4,3.1-17.7c2.6-5.8,4.5-11.8,6.6-17.7c1.3-3.5,2.6-7.1,4.3-10.4c1.2-2.4,3.1-4.4,4.8-6.6
                            C38.7,95,43.1,90,47.1,84.5c1.8-2.5,3.3-4.4,6.6-2.9c6.8,3.1,12.7,1.7,18.7-2.8c2-1.5,6.2-0.5,9.3,0c17.2,3,23.8-1.4,30.7-11.8
                            c4.1-6.2,7-13.2,10.5-19.8c0.9-1.7,2.3-3.1,3.4-4.8c2.2-3.4,4.5-6.7,6.4-10.3c1.3-2.4,2.6-4,5.7-3.6C149.2,30,158,26.4,165,17.9
                            c2.2-2.7,5.6-4.5,8.5-6.7c3.1-2.3,6.1-2.1,9.3,1.4c-1.5,1.5-3.1,2.9-4.6,4.5c-2.5,2.8-5.3,5.3-7.2,8.4c-2.7,4.5-2.1,9.2,1.2,13.3
                            c3.1,3.8,4.4,7.6,3.5,13c-1,5.9,0.6,12.2,0.6,18.3c0,2.2-1.1,5.4-2.7,6.4c-5.8,3.8-6.7,9.8-8.1,15.6c-2.3,9-1,8-8.5,8.5
                            c0.4,2.1,1.5,4.4,1.1,6.3c-1.9,9.6-1.2,14.7,4.7,26.3c-6.3,0-12.3-1-17.8,0.3c-5.7,1.3-10.8,4.9-16.2,7.5c0.1,0.4,0.3,0.7,0.5,1.1
                            c5.2-2.2,10.6-4.2,15.7-6.6c4.8-2.3,9.5-1,13.9,0.5c3.3,1.1,3.4,6.3,0.1,8.1c-4.8,2.6-6.2,6.9-6.4,11.4c-0.2,5.3-3,5.9-7.1,6
                            c-1.7,0-3.3,0.2-5,0.3c0.1,0.5,0.1,1,0.1,1.5c5.7-0.4,11.4-0.7,17.1-1.1c-6.1-4.6-5.3-9.3,3.2-17.4c1,1,2.4,1.8,3,3
                            c3.3,6.5,6.9,8.3,13.9,6.6c2.9-0.7,5.7-1.6,8.5-2.2c1.3-0.3,3.3-0.6,4.1,0.1c4.6,3.8,8.9,7.9,13.3,12c-0.7,0.1-1.3,0.2-2,0.3
                            c-0.8,3.4-1.2,7.1-2.6,10.3c-1.9,4.2-3.9,8.7-7,11.9c-3.1,3.1-4.1,6.6-4.7,10.4C187.2,199.7,187.1,202.5,184.3,201.4z M118,97.5
                            c2.1-4.1,4.7-5.3,10.4-3.2c-4.1-4.3-8.4-4.4-12-2.4c-2.5,1.4-5.7,1.7-8.6,2.3c-2.5,0.5-5.1,0.8-7.6,1.2c0.1,0.5,0.2,1,0.2,1.5
                            c3.2,0,6.9-1,9.2,0.3c1.7,1,1.5,5.2,2.1,7.4C113.4,102.8,116.5,100.5,118,97.5z M53.7,108.2c9.1-0.8,9.1-0.8,9.5-4.2
                            c-3.4,0.3-6.5,0.6-9.5,0.9C53.7,106.1,53.7,107.1,53.7,108.2z"/>
                        <path class="st3" d="M247.5,128.8c-0.4,1.2-0.8,2.4-1.3,3.6c-0.2,0.4-0.7,0.7-1,1.1c-1.6,2-1.8,6.5-5.5,4.8
                            c-2.8-1.3-4.6-4.7-7.2-7.4c4.6-1.3,7.9-2.4,11.1-3C244.8,127.6,246.2,128.5,247.5,128.8z"/>
                        <path class="st3" d="M217.3,62.8c0.1,1.1-1.2,2.9-2.4,3.4c-3.7,1.7-6.6,6.1-6.5,10.1c0,1-0.7,2.7-1.3,2.8c-1.3,0.2-2.9-0.1-4-0.8
                            c-0.6-0.4-0.3-2-0.5-3.5c-1.8-1-4-2-6-3.4c-2.4-1.7-2-5.9,1.5-7.3c5.1-2.1,10.8-3.1,16.3-4.2C215.2,59.8,217.2,61.7,217.3,62.8z"
                            />
                            </g>
               
                <rect x="266.5" y="117.2" class="st5" width="59.7" height="59.7"/>
                </svg>


        <!-- My farm flower -->
        <img id="arlaflower-map" src="./img/blomst.svg">


        <!-- Buttons below map to ad data -->
        <div id="mapBtns">
        <div id="mapselectionyellow"> 
          <div id="mapselection"></div>
          <p>Valgt til grafen</p>
        </div>
              
        <button class="mapButtons" type="button" onclick="mapToChart(this, 'entireDenmark', 'SkosNYUR2FJDB5KYpqDQ', '#efc531', 'DanmarksData')">Danmarks data</button>
        <button class="mapButtons" onclick="showFlower(); mapToChart(this, 'myFarm', '9wuor7U0o7isnnv6MBzl', '#4bb131', 'DinData')" type="button">Din data</button>
           
      </div>
             
    </article>
  </div>
               
                
  <!-- ----- medaljefordeling----- -->
  <article id="donutChart" style="display:none;">
    <div id="divChartNord">
      <h3> i alt - Region Nordjylland</h3>
      <div class="doughnutDiv">
        <canvas id="chartNord"></canvas>
      </div>
        <table class=" donutTable">
          <tr>
            <th class="donutTh tableHeadNord">Medalje</th>
            <th class="donutTh tableHeadNord">Antal</th>
          </tr>
          <tr>
            <td class="donutTd">Guld</td>
            <td class="donutTd">13</td>
          </tr>
          <tr>
            <td class="donutTd">Sølv</td>
            <td class="donutTd">14</td>
          </tr>
          <tr>
            <td class="donutTd">Bronce</td>
            <td class="donutTd">20</td>
          </tr>
          <tr>
            <td class="donutTd">Ingen</td>
            <td class="donutTd">53</td>
          </tr>
          <tr>
            <td class="donutTd">Endnu ingen data</td>
            <td class="donutTd">0</td>
          <tr>
            <td class="donutTd">Total</td>
            <td class="donutTd">100</td>
          </tr>
          </tr>
        </table> 
      </div>

      <div id="divChartSyd">
        <h3> i alt - Region Sønderjylland</h3>
        <div class="doughnutDiv">
          <canvas id="chartSyd"></canvas>
        </div>
        <table class=" donutTable">
          <tr>
            <th class="donutTh tableHeadSyd">Medalje</th>
            <th class="donutTh tableHeadSyd">Antal</th>
          </tr>
          <tr>
            <td class="donutTd">Guld</td>
            <td class="donutTd">25</td>
          </tr>
          <tr>
            <td class="donutTd">Sølv</td>
            <td class="donutTd">17</td>
          </tr>
          <tr>
            <td class="donutTd">Bronce</td>
            <td class="donutTd">38</td>
          </tr>
          <tr>
            <td class="donutTd">Ingen</td>
            <td class="donutTd">20</td>
          </tr>
          <tr>
            <td class="donutTd">Endnu ingen data</td>
            <td class="donutTd">0</td>
          <tr>
            <td class="donutTd">Total</td>
            <td class="donutTd">100</td>
          </tr>
          </tr>
        </table>
      </div>

             
      <div id="divChartSealand">
        <h3> i alt - Region Sjælland og øer</h3>
          <div class="doughnutDiv">
            <canvas id="chartSealand"></canvas>
          </div>
          <table class=" donutTable">
            <tr>
              <th class="donutTh tableHeadSealand">Medalje</th>
              <th class="donutTh tableHeadSealand">Antal</th>
            </tr>
            <tr>
              <td class="donutTd">Guld</td>
              <td class="donutTd">17</td>
            </tr>
            <tr>
              <td class="donutTd">Sølv</td>
              <td class="donutTd">21</td>
            </tr>
            <tr>
              <td class="donutTd">Bronce</td>
              <td class="donutTd">37</td>
            </tr>
            <tr>
              <td class="donutTd">Ingen</td>
              <td class="donutTd">25</td>
            </tr>
            <tr>
              <td class="donutTd">Endnu ingen data</td>
              <td class="donutTd">0</td>
            <tr>
              <td class="donutTd">Total</td>
              <td class="donutTd">100</td>
            </tr>
            </tr>
          </table>
        </div>
      </article>

    </article>`
  };

  /*..............................johanne................................. */

  /* ------------map border----------- */
  border(element, checkboxId) {
    console.log(checkboxId, element);
    let checkBox = document.querySelector(`#${checkboxId}`); // makes a variable "checkBox" by ID "chechboxID"
    if (checkBox.checked) { // If checkbox is checked nothing, because no border needed when region is selected.

    } else { // Else element style with border.

      element.style.stroke = "#FFCC32";
      element.style.strokeWidth = 4
    }
  };

  ikkeBorder(element, checkboxId) {
    // If checkbox is checked then no element hover with border (if you have selected the region to the graph). else nothing
    let checkBox = document.querySelector(`#${checkboxId}`);
    if (!checkBox.checked) {
      element.style.stroke = "none";
    } else {}
  }

  // the above is made to not overwrite the green border on clickevent (look at chartAdd.js, mapToChart() )

  /*..............................johanne................................. */

  /* ------------colorchange map---------- */
  farveskift1() {


    let sjaelland = document.getElementsByClassName("st1") // makes variable sjaelland by class st1
    for (let i = 0; i < sjaelland.length; i++) { // loops through all 'sjaellands' svg's
      sjaelland[i].style.fill = "#00441B"; // style by fill with a color
    }

    let syddanmark = document.getElementsByClassName("st2")
    for (let i = 0; i < syddanmark.length; i++) {
      syddanmark[i].style.fill = "#2A924A";
    }

    let norddanmark = document.getElementsByClassName("st3")
    for (let i = 0; i < norddanmark.length; i++) {
      norddanmark[i].style.fill = "#4BB131";
    }

  };

  farveskift2() {

    let sjaelland = document.getElementsByClassName("st1")
    for (let i = 0; i < sjaelland.length; i++) {
      sjaelland[i].style.fill = "#2A924A";
    }

    let syddanmark = document.getElementsByClassName("st2")
    for (let i = 0; i < syddanmark.length; i++) {
      syddanmark[i].style.fill = "#2A924A";
    }

    let norddanmark = document.getElementsByClassName("st3")
    for (let i = 0; i < norddanmark.length; i++) {
      norddanmark[i].style.fill = "#00441B";
    }

  }

  farveskift3() {

    let sjaelland = document.getElementsByClassName("st1")
    for (let i = 0; i < sjaelland.length; i++) {
      sjaelland[i].style.fill = "#4BB131";
    }

    let syddanmark = document.getElementsByClassName("st2")
    for (let i = 0; i < syddanmark.length; i++) {
      syddanmark[i].style.fill = "#2A924A";
    }

    let norddanmark = document.getElementsByClassName("st3")
    for (let i = 0; i < norddanmark.length; i++) {
      norddanmark[i].style.fill = "#00441B";
    }

  }

  farveskift4() {

    let sjaelland = document.getElementsByClassName("st1")
    for (let i = 0; i < sjaelland.length; i++) {
      sjaelland[i].style.fill = "#4BB131";
    }

    let syddanmark = document.getElementsByClassName("st2")
    for (let i = 0; i < syddanmark.length; i++) {
      syddanmark[i].style.fill = "#DADBDA";
    }

    let norddanmark = document.getElementsByClassName("st3")
    for (let i = 0; i < norddanmark.length; i++) {
      norddanmark[i].style.fill = "#00441B";
    }

  }

  farveskift5() {

    let sjaelland = document.getElementsByClassName("st1")
    for (let i = 0; i < sjaelland.length; i++) {
      sjaelland[i].style.fill = "#00441B";
    }

    let syddanmark = document.getElementsByClassName("st2")
    for (let i = 0; i < syddanmark.length; i++) {
      syddanmark[i].style.fill = "#2A924A";
    }

    let norddanmark = document.getElementsByClassName("st3")
    for (let i = 0; i < norddanmark.length; i++) {
      norddanmark[i].style.fill = "#DADBDA";
    }

  }

  /*..............................johanne................................. */

  /* ------------flower on map - own data---------- */
  showFlower() {
    let element = document.getElementById("arlaflower-map"); // makes a variable: "element" by ID arlaflower-map. 
    element.classList.toggle("show"); // I use property classlist to toggle CSS class "show" on variable: "element".
  }



  /* ------------Indication of wich button is selected----------- */
  /* ------------ Helle ----------- */
  // Finding the element with class "selected"
  selected(element) {
    let selected = document.querySelector(".btn.selected");
    // Removes the class 
    selected.classList.remove("selected");
    // Adds the class "selected" to the button wich has been selected
    element.classList.add("selected");
  }

}