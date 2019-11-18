'use strict';

$(window).on('load', function() {

    // Preloder
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");



    // Isotope Filter
    var $container = $('.isotope_items');
    $container.isotope();

    $('.projects-filter li').on("click", function() {
        $(".projects-filter li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});



(function($) {

    // HEADER
    var navMenu = $('.menu-list')
    navMenu.onePageNav();
    $(window).on('scroll resize', function(e) {
        if ($(this).scrollTop() > 70) {
            $('.header-section').addClass('sticky');
        } else {
            $('.header-section').removeClass('sticky');
        }
        e.preventDefault();
    });

    $('.responsive').on('click', function(event) {
        $('.menu-list').slideToggle(400);
        $('.header-section').toggleClass('bgc');
        event.preventDefault();
    });

    $('.menu-list li a').on('click', function(event) {
        if ($(window).width() < 768) {
            $('.menu-list').slideUp(400);
            $('.header-section').removeClass('bgc');
        }
    });

    $('#smooth-scroll').on('click', function(event) {
        $("html, body").animate({ scrollTop: $("#home").offset().top }, 650);
        return false;
    });



    // TYPED JS
    $(".element").typed({
        strings: ["Front-end Developer", "Web Developer", "Software Engineer", "Back-end Developer", "Business Analyst", "Pharmacy Technician"],
        typeSpeed: 10,
        loop: true,
        backDelay: 2000
    });



    // FOOTER
    var fh = $('.footer-section').height();
    fh = fh + 140;
    $('.main-warp').css('margin-bottom', fh);


    //PROGRESS BAR
    $('.skills-list-1-6').appear(function() {
        $('#demoprogressbar1').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',

        });
        $('#demoprogressbar2').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar3').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar4').LineProgressbar({
            percentage: 50,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar5').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar6').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
    });
    $('.skills-list-7-12').appear(function() {
        $('#demoprogressbar7').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar8').LineProgressbar({
            percentage: 50,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar9').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar10').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar11').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',

        });
        $('#demoprogressbar12').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',

        });
    });

    $('.skills-list-13-16').appear(function() {
        $('#demoprogressbar13').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar14').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar15').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar16').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
    });
    $('.skills-list-17-20').appear(function() {
        $('#demoprogressbar17').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar18').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar19').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
        $('#demoprogressbar20').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#EC7063',
            backgroundColor: '#202c3d',
            height: '10px',
            radius: '6px',
        });
    });



    // OWL CAROUSEL
    $('#review-carousel').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        margin: 30,
        smartSpeed: 700,
        items: 1,
        autoplay: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });


    // MAGNIDIC POPUP
    $('.work-item').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        removalDelay: 400,
        zoom: { enabled: true, duration: 300 }
    });


    // WOW JS
    new WOW().init();


    // CONTACT FORM
    $('#contact-form').on('submit', function() {
        var send_btn = $('#send-form'),
            form = $(this),
            formdata = $(this).serialize(),
            chack = $('#form-chack');
        send_btn.text('Wait...');

        function reset_form() {
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
        }

        $.ajax({
            url: $(form).attr('action'),
            type: 'POST',
            data: formdata,
            success: function(text) {
                if (text == "success") {
                    send_btn.addClass('done');
                    send_btn.text('Success');
                    setTimeout(function() {
                        reset_form();
                        send_btn.removeClass('done');
                        send_btn.text('Message');
                    }, 2500);
                } else {
                    reset_form();
                    send_btn.addClass('error');
                    send_btn.text('Error');
                    setTimeout(function() {
                        send_btn.removeClass('error');
                        send_btn.text('Message');
                    }, 5000);
                }
            }
        });
        return false;
    });


})(jQuery);