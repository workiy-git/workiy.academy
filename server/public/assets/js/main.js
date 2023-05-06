$(document).ready(function() {
    $("html, body").animate({ "scrollTop": 0 }, 300);
    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("open scroll-up");
        $("#main-menu").toggleClass("shadow-lg open");
    });

    $(".courses .nav-pills li").on("click", function() {
        let className = $(this).children("a").attr("data-target");
        $(".courses .nav-pills li").removeClass("active");
        $(this).addClass("active");
        $(".sim-courses-list li").hide();
        $(".sim-courses-list li." + className).show();
    });
});

$(window).on("load", function() {
    $("#loader").hide();
});
$(window).on("scroll load", function() {
    if ($(this).scrollTop() > 100) {
        $("header").addClass("scrolled scroll-down").removeClass("shadow-lg-none");
    } else {
        $("header").removeClass("scrolled scroll-down").addClass("shadow-lg-none");
    }
});