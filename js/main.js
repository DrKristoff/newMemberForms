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

//fetchDataFromSpreadsheet();


// Client ID and API key from the Developer Console
  var CLIENT_ID = '19aR3CS3EvanSDhTZxtLL1j6jnoRLpF72cWX9knr0HLo';

  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

  var authorizeButton = document.getElementById('authorize-button');
  var signoutButton = document.getElementById('signout-button');

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      listMajors();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */
  function listMajors() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }).then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        appendPre('Name, Major:');
        for (i = 0; i < range.values.length; i++) {
          var row = range.values[i];
          // Print columns A and E, which correspond to indices 0 and 4.
          appendPre(row[0] + ', ' + row[4]);
        }
      } else {
        appendPre('No data found.');
      }
    }, function(response) {
      appendPre('Error: ' + response.result.error.message);
    });
  }


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