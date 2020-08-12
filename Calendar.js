function myFunction() {
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



    var d = new Date();
    var n = month[d.getMonth()];
    var day = day[d.getDay()];
    var y = d.getFullYear();
    document.getElementById("day").innerHTML = day;
    document.getElementById("day").style.fontWeight = "bold";
    document.getElementById("day").style.fontSize = "1em";
    document.getElementById("month").innerHTML = n;
    document.getElementById("month").style.fontWeight = "bold";
    document.getElementById("month").style.fontSize = "1em";
    document.getElementById("year").innerHTML = y;
    document.getElementById("year").style.fontWeight = "bold";
    document.getElementById("year").style.fontSize = "1em";


    document.getElementById("week1").innerHTML = day + " " + n + " " + y;
    document.getElementById("week1").style.fontWeight = "bold";
    document.getElementById("week1").style.fontSize = "1em";
}
