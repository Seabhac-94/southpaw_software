var button = $("button.button-1")
var span = $("span.span-1")

$(button).on("click", function (event) {
    span.html("Rok's a bitch");
    span.addClass("py-2 px-2")
})