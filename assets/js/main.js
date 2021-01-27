$('.video-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  prevArrow: $('.video-slider__arrow--left'),
  nextArrow: $('.video-slider__arrow--right'),
  dots: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
