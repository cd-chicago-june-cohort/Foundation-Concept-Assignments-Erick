var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(PERIOD == "AM")
    {
        console.log("It's almost 9 in the morning");
    }
else
    {
        console.log("It's almost 9 in the evening");
    }

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(MINUTE < 30)
    {
        console.log("Its just after " + HOUR + " in the evening");
    }
else if(MINUTE > 30)
    {
        console.log("Its almost 8 in the morning");
    }
