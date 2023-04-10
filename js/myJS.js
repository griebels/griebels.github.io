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