$(document).ready(function () {
$(".slider").not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 3,
        slidesToScroll: 1
    });
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  centerMode: true,
  focusOnSelect: true
});