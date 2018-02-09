var module = (function () {
    var getCanvas = function() {
        var canvas = document.getElementsByClassName("game__canvas")[0];
        var ctx = canvas.getContext("2d");

        return ctx;
    };

    var drawRect = function () {
        var ctx = getCanvas();

        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    };

    var drawCircle = function () {
        var ctx = getCanvas();

        ctx.beginPath();
        ctx.arc(240, 160, 20, 0, Math.PI*2,false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    };

    return {
        drawRectMethod: drawRect(),
        drawCircleMethod: drawCircle()
    }
})();