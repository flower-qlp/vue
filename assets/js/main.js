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


})(jQuery);
