$(document).ready(function () {
    console.log("ready!");

    //Start functions here
    for (let i = 1; i < 21; i++) {
        $(".animation-container").append("<div id='ball-" + i + "' class='ball-animation'></div>");
        // if (i % 2 == 0) {
        //     $("#ball-"+i).css({
        //         "backgroundColor": "red",
        //         "width": "10rem"
        // })
        // }
    };

});