$('.toogle-menu').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('toogle-menu_active');
  $('.slide-menu').toggleClass('slide-menu_active');
  $('.menu li').toggleClass('animate-left');
});

$(window).scroll(function(){
  var h_scroll = $(this).scrollTop();
  if (h_scroll > 56) {
    $('header').addClass('header__fixed')
  } else {
    $('header').removeClass('header__fixed')
  }
})

//Плавный скролл
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  var target = $($.attr(this, 'href'));
  var targetScroll =  target.offset().top;
  $('html, body').animate({
      scrollTop: targetScroll
  }, 500);
});

jQuery(document).ready(function($){
  $('.header__logo').addClass('puk-fade');
  $('.header__menu').addClass('puk-fade');
  $('.header__right').addClass('puk-fade');
  $('.welcome__title').addClass('puk-fade');
  $('.welcome__order-price').addClass('puk-fade');
  $('.welcome__order-button').addClass('puk-fade');
  $('.header').addClass('puk-fade');
})

var swiperMainWelcome = function() {
  if ($(document).width() > 760) {
    var swiperWelcome = new Swiper('.swiper-welcome-container', {
      slidesPerView: 1,
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-welcome-pagination',
      },
      navigation: {
        nextEl: '.swiper-welcome-next',
        prevEl: '.swiper-welcome-prev',
      },
    })
  } else {
    var swiperWelcome = new Swiper('.swiper-welcome-container', {
      slidesPerView: 1,
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-welcome-pagination',
      },
      navigation: {
        nextEl: '.swiper-welcome-next',
        prevEl: '.swiper-welcome-prev',
      },
    })
  }
}

swiperMainWelcome();

var swiperMainVideos = function() {
  if ($(document).width() > 760) {
    var swiperVideos = new Swiper('.swiper-video-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-video-pagination',
      },
      navigation: {
        nextEl: '.swiper-video-next',
        prevEl: '.swiper-video-prev',
      },
    })
  } else {
    var swiperVideos = new Swiper('.swiper-video-container', {
      slidesPerView: 1,
      spaceBetween: 45,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-video-pagination',
      },
      navigation: {
        nextEl: '.swiper-video-next',
        prevEl: '.swiper-video-prev',
      },
    })
  }
}

swiperMainVideos();

var swiperMainPhotos = function() {
  if ($(document).width() > 760) {
    var swiperPhotos = new Swiper('.swiper-photo-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-photo-pagination',
      },
      navigation: {
        nextEl: '.swiper-photo-next',
        prevEl: '.swiper-photo-prev',
      },
    })
  } else {
    var swiperPhotos = new Swiper('.swiper-photo-container', {
      slidesPerView: 2,
      spaceBetween: 15,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-photo-pagination',
      },
      navigation: {
        nextEl: '.swiper-photo-next',
        prevEl: '.swiper-photo-prev',
      },
    })
  }
}

swiperMainPhotos();

//Callback Form Open
if ($('.callback').length > 0) {
  $(document).on('click', '.callback', function(){
    $('.callback__modal').addClass('callback__modal-open');
    $('body').addClass('modal-open');
    $('.modal__bg').addClass('modal__bg-open');
  });
}

//Callback Form Close
if ($('.callback__close').length > 0) {
  $(document).on('click', '.callback__close', function(){
    $('.callback__modal').removeClass('callback__modal-open');
    $('body').removeClass('modal-open');
    $('.modal__bg').removeClass('modal__bg-open');
  });
}