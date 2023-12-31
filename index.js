var h2 = document.querySelector(".calendar-picture h2")
var h3 = document.querySelector(".calendar-picture h3")

var monthArr = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var dayArr = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

var day31MonthArr = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December"
]

var d = new Date();
var obj = getDate()
function getDate(){
    var month = d.getMonth();
    month = monthArr[month]
    console.log(month)

    var day = d.getDay()
    day = dayArr[day]
    console.log(day);

    var date = d.getDate()

    h2.innerHTML = date+ ", "+day;
    h3.innerHTML = month;
    return {m:month, dy:day, dt:date, yr:d.getFullYear()}
}

function generateCalendar(){
    var days;

    if(obj.m == "Feburary" && obj.yr % 4 !==0){
        days = 28
    }
    else if(obj.m == "Feburary" && obj.yr % 4 ===0){
        days = 29
    }
    else if(day31MonthArr.includes(obj.m)){
        days = 31;
    }
    else {
        days = 30
    }


    var LocalDayArr = [
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

   var startOfMonth = moment().clone().startOf("month").format("dddd")
   var dayIndex = LocalDayArr.indexOf(startOfMonth)

   for(var j=0; j<dayIndex;j++){
    var element = document.createElement("div");
    element.className = "calendar__number_empty";
    document.getElementById("lc").appendChild(element)
   }

   for(var k=1;k<=days;k++){
    var element = document.createElement("div");
    obj.dt === k 
    ? (element.className="calendar__number--current calendar__number")
    : (element.className="calendar__number")

    element.appendChild(document.createTextNode(k));
    document.getElementById("lc").appendChild(element)
   }

   console.log(startOfMonth)
}
generateCalendar()