$(function() {
    document.body.className = '';
    var pull = $('#pull');
    menu = $('#menu ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if( w > 480 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    $('#menu li').on('click', function(){
        var w = $(window).width();
        if( !(w > 480) && !(menu.is(':hidden')) ) {
            $("#pull").click();
        }
    });

    window.onorientationchange = function() { document.body.scrollTop = 0; };

    /* Menu onClick Buttons */
    function scrollTo(elementID) {
        console.log(elementID);
        $('html, body').animate({
            scrollTop: $("#" + elementID).offset().top
        }, 1000);
    };

    // Google Analytics Tracking
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-90372061-1', 'auto');
    ga('send', 'pageview');
    
});