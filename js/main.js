$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        margin: 10,
        smartSpeed: 6000,
        autoplayTimeOut: 1000,
        slideTransition: 'linear',
        loop: true,
        autoplay: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6 
            }
        }
    });

    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top > 50) {
            $('#nav').addClass("bg-success");
        } else {
            $('#nav').removeClass("bg-success");
        }
    });

    $(".gallery-item").isotope({
        itemSelector: ".item",
        layoutMode: "fitRows"
    });
    $('.gallery-menu ul li').click(function() {
        $('.gallery-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.gallery-item').isotope({
            filter: selector
        })
        return false;
    });
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
            })();

        