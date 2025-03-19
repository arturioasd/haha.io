$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    asNavFor: '.slider-nav',
    
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,

    focusOnSelect: true,
    arrows: false,


  });

  // var listSliderItem = $(".slider-item").parent()
  // for(var i=0; i< listSliderItem.length;i++ ){
  //   listSliderItem[i].addClass('ar')
  // }
  $(".slider-item").parent().addClass('slider-item-parent')
  // $(".slick-track").first().css({
  //   'background-color': 'white',
  // 'border-top': '0px'});

  var sliderList = $('.slider-nav').find('.slick-list')
  var slickSlide = $('.slider-nav').find('.slick-slide')

  slickSlide.css({
    'height':sliderList.height() + 'px',
    'border-right': '5px solid #950740',
 }) 


  // $(".slick-slide").css({
  //   'height': '100px'
  // })