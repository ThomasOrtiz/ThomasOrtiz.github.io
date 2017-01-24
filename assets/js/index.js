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
function scrollTo(callingElement, scrollToID) {
    if (scrollToID) {

        // Reset other menu buttons and set active clicked button
        $('#menu > ul > li > a').removeClass('active');
        $( callingElement ).addClass('active');
        
        // Animate moving 
        $('html, body').animate({
            scrollTop: $("#" + scrollToID).offset().top
        }, 1000);
    }
};

/** 
$(window).scroll(function() {
    var position = $(this).scrollTop();
    var somethingSelected = false;

    $('.contentSection').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        
        if (position + 240 >= target) {
            somethingSelected = true;
            $('#menu > ul > li > a').removeClass('active');
            $('#menu > ul > li > a[href$=' + id + ']').addClass('active');
        }
    });

    if( somethingSelected == false ){
        $('#menu > ul > li > a').removeClass('active');
        $('#menu > ul > li > a[href$=header]').addClass('active');
    }
});
*/