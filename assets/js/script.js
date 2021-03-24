$(document).ready(function () {
    console.log("ready!");

    //Function to loop through 1-50 and create the animation balls
    //Balls use same 2 keyframes from animation.css but delay is incremented by 0.1 to create wave effect
    for (let i = 1; i < 80; i++) {
        $(".animation-container").append("<div id='ball-" + i + "' class='ball-animation'></div>");
        if (i % 2 == 0) {
            $("#ball-" + i).css({
                "animationName": "ball-2",
            });
        } else
            $("#ball-" + i).css({
                "animationName": "ball-1",
            });
        $("#ball-" + i).css({
            "animationDelay": `${i * 0.1}s`,
            "top": "-2rem",
            "left": "-2%"
        });
        //change for final iteration only
        console.log([i]+"|"+[i*0.1])
    };

});