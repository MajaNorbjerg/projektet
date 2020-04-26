//....................... Maja .......................
export default class AddDataPage {
    constructor() {
        this.template();
    }

    // The template for the addDataPage
    template() {
        document.querySelector('#pagesSection').innerHTML += /*html*/ `
            <article id="addData" class="page">
        
         

                <header>
                    <h2>Tilføj data til firebase</h2>
                </header>
              
                <label for="farmer">Gårdens navn</label>
                <input type="text" id="farmer" name="farmer">

              
                <div id="inputs">


                <form id="theInputForm2015">

                    <label for="year">Year number</label>
                    <input type="number" id="year" value="2015">
                                  
                    <label for="feedConsumption">('Cows', 'Feed consumption', 'kg dry matter pr year-cow')</label>
                    <input type="number" id="feedConsumption"><br><br>
                  
                    <label for="milkProduction">('Herd', 'Milk production', 'kg milk pr year-cow')</label>
                    <input type="number" id="milkProduction"><br><br>

                    <label for="yearCow">('Herd', 'Year-cows', 'nr. of cows.')</label>
                    <input type="number" id="yearCow"><br><br>

                    <label for="diesel">('Energy', 'Diesel', 'Litre')</label>
                    <input type="number" id="diesel"><br><br>

                    <label for="el">('Energy', 'Electricity', kWh')</label>
                    <input type="number" id="el"><br><br>

                    <label for="selfSufficiencyFeed">('Herd', 'Self-sufficiency in feed', '% of dry matter')</label>
                    <input type="number" id="selfSufficiencyFeed"><br><br>

                    <label for="dielselCO2">('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
                    <input type="number" id="dielselCO2"><br><br>

                    <label for="elAndHeatCO2">('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
                    <input type="number" id="elAndHeatCO2"><br><br>

                    <label for="digestion">('Digestion, cows', 'Methane', 'kg CO2 per kg milk')</label>
                    <input type="number" id="digestion"><br><br>

                    <label for="importedFeed">('Imported feed','Carbon dioxide','kg CO2 per kg milk')</label>
                    <input type="number" id="importedFeed"><br><br>

                    <label for="carbonFootprint">('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2')</label>
                    <input type="number" id="carbonFootprint"><br><br>


                 
                </form>






                <form id="theInputForm2016">

                <label for="year">Year number</label>
                <input type="number" id="year2" value="2016">
                              
                <label for="feedConsumption">('Cows', 'Feed consumption', 'kg dry matter pr year-cow')</label>
                <input type="number" id="feedConsumption2"><br><br>
              
                <label for="milkProduction">('Herd', 'Milk production', 'kg milk pr year-cow')</label>
                <input type="number" id="milkProduction2"><br><br>

                <label for="yearCow">('Herd', 'Year-cows', 'nr. of cows.')</label>
                <input type="number" id="yearCow2"><br><br>

                <label for="diesel">('Energy', 'Diesel', 'Litre')</label>
                <input type="number" id="diesel2"><br><br>

                <label for="el">('Energy', 'Electricity', kWh')</label>
                <input type="number" id="el2"><br><br>

                <label for="selfSufficiencyFeed">('Herd', 'Self-sufficiency in feed', '% of dry matter')</label>
                <input type="number" id="selfSufficiencyFeed2"><br><br>

                <label for="dielselCO2">('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
                <input type="number" id="dielselCO22"><br><br>

                <label for="elAndHeatCO2">('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
                <input type="number" id="elAndHeatCO22"><br><br>

                <label for="digestion">('Digestion, cows', 'Methane', 'kg CO2 per kg milk')</label>
                <input type="number" id="digestion2"><br><br>

                <label for="importedFeed">('Imported feed','Carbon dioxide','kg CO2 per kg milk')</label>
                <input type="number" id="importedFeed2"><br><br>

                <label for="carbonFootprint">('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2')</label>
                <input type="number" id="carbonFootprint2"><br><br>


             
            </form>




            <form id="theInputForm2017">

            <label for="year">Year number</label>
            <input type="number" id="year3" value="2017">
                          
            <label for="feedConsumption">('Cows', 'Feed consumption', 'kg dry matter pr year-cow')</label>
            <input type="number" id="feedConsumption3"><br><br>
          
            <label for="milkProduction">('Herd', 'Milk production', 'kg milk pr year-cow')</label>
            <input type="number" id="milkProduction3"><br><br>

            <label for="yearCow">('Herd', 'Year-cows', 'nr. of cows.')</label>
            <input type="number" id="yearCow3"><br><br>

            <label for="diesel">('Energy', 'Diesel', 'Litre')</label>
            <input type="number" id="diesel3"><br><br>

            <label for="el">('Energy', 'Electricity', kWh')</label>
            <input type="number" id="el3"><br><br>

            <label for="selfSufficiencyFeed">('Herd', 'Self-sufficiency in feed', '% of dry matter')</label>
            <input type="number" id="selfSufficiencyFeed3"><br><br>

            <label for="dielselCO2">('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
            <input type="number" id="dielselCO23"><br><br>

            <label for="elAndHeatCO2">('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
            <input type="number" id="elAndHeatCO23"><br><br>

            <label for="digestion">('Digestion, cows', 'Methane', 'kg CO2 per kg milk')</label>
            <input type="number" id="digestion3"><br><br>

            <label for="importedFeed">('Imported feed','Carbon dioxide','kg CO2 per kg milk')</label>
            <input type="number" id="importedFeed3"><br><br>

            <label for="carbonFootprint">('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2')</label>
            <input type="number" id="carbonFootprint3"><br><br>


         
        </form>





        <form id="theInputForm2018">

        <label for="year">Year number</label>
        <input type="number" id="year4" value="2018">
                      
        <label for="feedConsumption">('Cows', 'Feed consumption', 'kg dry matter pr year-cow')</label>
        <input type="number" id="feedConsumption4"><br><br>
      
        <label for="milkProduction">('Herd', 'Milk production', 'kg milk pr year-cow')</label>
        <input type="number" id="milkProduction4"><br><br>

        <label for="yearCow">('Herd', 'Year-cows', 'nr. of cows.')</label>
        <input type="number" id="yearCow4"><br><br>

        <label for="diesel">('Energy', 'Diesel', 'Litre')</label>
        <input type="number" id="diesel4"><br><br>

        <label for="el">('Energy', 'Electricity', kWh')</label>
        <input type="number" id="el4"><br><br>

        <label for="selfSufficiencyFeed">('Herd', 'Self-sufficiency in feed', '% of dry matter')</label>
        <input type="number" id="selfSufficiencyFeed4"><br><br>

        <label for="dielselCO2">('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
        <input type="number" id="dielselCO24"><br><br>

        <label for="elAndHeatCO2">('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
        <input type="number" id="elAndHeatCO24"><br><br>

        <label for="digestion">('Digestion, cows', 'Methane', 'kg CO2 per kg milk')</label>
        <input type="number" id="digestion4"><br><br>

        <label for="importedFeed">('Imported feed','Carbon dioxide','kg CO2 per kg milk')</label>
        <input type="number" id="importedFeed4"><br><br>

        <label for="carbonFootprint">('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2')</label>
        <input type="number" id="carbonFootprint4"><br><br>


     
    </form>
            





    <form id="theInputForm2019">

    <label for="year">Year number</label>
    <input type="number" id="year5" value="2019">
                  
    <label for="feedConsumption">('Cows', 'Feed consumption', 'kg dry matter pr year-cow')</label>
    <input type="number" id="feedConsumption5"><br><br>
  
    <label for="milkProduction">('Herd', 'Milk production', 'kg milk pr year-cow')</label>
    <input type="number" id="milkProduction5"><br><br>

    <label for="yearCow">('Herd', 'Year-cows', 'nr. of cows.')</label>
    <input type="number" id="yearCow5"><br><br>

    <label for="diesel">('Energy', 'Diesel', 'Litre')</label>
    <input type="number" id="diesel5"><br><br>

    <label for="el">('Energy', 'Electricity', kWh')</label>
    <input type="number" id="el5"><br><br>

    <label for="selfSufficiencyFeed">('Herd', 'Self-sufficiency in feed', '% of dry matter')</label>
    <input type="number" id="selfSufficiencyFeed5"><br><br>

    <label for="dielselCO2">('Diesel', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
    <input type="number" id="dielselCO25"><br><br>

    <label for="elAndHeatCO2">('Electricity and heating', 'Carbon dioxide', 'kg CO2 per kg milk')</label>
    <input type="number" id="elAndHeatCO25"><br><br>

    <label for="digestion">('Digestion, cows', 'Methane', 'kg CO2 per kg milk')</label>
    <input type="number" id="digestion5"><br><br>

    <label for="importedFeed">('Imported feed','Carbon dioxide','kg CO2 per kg milk')</label>
    <input type="number" id="importedFeed5"><br><br>

    <label for="carbonFootprint">('Carbon footprint for the whole  farm, 'Carbon dioxide', 'ton CO2')</label>
    <input type="number" id="carbonFootprint5"><br><br>


 
</form>

</div>


                <button type="button" onclick="createFarmer()">Submit all</button>
               
            
            </article>`
    }
}