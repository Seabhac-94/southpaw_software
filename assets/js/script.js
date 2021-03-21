$(document).ready(function () {
    console.log("ready!");

    //Start functions here
    for (let i = 1; i < 21; i++) {
        $(".animation-container").append("<div id='ball-" + i + "' class='ball-animation'></div>")
    }
});