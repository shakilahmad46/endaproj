/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

    'use strict';
    $('.sec-title').html(function (index, curHTML) {
        var text = curHTML.split(/[\s-]/),
            newtext = '<span class="pri-text">' + text.pop() + '</span>';
        return text.join(' ').concat(' ' + newtext);
    });

    $('.slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        //        appendDots: $('.xlider-dots'),
        arrows: false,
    });

    $('.autoplay').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        //        autoplay: true,
        //        autoplaySpeed: 2000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    mobileFirst: true

                }
    },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    draggable: false,
                    mobileFirst: true
                    //                    autoplay: true


                }
    },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    draggable: false,
                    mobileFirst: true
                    //                    autoplay: true


                }
    },
            {
                breakpoint: 250,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    draggable: false,
                    mobileFirst: true
                    //                    autoplay: true


                }
    }
  ]
    });
    //    $('.slick').slick({
    //        dots: true,
    //        infinite: true,
    //        speed: 500,
    //        fade: true,
    //        cssEase: 'linear',
    //        autoplay: true,
    //        autoplaySpeed: 7000,
    //    });
    Drupal.behaviors.enda = {
        attach: function (context, settings) {
            $('.top-navbar .menu-vis').once('menuclicked').click(function () {
                $(this).toggleClass('open');
                $('#header .navigation').toggleClass('open');
                $('.top-navbar').toggleClass('open');
                // alert('HI');
            });
            $("#block-searchform").append('<div class="search-toggle"></div>');

            $('.search-toggle').click(function () {
                $('.block-search-form-block input').toggleClass('sopen');
            });




        }
    };

})(jQuery, Drupal);

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
});
