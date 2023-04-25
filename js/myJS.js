function show_date_now() { 
    let date1 = new Date();
    alert("The date is " + date1)
    }

function time() {
        var currentdate = new Date(); 
        var timenow = + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
          document.getElementById("datebtn").innerHTML = "The time is now "+timenow;
        }

function disappear_word() {
    var theElement = document.getElementById("named");
    theElement.innerHTML = ""
}

function disappear_word2() {
    var theElement = document.getElementById("named2");
    theElement.style.display = 'none';
}

function simple_thing(){
    alert ("just a little pop-up!");
}

function bike_ride(){
    var inputValue = prompt("Enter the current numerical temperature outside in degrees Fahrenheit.")
    if (inputValue < 50 && inputValue > 20) {
        alert("Too cold for a bike, but perfect for a brisk walk.")
    }   else if (inputValue <= 20) {
        alert("I'll appreciate the outdoors through double-paned windows.")
    }   else if (inputValue > 105) {
        alert("Wow, a bit too toasty for me. I should probably turn on a fan...")
    }   else if (isNaN(inputValue)) {
        alert("Please enter the temperature as a number.")
    }   else {
        var rain_Value = prompt("Is it raining? Write 'yes' or 'no' in lowercase letters.");
        if (rain_Value == "yes") {
        alert("I'll wait until the rain stops.")
    }   else if (rain_Value == "no") { 
        alert("Time for a bike ride!")
    }   else {
        alert("Sorry, that's not a response I understand. Can you try again?")
    }
}}

function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [40.48309092055624, -3.363039459237911];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyaWViZWwiLCJhIjoiY2xnanUzODRjMThwaTNlcG03MDV6NjcyNCJ9.dSp7KbBpL0zp5M2W1k2awQ';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>Universidad<br>de<br>Alcala</b>").openPopup();
  
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }

  function ParamArray(numbers) {
    var numbers = [1, 4, 5, 9]
    for (let i = 0; i < numbers.length; i++)
    console.log(numbers[i]);
    document.getElementById('numbers').innerHTML = "Here's the array: " + numbers;
  };
  
  


  function parseArray() {
    var schools = {
        "gradSchool":
    [
        {"university": "Berkeley",
        "program": "Information Science",
        "city": "Berkeley",
        "state": "California"
    },
        {"university": "Cornell",
        "program": "Information Science",
        "city": "Ithaca",
        "state": "New York"
    },
        {"university": "UIUC",
        "program": "Information Sciences",
        "city": "Urbana-Champaign",
        "state": "Illinois"}
    ]
    };
    var grads = schools.gradSchool;
    for (i in grads) {console.log(grads[i].program)}
  }


  //Function that asks for an array input and then sorts that input
  function sortArray() {
    var trans1 = document.getElementById('trans1').value;
    var trans2 = document.getElementById('trans2').value;
    var trans3 = document.getElementById('trans3').value;
    
    var output0 = [trans1, trans2, trans3];
    document.getElementById('output0').innerHTML = "Here's what you entered: " + output0.join(", ");

    var output2 = output0.slice().sort()
    document.getElementById('output2').innerHTML = "This probably isn't very useful, but here are your words sorted alphabetically :) " + output2.join(", ");
  }

  