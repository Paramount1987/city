$(document).ready(function(){

  $('.slider').bxSlider({
    slideWidth: 550,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 0,
    pager: false
  });

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.80938328, 37.59919250],
        zoom: 14,
        controls: [ ]
    });
});


 $('.order-call h3').on('click', 'span', function(e){
        $('.order-call h3').find('.active').removeClass("active");
        $(this).addClass('active');

        if($(this).find('b').hasClass('tab-to-1')){
            $('.tab-1').addClass('active');
            $('.tab-2').removeClass('active');
            $('.order-call').css({'background': 'url(i/discount.jpg)', 'background-attachment': 'fixed','background-size': 'cover'});
            //$('.order-call').parallax({imageSrc: 'i/discount-2.jpg'});

        }else{
            $('.tab-2').addClass('active');
            $('.tab-1').removeClass('active');
            $('.order-call').css({'background': 'url(i/discount-2.jpg)', 'background-attachment': 'fixed','background-size': 'cover'});

            
        }

 });


});