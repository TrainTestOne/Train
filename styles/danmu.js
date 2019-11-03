$("#launch").click(function () {
    creat($("#input").val());
});

$("#clear").click(function () {

    $(".dm").remove();
});

$("#input").keydown(function (event) {
    if (event.keyCode == 13) {
        creat($("#input").val());
    }
})

function creat(text) {
    var dm = $("<div class='dm'>" + text + "</div>");
    var fc = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
    var fs = parseInt(Math.random() * 15) + 10 + "px";
    var left = $("#canvas").width() + "px";
    var top = Math.random() * 500 + "px";
    top = parseInt(top) > 475 ? "475px" : top;
    dm.css({
        "position": 'absolute',
        "color": fc,
        "font-size": fs,
        "left": left,
        "top": top,
        "white-space": 'nowrap'
    });
    $("#canvas").append(dm);
    var ove = dm.width();
    var speed = Math.random() * 4000 + 5000;
    dm.animate({
        "left": -ove
    }, speed, function () {
        $(this).remove();
    })
}
