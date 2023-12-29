var $slider = $("#slider");
var $fill = $(".bar .fill");
var $slider2 = $("#slider2");
var $fill2 = $(".bar2 .fill2");
const bodyFilter = $("body");
const soundEffect = $("#volume-sound")[0];

function setBar() {
    $fill.css("width", $slider.val() * 100 + "%");
    $slider.on("change", function() {
        const volume = parseFloat($slider.val());
        soundEffect.volume = volume;
        soundEffect.play();
    })
}
function setBar2() {
    $fill2.css("width", $slider2.val() + "%")
    const brightnessValue = $slider2.val() / 100;
    bodyFilter.css('filter', `brightness(${brightnessValue}`);
}

$slider.on("input", setBar);
$slider2.on("input", setBar2);

setBar()
setBar2()