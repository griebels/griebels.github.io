function wikiAPI() {
//configure HTML page
    //configure input#searchTerm on the HTML page for input.
    //configure div#wiki on the HTML page for output.
    //configure a button to invoke the function().
    //Load the JS file using <script>.


//Define variables
    //Create an XHR object (called connect here.)
    //Define base URL for API and insert searchTerm variable
var searchTerm = document.getElementById('searchTerm').value;
var connect = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;


//Open the API call
    //use XHR.open (connect.open) to GET a file from the API.
connect.open('GET', url);

//Define the actions that will happen when the response is returned; Parse and display the data
    //Load and parse the response as a JSON data object.
    //Console.log the data object to see what you got as a response.
    //Locate the branch of the object that is of interest.
    //Loop through the branch and output the Wiki pages to the HTML page.
connect.onload = function () {
    var wikiObject = JSON.parse(this.response);
    console.log(wikiObject);
    console.log(wikiObject.query.pages);
    var pages = wikiObject.query.pages;
    for (var i in pages) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'row h5');
        document.getElementById("wiki").appendChild(newDiv);
        newDiv.innerText = pages[i].title;
    };
}

//Send the API request to the server
connect.send();

//super challenge
}