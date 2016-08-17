// JavaScript source code
$(document).ready(function () {

    $("p").hide();

    $("h1,h2,h3").click(function () {
        $(this).next().slideToggle(300);
    });

});