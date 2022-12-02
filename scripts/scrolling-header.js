$(function() {
    var header = $(".header");
    var header_bar = $(".header_bar");
    var main = $(".main");

    header.removeClass("header_up");
    main.removeClass("main_up");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();


        if (scroll >= 1) {
            header.addClass("header_up");
            header_bar.removeClass("header_bar_up");
            main.addClass("main_up");
        } else {
            header.removeClass("header_up");
            header_bar.addClass("header_bar_up");
            main.removeClass("main_up");
            header.addClass("header_transition");
            header_bar.addClass("header_transition");
            main.addClass("header_transition");
        }
    });
});