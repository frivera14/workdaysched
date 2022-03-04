var today = moment().format("MMMM Do, YYYY - hh:mm a");
var now = moment();

$("#currentDay").text(today);





var audit9AM = function () {


    var time = moment(now, "L").set("hour", 9);
    var limit = moment(now, "L").set("hour", 10);
    
    if (moment().isAfter(limit)) {
        $("#9AM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#9AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#9AM").addClass("present");

    }
};

audit9AM();

var audit10AM = function () {


    var time = moment(now, "L").set("hour", 10);
    var limit = moment(now, "L").set("hour", 11);
    
    if (moment().isAfter(limit)) {
        $("#10AM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#10AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#10AM").addClass("present");

    }
};

audit10AM();

var audit11AM = function () {


    var time = moment(now, "L").set("hour", 11);
    var limit = moment(now, "L").set("hour", 12);
    
    if (moment().isAfter(limit)) {
        $("#11AM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#11AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#11AM").addClass("present");

    }
};

audit11AM();

var audit12PM = function () {


    var time = moment(now, "L").set("hour", 12);
    var limit = moment(now, "L").set("hour", 13);
    
    if (moment().isAfter(limit)) {
        $("#12PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#12PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#12PM").addClass("present");

    }
};

audit12PM();

var audit1PM = function () {


    var time = moment(now, "L").set("hour", 13);
    var limit = moment(now, "L").set("hour", 14);
    
    if (moment().isAfter(limit)) {
        $("#1PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#1PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#1PM").addClass("present");

    }
};

audit1PM();

var audit2PM = function () {


    var time = moment(now, "L").set("hour", 14);
    var limit = moment(now, "L").set("hour", 15);
    
    if (moment().isAfter(limit)) {
        $("#2PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#2PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#2PM").addClass("present");

    }
};

audit2PM();

var audit3PM = function () {


    var time = moment(now, "L").set("hour", 15);
    var limit = moment(now, "L").set("hour", 16);
    
    if (moment().isAfter(limit)) {
        $("#3PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#3PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#3PM").addClass("present");

    }
};

audit3PM();

var audit4PM = function () {


    var time = moment(now, "L").set("hour", 16);
    var limit = moment(now, "L").set("hour", 17);
    
    if (moment().isAfter(limit)) {
        $("#4PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#4PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#4PM").addClass("present");

    }
};

audit4PM();

var audit5PM = function () {


    var time = moment(now, "L").set("hour", 17);
    var limit = moment(now, "L").set("hour", 18);
    
    if (moment().isAfter(limit)) {
        $("#5PM").addClass("past");
        console.log('true')
    } else if (moment().isBefore(time)) {
        $("#5PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#5PM").addClass("present");

    }
};

audit5PM();