$(document).ready(function () {
    console.log("ready!");

    //Start functions here
    for (let i = 1; i < 21; i++) {
        $(".animation-container").append("<div id='ball-" + i + "' class='ball-animation'></div>");
        $("#ball-" + i).css({
            "animationName": "ball-" + i,
            "animationDelay": `${i * 0.2}s`,
            "top": "-2rem",
            "left": "-2%"
        });
    };
});