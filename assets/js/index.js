$(function() {
    document.body.className = '';
    var pull = $('#pull');
    menu = $('#menu ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('#menu li').on('click', function() {
        var w = $(window).width();
        if (!(w > 480) && !(menu.is(':hidden'))) {
            $("#pull").click();
        }
    });

    window.onorientationchange = function() { document.body.scrollTop = 0; };
});

// Menu onClick Buttons 
function scrollTo(scrollToID) {
    if (scrollToID) {
        // Animate moving 
        $('html, body').animate({
            scrollTop: $("#" + scrollToID).offset().top
        }, 1000);
    }
};
