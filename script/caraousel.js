var breakpoint = {
    // Small screen / phone
    sm: 768,
    // Medium screen / tablet
    md: 768,
    // Large screen / desktop
    lg: 768,
    // Extra large screen / wide desktop
    xl: 768
};

const DEFAULT_SLIDER = {
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    draggable: true,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 1000,
    mobileFirst: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: breakpoint.sm,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true
        }
    },
    {
        breakpoint: breakpoint.md,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true
        }
    },
    {
        breakpoint: breakpoint.lg,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true
        }
    },
    {
        breakpoint: breakpoint.xl,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true
        }
    }
    ]
}

// slick slider
$('#historycaraousel').slick(DEFAULT_SLIDER);

$('#teamcaraousel').slick(DEFAULT_SLIDER);