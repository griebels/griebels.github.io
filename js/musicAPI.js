const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": "UChicagoDigitalStudies/1.0 (sarah.griebel@chicagobooth.edu)"
  });

function removeResults(parentDiv) {
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
    }
  };

// My attempt at the MusicAPI...
  function musicAPI() {
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://musicbrainz.org/ws/2/artist/?query=" + searchTerm + "&fmt=json";
    
    console.log('got return ok')
    connect.open('GET', url);
    connect.onload = function () {
        var musicObject = JSON.parse(this.response);
        console.log(musicObject);
        console.log(musicObject['artists']);
        var artist = (musicObject['artists']);
        for (var i in artist) {
            // var newDiv = document.createElement("div");
            // newDiv.setAttribute('class', 'row h4');
            // document.getElementById("music").appendChild(newDiv);
            // newDiv.innerText = artist[i]['name'];

            // making each result a hyperlink
            
                var pageURL = "https://musicbrainz.org/ws/2/artist/"
                var newAnchor = document.createElement("a")
                newAnchor.href = pageURL+artist[i]['id']+'?inc=releases';               
                newAnchor.className = 'd-block';
                newAnchor.innerText = artist[i]['name'];
                document.getElementById("music").appendChild(newAnchor);
                displayAlbums(artist[i]['id'], artist[i]['name'])
        
        };
   }
    //Send the API request to the server
    connect.send();
    
};

    // Adapted code from Miller Prosser to finish up the challenge...
    // function to get albums
    function displayAlbums(id, artistName) {
        //console.log(`Artist json is: https://musicbrainz.org/ws/2/artist/${id}?inc=aliases&fmt=json`)
        var albumsURL = `https://musicbrainz.org/ws/2/release-group?artist=${id}&limit=150&fmt=json;`;
        console.log('sarah')
        console.log(`Albums by artist: ${albumsURL}`);
        // document.getElementById('artistName').innerText = artistName;
    
        fetch(albumsURL)
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('PROBLEM! Status code is: ' + response.status);
              return;
            }
            response.json().then(data => getAlbums(data) );
          });
        };
    
        function getAlbums(data) {
          // We use bracket notation to access release-group because this is a non-standard entity name due to the dash.
          var releases = data["release-groups"];
          console.log(releases);
          // Prepare the page if the fetch is successful--remove artist list and reveal table
          removeResults(document.getElementById('output'));
          document.getElementById('tableContainer').className = 'd-block';
    
          // Iterate through the releases
          for (i in releases) {
            if (releases[i]["secondary-types"] != "Live" && releases[i]["primary-type"]=="Album") { // omit live albums
              console.log(releases[i])
              var releaseDate = releases[i]["first-release-date"];
              var albumTitle = releases[i]["title"];
              var newRow = document.createElement('tr'); // create a new row
              newRow.id = 'newRow_' + i // each row gets a unique ID
              document.getElementById('tableBody').appendChild(newRow) // append row to table
              var newReleaseData = document.createElement('td'); // new data cell for date
              newReleaseData.innerText = releaseDate; // add release date to cell
              document.getElementById('newRow_' + i).appendChild(newReleaseData); // append td to row
              var newTitleData = document.createElement('td'); // create data cell for album title
              newTitleData.id = 'newTD_' + i; // add ID to data cell so I can append anchor
              var newAnchor = document.createElement('a'); // create new anchor
              newAnchor.href = `https://musicbrainz.org/release-group/${releases[i].id}` // define href for anchor
              newAnchor.target = '_blank'; // make the link open in a new tab.
              newAnchor.innerText = albumTitle; // use album title for text node of anchor element.
              document.getElementById('newRow_' + i).appendChild(newTitleData); // append data cell to row
              document.getElementById('newTD_' + i).appendChild(newAnchor); // append anchor to data cell.
            }
          } //end of for
          sortTable();
        }
    
        // Generic table sort
        function sortTable() {
          var table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("tableOutput");
          switching = true;
          while (switching) {
            //switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[0];
              y = rows[i + 1].getElementsByTagName("TD")[0];
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
            switching = false;
            if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
            //switching = false;
          }
        }
    