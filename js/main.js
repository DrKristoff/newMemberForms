/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function prefilledForm(inputRow){
    
    
}

function fetchDataFromSpreadsheet(){
  var spreadsheetId = '19aR3CS3EvanSDhTZxtLL1j6jnoRLpF72cWX9knr0HLo';
  var rangeName = 'Member Data!D2:D';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  var stringOutput = "";

  if (!values) {
    Logger.log('No data found.');
  } else {
    Logger.log('Data Found:');
    for (var row = 0; row < values.length; row++) {
      // Print columns D, which correspond to index 3.
      var rowOutput = values[row][0] + ", "
      Logger.log(' - %s', values[row][0]);
      stringOutput = stringOutput + rowOutput;
    }
    log.innerHTML = stringOutput;
  }
    
    
}

fetchDataFromSpreadsheet();

/*
https://docs.google.com/forms/d/e/1FAIpQLSfDCVlAGeBlOMEkJwN5gwxBCM9F6zIjwpfgUuOdFhHkFFRbPw/viewform?usp=pp_url&
entry.2083101344=Olympia+Ward&entry.141385193=Orlando+South+Stake&
entry.1908458409=William+Dean+Back&
entry.1870490008=2016-04-30&entry.1774917194=2016-05-04&
entry.254793866=7208+Skipper+Ct,+Orlando,+FL+32835&
entry.593949751=407-523-8232&
entry.1188714566=asdf&
entry.341360778=Brother+Burt&
entry.1095413860=Brother+Scott,+Sister+Scott&
entry.609774751=asdf&
entry.1737597323=2017-08-08&
entry.1543359595=2017-08-09&
entry.2120619456=2017-08-16&
entry.181448688=2017-08-16&
entry.1233637948=2017-08-09&
entry.141083069=2017-08-11&
entry.219022482=2017-08-16&
entry.1225255283=2017-08-09&
entry.336315637=2017-08-17&
entry.431200567=2017-08-11&
entry.1738526628=2017-08-23&
entry.1226503925=2017-08-02
*/