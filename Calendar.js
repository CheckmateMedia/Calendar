function myFunction() {
    //---------------------------------Used variables (month is used)
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
    console.log(day)

    //-------------------------------------------------------------------------- Gets month/year
    document.getElementById("month").innerHTML = n;
    document.getElementById("month").style.fontWeight = "bold";
    document.getElementById("month").style.fontSize = "3em";
    document.getElementById("day").innerHTML = day;
    document.getElementById("day").style.fontWeight = "bold";
    document.getElementById("day").style.fontSize = "1.5em";
    document.getElementById("year").innerHTML = y;
    document.getElementById("year").style.fontWeight = "bold";
    document.getElementById("year").style.fontSize = "1.5em";

    console.log(n)
    console.log(y)
    console.log(day)

    //-------------------------------------------------------------------------------------------January

    if (date === 1 && (n === "January")) {
        document.getElementById('jan1').style.color = "gold"
        document.getElementById('jan1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ebe8e8";
    }
    if (date === 2 && (n === "January")) {
        document.getElementById('jan2').style.color = "gold"
        document.getElementById('jan2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 3 && (n === "January")) {
        document.getElementById('jan3').style.color = "gold"
        document.getElementById('jan3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 4 && (n === "January")) {
        document.getElementById('jan4').style.color = "gold"
        document.getElementById('jan4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 5 && (n === "January")) {
        document.getElementById('jan5').style.color = "gold"
        document.getElementById('jan5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 6 && (n === "January")) {
        document.getElementById('jan6').style.color = "gold"
        document.getElementById('jan6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 7 && (n === "January")) {
        document.getElementById('jan7').style.color = "gold"
        document.getElementById('jan7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 8 && (n === "January")) {
        document.getElementById('jan8').style.color = "gold"
        document.getElementById('jan8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 9 && (n === "January")) {
        document.getElementById('jan9').style.color = "gold"
        document.getElementById('jan9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 10 && (n === "January")) {
        document.getElementById('jan10').style.color = "gold"
        document.getElementById('jan10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 11 && (n === "January")) {
        document.getElementById('jan11').style.color = "gold"
        document.getElementById('jan11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 12 && (n === "January")) {
        document.getElementById('jan12').style.color = "gold"
        document.getElementById('jan12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 13 && (n === "January")) {
        document.getElementById('jan13').style.color = "gold"
        document.getElementById('jan15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 14 && (n === "January")) {
        document.getElementById('jan14').style.color = "gold"
        document.getElementById('jan14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 15 && (n === "January")) {
        document.getElementById('jan15').style.color = "gold"
        document.getElementById('jan15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 16 && (n === "January")) {
        document.getElementById('jan16').style.color = "gold"
        document.getElementById('jan16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 17 && (n === "January")) {
        document.getElementById('jan17').style.color = "gold"
        document.getElementById('jan17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 18 && (n === "January")) {
        document.getElementById('jan18').style.color = "gold"
        document.getElementById('jan18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 19 && (n === "January")) {
        document.getElementById('jan19').style.color = "gold"
        document.getElementById('jan19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 20 && (n === "January")) {
        document.getElementById('jan20').style.color = "gold"
        document.getElementById('jan20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 21 && (n === "January")) {
        document.getElementById('jan21').style.color = "gold"
        document.getElementById('jan21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 22 && (n === "January")) {
        document.getElementById('jan22').style.color = "gold"
        document.getElementById('jan22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 23 && (n === "January")) {
        document.getElementById('jan23').style.color = "gold"
        document.getElementById('jan24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 24 && (n === "January")) {
        document.getElementById('jan24').style.color = "gold"
        document.getElementById('jan24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 25 && (n === "January")) {
        document.getElementById('jan25').style.color = "gold"
        document.getElementById('jan25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 26 && (n === "January")) {
        document.getElementById('jan26').style.color = "gold"
        document.getElementById('jan26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 27 && (n === "January")) {
        document.getElementById('jan27').style.color = "gold"
        document.getElementById('jan27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 28 && (n === "January")) {
        document.getElementById('jan28').style.color = "gold"
        document.getElementById('jan28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 29 && (n === "January")) {
        document.getElementById('jan29').style.color = "gold"
        document.getElementById('jan29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 30 && (n === "January")) {
        document.getElementById('jan30').style.color = "gold"
        document.getElementById('jan30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 31 && (n === "January")) {
        document.getElementById('jan31').style.color = "gold"
        document.getElementById('jan31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }

    //-------------------------------------------------------------------------------------------February


    if (date === 1 && (n === "February")) {
        document.getElementById('feb1').style.color = "gold"
        document.getElementById('feb1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 2 && (n === "February")) {
        document.getElementById('feb2').style.color = "gold"
        document.getElementById('feb2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 3 && (n === "February")) {
        document.getElementById('feb3').style.color = "gold"
        document.getElementById('feb3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 4 && (n === "February")) {
        document.getElementById('feb4').style.color = "gold"
        document.getElementById('feb4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 5 && (n === "February")) {
        document.getElementById('feb5').style.color = "gold"
        document.getElementById('feb5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 6 && (n === "February")) {
        document.getElementById('feb6').style.color = "gold"
        document.getElementById('feb6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 7 && (n === "February")) {
        document.getElementById('feb7').style.color = "gold"
        document.getElementById('feb7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 8 && (n === "February")) {
        document.getElementById('feb8').style.color = "gold"
        document.getElementById('feb8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 9 && (n === "February")) {
        document.getElementById('feb9').style.color = "gold"
        document.getElementById('feb9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 10 && (n === "February")) {
        document.getElementById('feb10').style.color = "gold"
        document.getElementById('feb10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 11 && (n === "February")) {
        document.getElementById('feb11').style.color = "gold"
        document.getElementById('feb11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 12 && (n === "February")) {
        document.getElementById('feb12').style.color = "gold"
        document.getElementById('feb12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 13 && (n === "February")) {
        document.getElementById('feb13').style.color = "gold"
        document.getElementById('feb15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 14 && (n === "February")) {
        document.getElementById('feb14').style.color = "gold"
        document.getElementById('feb14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 15 && (n === "February")) {
        document.getElementById('feb15').style.color = "gold"
        document.getElementById('feb15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 16 && (n === "February")) {
        document.getElementById('feb16').style.color = "gold"
        document.getElementById('feb16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 17 && (n === "February")) {
        document.getElementById('feb17').style.color = "gold"
        document.getElementById('feb17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 18 && (n === "February")) {
        document.getElementById('feb18').style.color = "gold"
        document.getElementById('feb18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 19 && (n === "February")) {
        document.getElementById('feb19').style.color = "gold"
        document.getElementById('feb19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 20 && (n === "February")) {
        document.getElementById('feb20').style.color = "gold"
        document.getElementById('feb20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 21 && (n === "February")) {
        document.getElementById('feb21').style.color = "gold"
        document.getElementById('feb21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 22 && (n === "February")) {
        document.getElementById('feb22').style.color = "gold"
        document.getElementById('feb22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 23 && (n === "February")) {
        document.getElementById('feb23').style.color = "gold"
        document.getElementById('feb24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 24 && (n === "February")) {
        document.getElementById('feb24').style.color = "gold"
        document.getElementById('feb24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 25 && (n === "February")) {
        document.getElementById('feb25').style.color = "gold"
        document.getElementById('feb25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 26 && (n === "February")) {
        document.getElementById('feb26').style.color = "gold"
        document.getElementById('feb26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 27 && (n === "February")) {
        document.getElementById('feb27').style.color = "gold"
        document.getElementById('feb27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }
    if (date === 28 && (n === "February")) {
        document.getElementById('feb28').style.color = "gold"
        document.getElementById('feb28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#f2b1b1";
    }




    //-------------------------------------------------------------------------------------------March

    if (date === 1 && (n === "March")) {
        document.getElementById('mar1').style.color = "gold"
        document.getElementById('mar1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 2 && (n === "March")) {
        document.getElementById('mar2').style.color = "gold"
        document.getElementById('mar2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 3 && (n === "March")) {
        document.getElementById('mar3').style.color = "gold"
        document.getElementById('mar3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 4 && (n === "March")) {
        document.getElementById('mar4').style.color = "gold"
        document.getElementById('mar4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 5 && (n === "March")) {
        document.getElementById('mar5').style.color = "gold"
        document.getElementById('mar5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 6 && (n === "March")) {
        document.getElementById('mar6').style.color = "gold"
        document.getElementById('mar6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 7 && (n === "March")) {
        document.getElementById('mar7').style.color = "gold"
        document.getElementById('mar7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 8 && (n === "March")) {
        document.getElementById('mar8').style.color = "gold"
        document.getElementById('mar8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 9 && (n === "March")) {
        document.getElementById('mar9').style.color = "gold"
        document.getElementById('mar9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 10 && (n === "March")) {
        document.getElementById('mar10').style.color = "gold"
        document.getElementById('mar10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 11 && (n === "March")) {
        document.getElementById('mar11').style.color = "gold"
        document.getElementById('mar11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 12 && (n === "March")) {
        document.getElementById('mar12').style.color = "gold"
        document.getElementById('mar12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 13 && (n === "March")) {
        document.getElementById('mar13').style.color = "gold"
        document.getElementById('mar15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 14 && (n === "March")) {
        document.getElementById('mar14').style.color = "gold"
        document.getElementById('mar14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 15 && (n === "March")) {
        document.getElementById('mar15').style.color = "gold"
        document.getElementById('mar15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 16 && (n === "March")) {
        document.getElementById('mar16').style.color = "gold"
        document.getElementById('mar16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 17 && (n === "March")) {
        document.getElementById('mar17').style.color = "gold"
        document.getElementById('mar17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 18 && (n === "March")) {
        document.getElementById('mar18').style.color = "gold"
        document.getElementById('mar18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 19 && (n === "March")) {
        document.getElementById('mar19').style.color = "gold"
        document.getElementById('mar19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 20 && (n === "March")) {
        document.getElementById('mar20').style.color = "gold"
        document.getElementById('mar20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 21 && (n === "March")) {
        document.getElementById('mar21').style.color = "gold"
        document.getElementById('mar21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 22 && (n === "March")) {
        document.getElementById('mar22').style.color = "gold"
        document.getElementById('mar22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 23 && (n === "March")) {
        document.getElementById('mar23').style.color = "gold"
        document.getElementById('mar24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 24 && (n === "March")) {
        document.getElementById('mar24').style.color = "gold"
        document.getElementById('mar24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 25 && (n === "March")) {
        document.getElementById('mar25').style.color = "gold"
        document.getElementById('mar25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 26 && (n === "March")) {
        document.getElementById('mar26').style.color = "gold"
        document.getElementById('mar26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 27 && (n === "March")) {
        document.getElementById('mar27').style.color = "gold"
        document.getElementById('mar27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 28 && (n === "March")) {
        document.getElementById('mar28').style.color = "gold"
        document.getElementById('mar28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 29 && (n === "March")) {
        document.getElementById('mar29').style.color = "gold"
        document.getElementById('mar29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 30 && (n === "March")) {
        document.getElementById('mar30').style.color = "gold"
        document.getElementById('mar30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }
    if (date === 31 && (n === "March")) {
        document.getElementById('mar31').style.color = "gold"
        document.getElementById('mar31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#b1f2d7";
    }


    //-------------------------------------------------------------------------------------------April

    if (date === 1 && (n === "April")) {
        document.getElementById('apr1').style.color = "gold"
        document.getElementById('apr1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 2 && (n === "April")) {
        document.getElementById('apr2').style.color = "gold"
        document.getElementById('apr2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 3 && (n === "April")) {
        document.getElementById('apr3').style.color = "gold"
        document.getElementById('apr3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 4 && (n === "April")) {
        document.getElementById('apr4').style.color = "gold"
        document.getElementById('apr4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 5 && (n === "April")) {
        document.getElementById('apr5').style.color = "gold"
        document.getElementById('apr5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 6 && (n === "April")) {
        document.getElementById('apr6').style.color = "gold"
        document.getElementById('apr6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 7 && (n === "April")) {
        document.getElementById('apr7').style.color = "gold"
        document.getElementById('apr7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 8 && (n === "April")) {
        document.getElementById('apr8').style.color = "gold"
        document.getElementById('apr8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 9 && (n === "April")) {
        document.getElementById('apr9').style.color = "gold"
        document.getElementById('apr9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 10 && (n === "April")) {
        document.getElementById('apr10').style.color = "gold"
        document.getElementById('apr10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 11 && (n === "April")) {
        document.getElementById('apr11').style.color = "gold"
        document.getElementById('apr11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 12 && (n === "April")) {
        document.getElementById('apr12').style.color = "gold"
        document.getElementById('apr12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 13 && (n === "April")) {
        document.getElementById('apr13').style.color = "gold"
        document.getElementById('apr15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 14 && (n === "April")) {
        document.getElementById('apr14').style.color = "gold"
        document.getElementById('apr14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 15 && (n === "April")) {
        document.getElementById('apr15').style.color = "gold"
        document.getElementById('apr15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 16 && (n === "April")) {
        document.getElementById('apr16').style.color = "gold"
        document.getElementById('apr16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 17 && (n === "April")) {
        document.getElementById('apr17').style.color = "gold"
        document.getElementById('apr17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 18 && (n === "April")) {
        document.getElementById('apr18').style.color = "gold"
        document.getElementById('apr18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 19 && (n === "April")) {
        document.getElementById('apr19').style.color = "gold"
        document.getElementById('apr19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 20 && (n === "April")) {
        document.getElementById('apr20').style.color = "gold"
        document.getElementById('apr20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 21 && (n === "April")) {
        document.getElementById('apr21').style.color = "gold"
        document.getElementById('apr21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 22 && (n === "April")) {
        document.getElementById('apr22').style.color = "gold"
        document.getElementById('apr22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 23 && (n === "April")) {
        document.getElementById('apr23').style.color = "gold"
        document.getElementById('apr24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 24 && (n === "April")) {
        document.getElementById('apr24').style.color = "gold"
        document.getElementById('apr24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 25 && (n === "April")) {
        document.getElementById('apr25').style.color = "gold"
        document.getElementById('apr25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 26 && (n === "April")) {
        document.getElementById('apr26').style.color = "gold"
        document.getElementById('apr26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 27 && (n === "April")) {
        document.getElementById('apr27').style.color = "gold"
        document.getElementById('apr27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 28 && (n === "April")) {
        document.getElementById('apr28').style.color = "gold"
        document.getElementById('apr28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 29 && (n === "April")) {
        document.getElementById('apr29').style.color = "gold"
        document.getElementById('apr29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }
    if (date === 30 && (n === "April")) {
        document.getElementById('apr30').style.color = "gold"
        document.getElementById('apr30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#eaf2b1";
    }

    //-------------------------------------------------------------------------------------------May

    if (date === 1 && (n === "May")) {
        document.getElementById('may1').style.color = "gold"
        document.getElementById('may1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 2 && (n === "May")) {
        document.getElementById('may2').style.color = "gold"
        document.getElementById('may2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 3 && (n === "May")) {
        document.getElementById('may3').style.color = "gold"
        document.getElementById('may3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 4 && (n === "May")) {
        document.getElementById('may4').style.color = "gold"
        document.getElementById('may4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 5 && (n === "May")) {
        document.getElementById('may5').style.color = "gold"
        document.getElementById('may5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 6 && (n === "May")) {
        document.getElementById('may6').style.color = "gold"
        document.getElementById('may6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 7 && (n === "May")) {
        document.getElementById('may7').style.color = "gold"
        document.getElementById('may7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 8 && (n === "May")) {
        document.getElementById('may8').style.color = "gold"
        document.getElementById('may8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 9 && (n === "May")) {
        document.getElementById('may9').style.color = "gold"
        document.getElementById('may9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 10 && (n === "May")) {
        document.getElementById('may10').style.color = "gold"
        document.getElementById('may10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 11 && (n === "May")) {
        document.getElementById('may11').style.color = "gold"
        document.getElementById('may11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 12 && (n === "May")) {
        document.getElementById('may12').style.color = "gold"
        document.getElementById('may12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 13 && (n === "May")) {
        document.getElementById('may13').style.color = "gold"
        document.getElementById('may15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 14 && (n === "May")) {
        document.getElementById('may14').style.color = "gold"
        document.getElementById('may14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 15 && (n === "May")) {
        document.getElementById('may15').style.color = "gold"
        document.getElementById('may15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 16 && (n === "May")) {
        document.getElementById('may16').style.color = "gold"
        document.getElementById('may16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 17 && (n === "May")) {
        document.getElementById('may17').style.color = "gold"
        document.getElementById('may17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 18 && (n === "May")) {
        document.getElementById('may18').style.color = "gold"
        document.getElementById('may18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 19 && (n === "May")) {
        document.getElementById('may19').style.color = "gold"
        document.getElementById('may19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 20 && (n === "May")) {
        document.getElementById('may20').style.color = "gold"
        document.getElementById('may20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 21 && (n === "May")) {
        document.getElementById('may21').style.color = "gold"
        document.getElementById('may21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 22 && (n === "May")) {
        document.getElementById('may22').style.color = "gold"
        document.getElementById('may22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 23 && (n === "May")) {
        document.getElementById('may23').style.color = "gold"
        document.getElementById('may24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 24 && (n === "May")) {
        document.getElementById('may24').style.color = "gold"
        document.getElementById('may24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 25 && (n === "May")) {
        document.getElementById('may25').style.color = "gold"
        document.getElementById('may25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 26 && (n === "May")) {
        document.getElementById('may26').style.color = "gold"
        document.getElementById('may26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 27 && (n === "May")) {
        document.getElementById('may27').style.color = "gold"
        document.getElementById('may27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 28 && (n === "May")) {
        document.getElementById('may28').style.color = "gold"
        document.getElementById('may28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 29 && (n === "May")) {
        document.getElementById('may29').style.color = "gold"
        document.getElementById('may29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 30 && (n === "May")) {
        document.getElementById('may30').style.color = "gold"
        document.getElementById('may30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }
    if (date === 31 && (n === "May")) {
        document.getElementById('may31').style.color = "gold"
        document.getElementById('may31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd6483";
    }


    //-------------------------------------------------------------------------------------------June

    if (date === 1 && (n === "June")) {
        document.getElementById('jun1').style.color = "gold"
        document.getElementById('jun1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 2 && (n === "June")) {
        document.getElementById('jun2').style.color = "gold"
        document.getElementById('jun2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 3 && (n === "June")) {
        document.getElementById('jun3').style.color = "gold"
        document.getElementById('jun3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 4 && (n === "June")) {
        document.getElementById('jun4').style.color = "gold"
        document.getElementById('jun4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 5 && (n === "June")) {
        document.getElementById('jun5').style.color = "gold"
        document.getElementById('jun5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 6 && (n === "June")) {
        document.getElementById('jun6').style.color = "gold"
        document.getElementById('jun6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 7 && (n === "June")) {
        document.getElementById('jun7').style.color = "gold"
        document.getElementById('jun7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 8 && (n === "June")) {
        document.getElementById('jun8').style.color = "gold"
        document.getElementById('jun8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 9 && (n === "June")) {
        document.getElementById('jun9').style.color = "gold"
        document.getElementById('jun9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 10 && (n === "June")) {
        document.getElementById('jun10').style.color = "gold"
        document.getElementById('jun10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 11 && (n === "June")) {
        document.getElementById('jun11').style.color = "gold"
        document.getElementById('jun11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 12 && (n === "June")) {
        document.getElementById('jun12').style.color = "gold"
        document.getElementById('jun12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 13 && (n === "June")) {
        document.getElementById('jun13').style.color = "gold"
        document.getElementById('jun15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 14 && (n === "June")) {
        document.getElementById('jun14').style.color = "gold"
        document.getElementById('jun14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 15 && (n === "June")) {
        document.getElementById('jun15').style.color = "gold"
        document.getElementById('jun15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 16 && (n === "June")) {
        document.getElementById('jun16').style.color = "gold"
        document.getElementById('jun16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 17 && (n === "June")) {
        document.getElementById('jun17').style.color = "gold"
        document.getElementById('jun17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 18 && (n === "June")) {
        document.getElementById('jun18').style.color = "gold"
        document.getElementById('jun18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 19 && (n === "June")) {
        document.getElementById('jun19').style.color = "gold"
        document.getElementById('jun19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 20 && (n === "June")) {
        document.getElementById('jun20').style.color = "gold"
        document.getElementById('jun20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 21 && (n === "June")) {
        document.getElementById('jun21').style.color = "gold"
        document.getElementById('jun21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 22 && (n === "June")) {
        document.getElementById('jun22').style.color = "gold"
        document.getElementById('jun22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 23 && (n === "June")) {
        document.getElementById('jun23').style.color = "gold"
        document.getElementById('jun24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 24 && (n === "June")) {
        document.getElementById('jun24').style.color = "gold"
        document.getElementById('jun24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 25 && (n === "June")) {
        document.getElementById('jun25').style.color = "gold"
        document.getElementById('jun25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 26 && (n === "June")) {
        document.getElementById('jun26').style.color = "gold"
        document.getElementById('jun26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 27 && (n === "June")) {
        document.getElementById('jun27').style.color = "gold"
        document.getElementById('jun27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 28 && (n === "June")) {
        document.getElementById('jun28').style.color = "gold"
        document.getElementById('jun28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 29 && (n === "June")) {
        document.getElementById('jun29').style.color = "gold"
        document.getElementById('jun29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }
    if (date === 30 && (n === "June")) {
        document.getElementById('jun30').style.color = "gold"
        document.getElementById('jun30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#bd8264";
    }


    //-------------------------------------------------------------------------------------------July

    if (date === 1 && (n === "July")) {
        document.getElementById('jul1').style.color = "gold"
        document.getElementById('jul1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 2 && (n === "July")) {
        document.getElementById('jul2').style.color = "gold"
        document.getElementById('jul2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 3 && (n === "July")) {
        document.getElementById('jul3').style.color = "gold"
        document.getElementById('jul3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 4 && (n === "July")) {
        document.getElementById('jul4').style.color = "gold"
        document.getElementById('jul4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 5 && (n === "July")) {
        document.getElementById('jul5').style.color = "gold"
        document.getElementById('jul5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 6 && (n === "July")) {
        document.getElementById('jul6').style.color = "gold"
        document.getElementById('jul6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 7 && (n === "July")) {
        document.getElementById('jul7').style.color = "gold"
        document.getElementById('jul7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 8 && (n === "July")) {
        document.getElementById('jul8').style.color = "gold"
        document.getElementById('jul8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 9 && (n === "July")) {
        document.getElementById('jul9').style.color = "gold"
        document.getElementById('jul9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 10 && (n === "July")) {
        document.getElementById('jul10').style.color = "gold"
        document.getElementById('jul10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 11 && (n === "July")) {
        document.getElementById('jul11').style.color = "gold"
        document.getElementById('jul11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 12 && (n === "July")) {
        document.getElementById('jul12').style.color = "gold"
        document.getElementById('jul12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 13 && (n === "July")) {
        document.getElementById('jul13').style.color = "gold"
        document.getElementById('jul15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 14 && (n === "July")) {
        document.getElementById('jul14').style.color = "gold"
        document.getElementById('jul14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 15 && (n === "July")) {
        document.getElementById('jul15').style.color = "gold"
        document.getElementById('jul15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 16 && (n === "July")) {
        document.getElementById('jul16').style.color = "gold"
        document.getElementById('jul16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 17 && (n === "July")) {
        document.getElementById('jul17').style.color = "gold"
        document.getElementById('jul17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 18 && (n === "July")) {
        document.getElementById('jul18').style.color = "gold"
        document.getElementById('jul18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 19 && (n === "July")) {
        document.getElementById('jul19').style.color = "gold"
        document.getElementById('jul19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 20 && (n === "July")) {
        document.getElementById('jul20').style.color = "gold"
        document.getElementById('jul20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 21 && (n === "July")) {
        document.getElementById('jul21').style.color = "gold"
        document.getElementById('jul21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 22 && (n === "July")) {
        document.getElementById('jul22').style.color = "gold"
        document.getElementById('jul22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 23 && (n === "July")) {
        document.getElementById('jul23').style.color = "gold"
        document.getElementById('jul24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 24 && (n === "July")) {
        document.getElementById('jul24').style.color = "gold"
        document.getElementById('jul24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 25 && (n === "July")) {
        document.getElementById('jul25').style.color = "gold"
        document.getElementById('jul25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 26 && (n === "July")) {
        document.getElementById('jul26').style.color = "gold"
        document.getElementById('jul26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 27 && (n === "July")) {
        document.getElementById('jul27').style.color = "gold"
        document.getElementById('jul27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 28 && (n === "July")) {
        document.getElementById('jul28').style.color = "gold"
        document.getElementById('jul28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 29 && (n === "July")) {
        document.getElementById('jul29').style.color = "gold"
        document.getElementById('jul29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 30 && (n === "July")) {
        document.getElementById('jul30').style.color = "gold"
        document.getElementById('jul30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }
    if (date === 31 && (n === "July")) {
        document.getElementById('jul31').style.color = "gold"
        document.getElementById('jul31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c73a3a";
    }


    //-------------------------------------------------------------------------------------------August
    if (date === 1 && (n === "August")) {
        document.getElementById('aug1').style.color = "gold"
        document.getElementById('aug1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 2 && (n === "August")) {
        document.getElementById('aug2').style.color = "gold"
        document.getElementById('aug2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 3 && (n === "August")) {
        document.getElementById('aug3').style.color = "gold"
        document.getElementById('aug3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 4 && (n === "August")) {
        document.getElementById('aug4').style.color = "gold"
        document.getElementById('aug4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 5 && (n === "August")) {
        document.getElementById('aug5').style.color = "gold"
        document.getElementById('aug5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 6 && (n === "August")) {
        document.getElementById('aug6').style.color = "gold"
        document.getElementById('aug6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 7 && (n === "August")) {
        document.getElementById('aug7').style.color = "gold"
        document.getElementById('aug7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 8 && (n === "August")) {
        document.getElementById('aug8').style.color = "gold"
        document.getElementById('aug8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 9 && (n === "August")) {
        document.getElementById('aug9').style.color = "gold"
        document.getElementById('aug9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 10 && (n === "August")) {
        document.getElementById('aug10').style.color = "gold"
        document.getElementById('aug10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 11 && (n === "August")) {
        document.getElementById('aug11').style.color = "gold"
        document.getElementById('aug11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 12 && (n === "August")) {
        document.getElementById('aug12').style.color = "gold"
        document.getElementById('aug12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 13 && (n === "August")) {
        document.getElementById('aug13').style.color = "gold"
        document.getElementById('aug15\3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 14 && (n === "August")) {
        document.getElementById('aug14').style.color = "gold"
        document.getElementById('aug14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 15 && (n === "August")) {
        document.getElementById('aug15').style.color = "gold"
        document.getElementById('aug15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 16 && (n === "August")) {
        document.getElementById('aug16').style.color = "gold"
        document.getElementById('aug16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 17 && (n === "August")) {
        document.getElementById('aug17').style.color = "gold"
        document.getElementById('aug17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 18 && (n === "August")) {
        document.getElementById('aug18').style.color = "gold"
        document.getElementById('aug18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 19 && (n === "August")) {
        document.getElementById('aug19').style.color = "gold"
        document.getElementById('aug19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 20 && (n === "August")) {
        document.getElementById('aug20').style.color = "gold"
        document.getElementById('aug20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 21 && (n === "August")) {
        document.getElementById('aug21').style.color = "gold"
        document.getElementById('aug21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 22 && (n === "August")) {
        document.getElementById('aug22').style.color = "gold"
        document.getElementById('aug22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 23 && (n === "August")) {
        document.getElementById('aug23').style.color = "gold"
        document.getElementById('aug24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 24 && (n === "August")) {
        document.getElementById('aug24').style.color = "gold"
        document.getElementById('aug24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 25 && (n === "August")) {
        document.getElementById('aug25').style.color = "gold"
        document.getElementById('aug25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 26 && (n === "August")) {
        document.getElementById('aug26').style.color = "gold"
        document.getElementById('aug26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 27 && (n === "August")) {
        document.getElementById('aug27').style.color = "gold"
        document.getElementById('aug27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 28) {
        document.getElementById('aug28').style.color = "gold"
        document.getElementById('aug28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 29 && (n === "August")) {
        document.getElementById('aug29').style.color = "gold"
        document.getElementById('aug29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 30 && (n === "August")) {
        document.getElementById('aug30').style.color = "gold"
        document.getElementById('aug30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }
    if (date === 31 && (n === "August")) {
        document.getElementById('aug31').style.color = "gold"
        document.getElementById('aug31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#ff6a57";
    }

    //-------------------------------------------------------------------------------------------September

    if (date === 1 && (n === "September")) {
        document.getElementById('sep1').style.color = "gold"
        document.getElementById('sep1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 2 && (n === "September")) {
        document.getElementById('sep2').style.color = "gold"
        document.getElementById('sep2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 3 && (n === "September")) {
        document.getElementById('sep3').style.color = "gold"
        document.getElementById('sep3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 4 && (n === "September")) {
        document.getElementById('sep4').style.color = "gold"
        document.getElementById('sep4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 5 && (n === "September")) {
        document.getElementById('sep5').style.color = "gold"
        document.getElementById('sep5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 6 && (n === "September")) {
        document.getElementById('sep6').style.color = "gold"
        document.getElementById('sep6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 7 && (n === "September")) {
        document.getElementById('sep7').style.color = "gold"
        document.getElementById('sep7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 8 && (n === "September")) {
        document.getElementById('sep8').style.color = "gold"
        document.getElementById('sep8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 9 && (n === "September")) {
        document.getElementById('sep9').style.color = "gold"
        document.getElementById('sep9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 10 && (n === "September")) {
        document.getElementById('sep10').style.color = "gold"
        document.getElementById('sep10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 11 && (n === "September")) {
        document.getElementById('sep11').style.color = "gold"
        document.getElementById('sep11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 12 && (n === "September")) {
        document.getElementById('sep12').style.color = "gold"
        document.getElementById('sep12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 13 && (n === "September")) {
        document.getElementById('sep13').style.color = "gold"
        document.getElementById('sep15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 14 && (n === "September")) {
        document.getElementById('sep14').style.color = "gold"
        document.getElementById('sep14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 15 && (n === "September")) {
        document.getElementById('sep15').style.color = "gold"
        document.getElementById('sep15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 16 && (n === "September")) {
        document.getElementById('sep16').style.color = "gold"
        document.getElementById('sep16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 17 && (n === "September")) {
        document.getElementById('sep17').style.color = "gold"
        document.getElementById('sep17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 18 && (n === "September")) {
        document.getElementById('sep18').style.color = "gold"
        document.getElementById('sep18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 19 && (n === "September")) {
        document.getElementById('sep19').style.color = "gold"
        document.getElementById('sep19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 20 && (n === "September")) {
        document.getElementById('sep20').style.color = "gold"
        document.getElementById('sep20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 21 && (n === "September")) {
        document.getElementById('sep21').style.color = "gold"
        document.getElementById('sep21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 22 && (n === "September")) {
        document.getElementById('sep22').style.color = "gold"
        document.getElementById('sep22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 23 && (n === "September")) {
        document.getElementById('sep23').style.color = "gold"
        document.getElementById('sep24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 24 && (n === "September")) {
        document.getElementById('sep24').style.color = "gold"
        document.getElementById('sep24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 25 && (n === "September")) {
        document.getElementById('sep25').style.color = "gold"
        document.getElementById('sep25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 26 && (n === "September")) {
        document.getElementById('sep26').style.color = "gold"
        document.getElementById('sep26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 27 && (n === "September")) {
        document.getElementById('sep27').style.color = "gold"
        document.getElementById('sep27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 28 && (n === "September")) {
        document.getElementById('sep28').style.color = "gold"
        document.getElementById('sep28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 29 && (n === "September")) {
        document.getElementById('sep29').style.color = "gold"
        document.getElementById('sep29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }
    if (date === 30 && (n === "September")) {
        document.getElementById('sep30').style.color = "gold"
        document.getElementById('sep30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#c79f3a";
    }


    //-------------------------------------------------------------------------------------------October

    if (date === 1 && (n === "October")) {
        document.getElementById('oct1').style.color = "gold"
        document.getElementById('oct1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 2 && (n === "October")) {
        document.getElementById('oct2').style.color = "gold"
        document.getElementById('oct2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 3 && (n === "October")) {
        document.getElementById('oct3').style.color = "gold"
        document.getElementById('oct3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 4 && (n === "October")) {
        document.getElementById('oct4').style.color = "gold"
        document.getElementById('oct4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 5 && (n === "October")) {
        document.getElementById('oct5').style.color = "gold"
        document.getElementById('oct5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 6 && (n === "October")) {
        document.getElementById('oct6').style.color = "gold"
        document.getElementById('oct6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 7 && (n === "October")) {
        document.getElementById('oct7').style.color = "gold"
        document.getElementById('oct7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 8 && (n === "October")) {
        document.getElementById('oct8').style.color = "gold"
        document.getElementById('oct8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 9 && (n === "October")) {
        document.getElementById('oct9').style.color = "gold"
        document.getElementById('oct9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 10 && (n === "October")) {
        document.getElementById('oct10').style.color = "gold"
        document.getElementById('oct10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 11 && (n === "October")) {
        document.getElementById('oct11').style.color = "gold"
        document.getElementById('oct11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 12 && (n === "October")) {
        document.getElementById('oct12').style.color = "gold"
        document.getElementById('oct12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 13 && (n === "October")) {
        document.getElementById('oct13').style.color = "gold"
        document.getElementById('oct15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 14 && (n === "October")) {
        document.getElementById('oct14').style.color = "gold"
        document.getElementById('oct14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 15 && (n === "October")) {
        document.getElementById('oct15').style.color = "gold"
        document.getElementById('oct15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 16 && (n === "October")) {
        document.getElementById('oct16').style.color = "gold"
        document.getElementById('oct16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 17 && (n === "October")) {
        document.getElementById('oct17').style.color = "gold"
        document.getElementById('oct17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 18 && (n === "October")) {
        document.getElementById('oct18').style.color = "gold"
        document.getElementById('oct18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 19 && (n === "October")) {
        document.getElementById('oct19').style.color = "gold"
        document.getElementById('oct19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 20 && (n === "October")) {
        document.getElementById('oct20').style.color = "gold"
        document.getElementById('oct20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 21 && (n === "October")) {
        document.getElementById('oct21').style.color = "gold"
        document.getElementById('oct21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 22 && (n === "October")) {
        document.getElementById('oct22').style.color = "gold"
        document.getElementById('oct22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 23 && (n === "October")) {
        document.getElementById('oct23').style.color = "gold"
        document.getElementById('oct24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 24 && (n === "October")) {
        document.getElementById('oct24').style.color = "gold"
        document.getElementById('oct24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 25 && (n === "October")) {
        document.getElementById('oct25').style.color = "gold"
        document.getElementById('oct25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 26 && (n === "October")) {
        document.getElementById('oct26').style.color = "gold"
        document.getElementById('oct26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 27 && (n === "October")) {
        document.getElementById('oct27').style.color = "gold"
        document.getElementById('oct27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 28 && (n === "October")) {
        document.getElementById('oct28').style.color = "gold"
        document.getElementById('oct28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 29 && (n === "October")) {
        document.getElementById('oct29').style.color = "gold"
        document.getElementById('oct29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 30 && (n === "October")) {
        document.getElementById('oct30').style.color = "gold"
        document.getElementById('oct30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }
    if (date === 31 && (n === "October")) {
        document.getElementById('oct31').style.color = "gold"
        document.getElementById('oct31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#8f6f1f";
    }



    //-------------------------------------------------------------------------------------------November

    if (date === 1 && (n === "November")) {
        document.getElementById('nov1').style.color = "gold"
        document.getElementById('nov1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 2 && (n === "November")) {
        document.getElementById('nov2').style.color = "gold"
        document.getElementById('nov2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 3 && (n === "November")) {
        document.getElementById('nov3').style.color = "gold"
        document.getElementById('nov3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 4 && (n === "November")) {
        document.getElementById('nov4').style.color = "gold"
        document.getElementById('nov4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 5 && (n === "November")) {
        document.getElementById('nov5').style.color = "gold"
        document.getElementById('nov5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 6 && (n === "November")) {
        document.getElementById('nov6').style.color = "gold"
        document.getElementById('nov6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 7 && (n === "November")) {
        document.getElementById('nov7').style.color = "gold"
        document.getElementById('nov7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 8 && (n === "November")) {
        document.getElementById('nov8').style.color = "gold"
        document.getElementById('nov8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 9 && (n === "November")) {
        document.getElementById('nov9').style.color = "gold"
        document.getElementById('nov9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 10 && (n === "November")) {
        document.getElementById('nov10').style.color = "gold"
        document.getElementById('nov10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 11 && (n === "November")) {
        document.getElementById('nov11').style.color = "gold"
        document.getElementById('nov11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 12 && (n === "November")) {
        document.getElementById('nov12').style.color = "gold"
        document.getElementById('nov12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 13 && (n === "November")) {
        document.getElementById('nov13').style.color = "gold"
        document.getElementById('nov15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 14 && (n === "November")) {
        document.getElementById('nov14').style.color = "gold"
        document.getElementById('nov14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 15 && (n === "November")) {
        document.getElementById('nov15').style.color = "gold"
        document.getElementById('nov15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 16 && (n === "November")) {
        document.getElementById('nov16').style.color = "gold"
        document.getElementById('nov16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 17 && (n === "November")) {
        document.getElementById('nov17').style.color = "gold"
        document.getElementById('nov17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 18 && (n === "November")) {
        document.getElementById('nov18').style.color = "gold"
        document.getElementById('nov18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 19 && (n === "November")) {
        document.getElementById('nov19').style.color = "gold"
        document.getElementById('nov19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 20 && (n === "November")) {
        document.getElementById('nov20').style.color = "gold"
        document.getElementById('nov20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 21 && (n === "November")) {
        document.getElementById('nov21').style.color = "gold"
        document.getElementById('nov21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 22 && (n === "November")) {
        document.getElementById('nov22').style.color = "gold"
        document.getElementById('nov22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 23 && (n === "November")) {
        document.getElementById('nov23').style.color = "gold"
        document.getElementById('nov24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 24 && (n === "November")) {
        document.getElementById('nov24').style.color = "gold"
        document.getElementById('nov24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 25 && (n === "November")) {
        document.getElementById('nov25').style.color = "gold"
        document.getElementById('nov25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 26 && (n === "November")) {
        document.getElementById('nov26').style.color = "gold"
        document.getElementById('nov26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 27 && (n === "November")) {
        document.getElementById('nov27').style.color = "gold"
        document.getElementById('nov27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 28 && (n === "November")) {
        document.getElementById('nov28').style.color = "gold"
        document.getElementById('nov28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 29 && (n === "November")) {
        document.getElementById('nov29').style.color = "gold"
        document.getElementById('nov29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }
    if (date === 30 && (n === "November")) {
        document.getElementById('nov30').style.color = "gold"
        document.getElementById('nov30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#1f268f";
    }

    //-------------------------------------------------------------------------------------------December

    if (date === 1 && (n === "December")) {
        document.getElementById('dec1').style.color = "gold"
        document.getElementById('dec1').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 2 && (n === "December")) {
        document.getElementById('dec2').style.color = "gold"
        document.getElementById('dec2').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 3 && (n === "December")) {
        document.getElementById('dec3').style.color = "gold"
        document.getElementById('dec3').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 4 && (n === "December")) {
        document.getElementById('dec4').style.color = "gold"
        document.getElementById('dec4').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 5 && (n === "December")) {
        document.getElementById('dec5').style.color = "gold"
        document.getElementById('dec5').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 6 && (n === "December")) {
        document.getElementById('dec6').style.color = "gold"
        document.getElementById('dec6').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 7 && (n === "December")) {
        document.getElementById('dec7').style.color = "gold"
        document.getElementById('dec7').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 8 && (n === "December")) {
        document.getElementById('dec8').style.color = "gold"
        document.getElementById('dec8').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 9 && (n === "December")) {
        document.getElementById('dec9').style.color = "gold"
        document.getElementById('dec9').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 10 && (n === "December")) {
        document.getElementById('dec10').style.color = "gold"
        document.getElementById('dec10').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 11 && (n === "December")) {
        document.getElementById('dec11').style.color = "gold"
        document.getElementById('dec11').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 12 && (n === "December")) {
        document.getElementById('dec12').style.color = "gold"
        document.getElementById('dec12').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 13 && (n === "December")) {
        document.getElementById('dec13').style.color = "gold"
        document.getElementById('dec15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 14 && (n === "December")) {
        document.getElementById('dec14').style.color = "gold"
        document.getElementById('dec14').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 15 && (n === "December")) {
        document.getElementById('dec15').style.color = "gold"
        document.getElementById('dec15').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 16 && (n === "December")) {
        document.getElementById('dec16').style.color = "gold"
        document.getElementById('dec16').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 17 && (n === "December")) {
        document.getElementById('dec17').style.color = "gold"
        document.getElementById('dec17').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 18 && (n === "December")) {
        document.getElementById('dec18').style.color = "gold"
        document.getElementById('dec18').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 19 && (n === "December")) {
        document.getElementById('dec19').style.color = "gold"
        document.getElementById('dec19').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 20 && (n === "December")) {
        document.getElementById('dec20').style.color = "gold"
        document.getElementById('dec20').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 21 && (n === "December")) {
        document.getElementById('dec21').style.color = "gold"
        document.getElementById('dec21').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 22 && (n === "December")) {
        document.getElementById('dec22').style.color = "gold"
        document.getElementById('dec22').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 23 && (n === "December")) {
        document.getElementById('dec23').style.color = "gold"
        document.getElementById('dec24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 24 && (n === "December")) {
        document.getElementById('dec24').style.color = "gold"
        document.getElementById('dec24').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 25 && (n === "December")) {
        document.getElementById('dec25').style.color = "gold"
        document.getElementById('dec25').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 26 && (n === "December")) {
        document.getElementById('dec26').style.color = "gold"
        document.getElementById('dec26').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 27 && (n === "December")) {
        document.getElementById('dec27').style.color = "gold"
        document.getElementById('dec27').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 28 && (n === "December")) {
        document.getElementById('dec28').style.color = "gold"
        document.getElementById('dec28').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 29 && (n === "December")) {
        document.getElementById('dec29').style.color = "gold"
        document.getElementById('dec29').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 30 && (n === "December")) {
        document.getElementById('dec30').style.color = "gold"
        document.getElementById('dec30').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }
    if (date === 31 && (n === "December")) {
        document.getElementById('dec31').style.color = "gold"
        document.getElementById('dec31').style.fontSize = "2em"
        document.body.style.backgroundColor = "#98ebb5";
    }


    //----------------------------------------------------------------------------------

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

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}