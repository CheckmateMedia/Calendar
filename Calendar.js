function myFunction() {
    //---------------------------------Used variables
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var day = new Array();
    day[0] = "Sunday,";
    day[1] = "Monday,";
    day[2] = "Tuesday,";
    day[3] = "Wednesday,";
    day[4] = "Thursday,";
    day[5] = "Friday,";
    day[6] = "Saturday,";


    //-------------------------------------Gets the date
    var d = new Date();
    var n = month[d.getMonth()];

    var day = day[d.getDay()];
    var y = d.getFullYear();

    document.getElementById("month").innerHTML = n;
    document.getElementById("month").style.fontWeight = "bold";
    document.getElementById("month").style.fontSize = "1em";
    document.getElementById("year").innerHTML = y;
    document.getElementById("year").style.fontWeight = "bold";
    document.getElementById("year").style.fontSize = "1em";

    console.log(n)
    console.log(y)

    //--------------------------------------------------------------------------Here's the issue
    if (n === "January") {
        document.getElementById("january").style.display = 'block'
    }
    else {
        document.getElementById("january").style.display = 'none'

    }

    if (n === "February") {
        document.getElementById("february").style.display = 'block'
    }
    else {
        document.getElementById("february").style.display = 'none'

    }

    if (n === "March") {
        document.getElementById("march").style.display = 'block'
    }
    else {
        document.getElementById("march").style.display = 'none'

    }

    if (n === "April") {
        document.getElementById("april").style.display = 'block'
    }
    else {
        document.getElementById("april").style.display = 'none'

    }

    if (n === "May") {
        document.getElementById("may").style.display = 'block'
    }
    else {
        document.getElementById("may").style.display = 'none'

    }

    if (n === "June") {
        document.getElementById("june").style.display = 'block'
    }
    else {
        document.getElementById("june").style.display = 'none'

    }

    if (n === "July") {
        document.getElementById("july").style.display = 'block'
    }
    else {
        document.getElementById("july").style.display = 'none'

    }

    if (n === "August") {
        document.getElementById("august").style.display = 'block'
    }
    else {
        document.getElementById("august").style.display = 'none'

    }

    if (n === "September") {
        document.getElementById("september").style.display = 'block'
    }
    else {
        document.getElementById("september").style.display = 'none'

    }

    if (n === "October") {
        document.getElementById("october").style.display = 'block'
    }
    else {
        document.getElementById("october").style.display = 'none'

    }

    if (n === "November") {
        document.getElementById("novemober").style.display = 'block'
    }
    else {
        document.getElementById("november").style.display = 'none'

    }

    if (n === "December") {
        document.getElementById("december").style.display = 'block'
    }
    else {
        document.getElementById("december").style.display = 'none'

    }
    //-----------------------------------------------------------------------------------



}
