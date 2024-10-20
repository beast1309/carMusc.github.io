$(function () {
    const swiper = new Swiper('.slider__swiper', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        speed: 400,
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1160: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    const benefitsSwiper = new Swiper('.benefits__swiper', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        speed: 400,
        navigation: {
            nextEl: '.benefits-button-next',
            prevEl: '.benefits-button-prev',
        }
    })

    const serviceSwiper = new Swiper('.service__info-swiper', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        speed: 400,
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        }
    })

    $('#tabOne').on('click', function () {
        $('#tabOne').toggleClass('--active')
        $('#tabOne').attr('disabled', 'disabled')
        $('#tabTwo').removeClass('--active')
        $('#tabTwo').removeAttr('disabled')
        $('#tabsContentOne').removeClass('--hidden')
        $('#tabsContentTwo').toggleClass('--hidden')
    })

    $('#tabTwo').on('click', function () {
        $('#tabTwo').toggleClass('--active')
        $('#tabTwo').attr('disabled', 'disabled')
        $('#tabOne').removeClass('--active')
        $('#tabOne').removeAttr('disabled')
        $('#tabsContentOne').toggleClass('--hidden')
        $('#tabsContentTwo').removeClass('--hidden')
    })

    $('.header__nav-btn').on('click', function () {
        $('.header__nav-btn').toggleClass('--active')
        $('.header__nav').toggleClass('--active')
    })
});