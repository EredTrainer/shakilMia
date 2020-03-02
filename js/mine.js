$(document).ready(function () {
    //typing jquary
    $(".text").typed({
        strings: ['Freelancer', 'Website Designer', 'Web Developer'],
        typeSpeed: 0,
        backDelay: 3000,
        backSpeed: 0,
        showCursor: true,
        cursorChar: "|",
        loop: true,
    });
    //Active menu item 
    $('.menu-item ul li a').click(function () {
        $('.menu-item ul li a').removeClass('active');
        $(this).addClass('active');
    });
    //barfiller-----------
    $('#bar1').barfiller({
        barColor: '#2980B9',
        duration: 3000
    });
    $('#bar2').barfiller({
        barColor: '#2980B9',
        duration: 3000
    });
    $('#bar3').barfiller({
        barColor: '#2980B9',
        duration: 3000
    });
    $('#bar4').barfiller({
        barColor: '#2980B9',
        duration: 3000
    });
    $('#bar5').barfiller({
        barColor: '#2980B9',
        duration: 3000
    });


})
