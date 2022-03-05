var today = moment().format("MMMM Do, YYYY - hh:mm a");
var now = moment();

var thearea = document.getElementById("9AM")
$("#currentDay").text(today);

// First Task
$("#buttn9").on('click', function () {

    var thisthing = $('#9AM').val()

    localStorage.setItem('task9', thisthing)


});

var loadTask9 = function () {
    var savedTask = localStorage.getItem('task9')

    $("#9AM").text(savedTask)
}

loadTask9();

var audit9AM = function () {


    var time = moment(now, "L").set("hour", 9);
    var limit = moment(now, "L").set("hour", 10);

    if (moment().isAfter(limit)) {
        $("#9AM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#9AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#9AM").addClass("present");
    }
};

audit9AM();
// Second

$("#buttn10").on('click', function () {

    var otherthing = $('#10AM').val()

    localStorage.setItem('task10', otherthing)


});

var loadTask10 = function () {
    var savedTask = localStorage.getItem('task10')
    $("#10AM").text(savedTask)
}

loadTask10();

var audit10AM = function () {


    var time = moment(now, "L").set("hour", 10);
    var limit = moment(now, "L").set("hour", 11);

    if (moment().isAfter(limit)) {
        $("#10AM").addClass("past");

    } else if (moment().isBefore(time)) {
        $("#10AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#10AM").addClass("present");

    }
};

audit10AM();
// Third
$("#buttn11").on('click', function () {

    var anotherone = $('#11AM').val()

    localStorage.setItem('task11', anotherone)


});

var loadTask11 = function () {
    var savedTask = localStorage.getItem('task11')

    $("#11AM").text(savedTask)

}

loadTask11();

var audit11AM = function () {


    var time = moment(now, "L").set("hour", 11);
    var limit = moment(now, "L").set("hour", 12);

    if (moment().isAfter(limit)) {
        $("#11AM").addClass("past");

    } else if (moment().isBefore(time)) {
        $("#11AM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#11AM").addClass("present");

    }
};

audit11AM();
// Fourth
$("#buttn12").on('click', function () {

    var thirdthing = $('#12PM').val()

    localStorage.setItem('task12', thirdthing)

});

var loadTask12 = function () {
    var savedTask = localStorage.getItem('task12')

    $("#12PM").text(savedTask)
}

loadTask12();

var audit12PM = function () {


    var time = moment(now, "L").set("hour", 12);
    var limit = moment(now, "L").set("hour", 13);

    if (moment().isAfter(limit)) {
        $("#12PM").addClass("past");

    } else if (moment().isBefore(time)) {
        $("#12PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#12PM").addClass("present");

    }
};

audit12PM();
// Fifth

$("#buttn13").on('click', function () {

    var fourththing = $('#1PM').val()

    localStorage.setItem('task13', fourththing)
});

var loadTask13 = function () {
    var savedTask = localStorage.getItem('task13')

    $("#1PM").text(savedTask)

}

loadTask13();


var audit1PM = function () {


    var time = moment(now, "L").set("hour", 13);
    var limit = moment(now, "L").set("hour", 14);

    if (moment().isAfter(limit)) {
        $("#1PM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#1PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#1PM").addClass("present");
    }
};

audit1PM();

// Sixth
$("#buttn14").on('click', function () {

    var fifththing = $('#2PM').val()

    localStorage.setItem('task14', fifththing)


});

var loadTask14 = function () {
    var savedTask = localStorage.getItem('task14')

    $("#2PM").text(savedTask)

}

loadTask14();

var audit2PM = function () {


    var time = moment(now, "L").set("hour", 14);
    var limit = moment(now, "L").set("hour", 15);

    if (moment().isAfter(limit)) {
        $("#2PM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#2PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#2PM").addClass("present");

    }
};

audit2PM();

// Seventh
$("#buttn15").on('click', function () {

    var sixththing = $('#3PM').val()

    localStorage.setItem('task15', sixththing)


});

var loadTask15 = function () {
    var savedTask = localStorage.getItem('task15')

    $("#3PM").text(savedTask)

}

loadTask15();

var audit3PM = function () {


    var time = moment(now, "L").set("hour", 15);
    var limit = moment(now, "L").set("hour", 16);

    if (moment().isAfter(limit)) {
        $("#3PM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#3PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#3PM").addClass("present");
    }
};

audit3PM();

// Eighth
$("#buttn16").on('click', function () {

    var onemore = $('#4PM').val()

    localStorage.setItem('task16', onemore)


});

var loadTask16 = function () {
    var savedTask = localStorage.getItem('task16')

    $("#4PM").text(savedTask)
}

loadTask16();

var audit4PM = function () {


    var time = moment(now, "L").set("hour", 16);
    var limit = moment(now, "L").set("hour", 17);

    if (moment().isAfter(limit)) {
        $("#4PM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#4PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#4PM").addClass("present");

    }
};

audit4PM();

// Ninth
$("#buttn17").on('click', function () {

    var lastthing = $('#5PM').val()

    localStorage.setItem('task17', lastthing)


});

var loadTask17 = function () {
    var savedTask = localStorage.getItem('task17')

    $("#5PM").text(savedTask)

}

loadTask17();

var audit5PM = function () {


    var time = moment(now, "L").set("hour", 17);
    var limit = moment(now, "L").set("hour", 18);

    if (moment().isAfter(limit)) {
        $("#5PM").addClass("past");
    } else if (moment().isBefore(time)) {
        $("#5PM").addClass("future")
    } else if (moment().isBefore(limit)) {
        $("#5PM").addClass("present");

    }
};

audit5PM();
