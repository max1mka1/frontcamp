// Tingaev MI
// All rights reserved ©

;'use strict';

(function ($) {
    $(document).ready(function () {
        var bannersUrl = "https://frontend.camp.dev.unit6.ru/get-slides";
        $.getJSON(bannersUrl, function () {
            console.log("success");
        })
            .done(function (banners) {

                // settings for slider
                var nowSec = Math.floor(new Date().valueOf() * 0.001);
                var animationSpeed = 300;
                var delay = 2500;
                var interval;
                var lastBunnerId = 0;

                // cache DOM elements
                var $slideDotsContainer = $('.b-slider__dots');
                var $sliderDots = $('.b-slider__dot');

                // sorting and filtering banners
                var preparedBanners = banners
                    .filter(function (banner) {
                        return (
                            banner.active === true &&
                            banner.startDate <= nowSec &&
                            banner.endDate >= nowSec
                        );
                    })
                    .sort(function (a, b) {
                        return a.order - b.order;
                    });
                const preparedBannersCount = preparedBanners.length;

                // clean slider state
                $('.b-slider__dots').empty();

                if (preparedBannersCount !== 0) {

                    for (var i = 0; i < preparedBannersCount; i++) {
                        var sliderDot = document.createElement('div');  //TODO: convert into jQ methods
                        $(sliderDot)
                            .addClass('b-slider__dot')
                            .on(
                                "click",
                                (function (id) {
                                    return function () {
                                        showSlide(id);
                                    }
                                })(i)
                            );

                        $slideDotsContainer.append(sliderDot);
                    };

                    // cache recreated dots
                    $sliderDots = $('.b-slider__dot');

                    $($sliderDots[0]).addClass('b-slider__dot--selected');

                    $slideDotsContainer
                        .on('mouseenter', pauseSlider)
                        .on('mouseleave', startSlider);

                    startSlider();
                }

                // define local functions
                function showSlide(id) {

                    if (id !== void 0) {
                        lastBunnerId = id;
                    }
                    
                    //TODO: change to another method
                    var currentId = id % preparedBannersCount;
                    
                    var imgPath = "url(" + preparedBanners[currentId].image.slice(1) + ")";
                    $sliderDots.removeClass('b-slider__dot--selected');
                    $($sliderDots[currentId]).addClass('b-slider__dot--selected');

                    $('.b-slide__image')
                        .css({
                            "background-image": imgPath,
                            "display": "none"
                        })
                        .show(animationSpeed);
                    $('.b-slide__title')
                        .html(preparedBanners[currentId].title);
                    $('.b-slide__text')
                        .html(preparedBanners[currentId].text);
                }

                function showNextSlide() {
                    showSlide(lastBunnerId + 1);
                }

                function startSlider() {
                    interval = setInterval(showNextSlide, delay);
                };

                function pauseSlider() {
                    clearInterval(interval);
                };
            })
            .fail(function (jqXHR, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            })
            .always(function () {
                console.log("complete");
            });
    });
})(jQuery);
