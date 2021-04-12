(function ($) {

    new WOW().init();

    $(".search-list > a").on("click", function () {
        //对当前控件检查 括号里的属性  存在删除 不存在添加
        $(this).toggleClass("activity");
        //消失存在间切换  并带有滑动动画
        $(".dropdown-search").slideToggle();
    });

    //背景图片
    function dataBackGroundImage() {
        $("[data-bgimg]").each(function () {
            let bgImageUrl = $(this).data("bgimg");
            $(this).css({
                "background-image": "url(" + bgImageUrl + ")",
            });
        });
    }

    $(window).on("load", function () {
        dataBackGroundImage();
    });

    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    })

    let $slider = $(".slider-area");
    if ($slider.length > 0) {
        $slider.owlCarousel({
            animateOut: "fadeOut",
            autoplay: true,
            loop: true,
            nav: false,
            autoplayTimeout: 8000,
            items: 1,
            dots: true
        });
    }

    let $blogList = $(".blog-list");
    if ($blogList.length > 0) {
        console.log('$blogList.length--->' + $blogList.length);
        $blogList.owlCarousel({
            item: 3,
            loop: true,
            nav: true,
            dots: false,
            navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {item: 1},
                400: {item: 2},
                800: {item: 3}
            }
        })
    }

    let $categoriesList = $(".categories-list");
    if ($categoriesList.length > 0) {
        $(".categories-list").on('changed.owl.carousel initialized.owl.carousel', function (event) {

        }).owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 4,
                }
            }
        });
    }


    const $brandList = $(".brand-list");
    if ($brandList.length > 0) {
        //初始化  发生改变
        $(".brand-list").on('changed.owl.carousel initialized.owl.carousel',
            function (event) {

            }).owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplayTimeout: 8000,
            items: 7,
            dots: false,
            navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                576: {
                    items: 4,
                },
                768: {
                    items: 5,
                },
                992: {
                    items: 6,
                },
                1200: {
                    items: 7,
                },
            }
        });
    }

    let $thumbColumn1 = $(".testimonial-thumb-column1");
    $thumbColumn1.slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-thumb-column3',
        nextArrow: '<button class="slick-next"> pre </button>',
        prevArrow: '<button class="slick-prev"> next </button>',
    });

    let $thumbColumn3 = $(".testimonial-thumb-column3");
    $thumbColumn3.slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        asNavFor: '.testimonial-thumb-column1',
        centerMode: true,
        focusOnSelect: true
    });

    $thumbColumn3.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        console.log(currentSlide.toString());
    });

    //popwindow
    setTimeout(function () {
        console.log("-----")
        $('.pop-view').bPopup();


    },1000)

})(jQuery);
