export const initProductPage = () => {


    setTimeout(function() {
        $('.olio-related-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true,
            dots: true,
            arrows: false,

            responsive: [
                {
                    breakpoint: 959,
                    settings: "unslick"
                }
            ]
        });
    }, 3000);
}

