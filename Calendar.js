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


    x = new Date();
    var date = x.getDate();
    console.log(date)

    //--------------------------------------------------------------------------
    document.getElementById("month").innerHTML = n;
    document.getElementById("month").style.fontWeight = "bold";
    document.getElementById("month").style.fontSize = "3em";
    document.getElementById("year").innerHTML = y;
    document.getElementById("year").style.fontWeight = "bold";
    document.getElementById("year").style.fontSize = "1.5em";

    console.log(n)
    console.log(y)
    console.log(day)
    //-------------------------------------------------------------------------------------------fontColor
    if (date === 1 && (n === "August")) {
        document.getElementById('aug1').style.color = "gold"
        document.getElementById('aug1').style.fontSize = "2em"
    }
    if (date === 2 && (n === "August")) {
        document.getElementById('aug2').style.color = "gold"
        document.getElementById('aug2').style.fontSize = "2em"
    }
    if (date === 3 && (n === "August")) {
        document.getElementById('aug3').style.color = "gold"
        document.getElementById('aug3').style.fontSize = "2em"
    }
    if (date === 4 && (n === "August")) {
        document.getElementById('aug4').style.color = "gold"
        document.getElementById('aug4').style.fontSize = "2em"
    }
    if (date === 5 && (n === "August")) {
        document.getElementById('aug5').style.color = "gold"
        document.getElementById('aug5').style.fontSize = "2em"
    }
    if (date === 6 && (n === "August")) {
        document.getElementById('aug6').style.color = "gold"
        document.getElementById('aug6').style.fontSize = "2em"
    }
    if (date === 7 && (n === "August")) {
        document.getElementById('aug7').style.color = "gold"
        document.getElementById('aug7').style.fontSize = "2em"
    }
    if (date === 8 && (n === "August")) {
        document.getElementById('aug8').style.color = "gold"
        document.getElementById('aug8').style.fontSize = "2em"
    }
    if (date === 9 && (n === "August")) {
        document.getElementById('aug9').style.color = "gold"
        document.getElementById('aug9').style.fontSize = "2em"
    }
    if (date === 10 && (n === "August")) {
        document.getElementById('aug10').style.color = "gold"
        document.getElementById('aug10').style.fontSize = "2em"
    }
    if (date === 11 && (n === "August")) {
        document.getElementById('aug11').style.color = "gold"
        document.getElementById('aug11').style.fontSize = "2em"
    }
    if (date === 12 && (n === "August")) {
        document.getElementById('aug12').style.color = "gold"
        document.getElementById('aug12').style.fontSize = "2em"
    }
    if (date === 13 && (n === "August")) {
        document.getElementById('aug13').style.color = "gold"
        document.getElementById('aug15\3').style.fontSize = "2em"
    }
    if (date === 14 && (n === "August")) {
        document.getElementById('aug14').style.color = "gold"
        document.getElementById('aug14').style.fontSize = "2em"
    }
    if (date === 15 && (n === "August")) {
        document.getElementById('aug15').style.color = "gold"
        document.getElementById('aug15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 16 && (n === "August")) {
        document.getElementById('aug16').style.color = "gold"
        document.getElementById('aug16').style.fontSize = "2em"
    }
    if (date === 17 && (n === "August")) {
        document.getElementById('aug17').style.color = "gold"
        document.getElementById('aug17').style.fontSize = "2em"
    }
    if (date === 18 && (n === "August")) {
        document.getElementById('aug18').style.color = "gold"
        document.getElementById('aug18').style.fontSize = "2em"
    }
    if (date === 19 && (n === "August")) {
        document.getElementById('aug19').style.color = "gold"
        document.getElementById('aug19').style.fontSize = "2em"
    }
    if (date === 20 && (n === "August")) {
        document.getElementById('aug20').style.color = "gold"
        document.getElementById('aug20').style.fontSize = "2em"
    }
    if (date === 21 && (n === "August")) {
        document.getElementById('aug21').style.color = "gold"
        document.getElementById('aug21').style.fontSize = "2em"
    }
    if (date === 22 && (n === "August")) {
        document.getElementById('aug22').style.color = "gold"
        document.getElementById('aug22').style.fontSize = "2em"
    }
    if (date === 23 && (n === "August")) {
        document.getElementById('aug23').style.color = "gold"
        document.getElementById('aug24').style.fontSize = "2em"
    }
    if (date === 24 && (n === "August")) {
        document.getElementById('aug24').style.color = "gold"
        document.getElementById('aug24').style.fontSize = "2em"
    }
    if (date === 25 && (n === "August")) {
        document.getElementById('aug25').style.color = "gold"
        document.getElementById('aug25').style.fontSize = "2em"
    }
    if (date === 26 && (n === "August")) {
        document.getElementById('aug26').style.color = "gold"
        document.getElementById('aug26').style.fontSize = "2em"
    }
    if (date === 27 && (n === "August")) {
        document.getElementById('aug27').style.color = "gold"
        document.getElementById('aug27').style.fontSize = "2em"
    }
    if (date === 28) {
        document.getElementById('aug28').style.color = "gold"
        document.getElementById('aug28').style.fontSize = "2em"
    }
    if (date === 29 && (n === "August")) {
        document.getElementById('aug29').style.color = "gold"
        document.getElementById('aug29').style.fontSize = "2em"
    }
    if (date === 30 && (n === "August")) {
        document.getElementById('aug30').style.color = "gold"
        document.getElementById('aug30').style.fontSize = "2em"
    }
    if (date === 31 && (n === "August")) {
        document.getElementById('aug31').style.color = "gold"
        document.getElementById('aug31').style.fontSize = "2em"
    }

    //----------------------------------------------------------------------------------Jessie!!!!!!!!!!!!!!!!!!!!!!!

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
