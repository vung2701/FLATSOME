$(document).ready(function(){
  $('.section-showcase__list').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

// show fixed header 
$(document).ready(function(){
  window.onscroll = function(){
    showHeaderFixed();
  }
})

function showHeaderFixed(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    $('.header-bottom').addClass('active');
  } else {
    $('.header-bottom').removeClass('active');
  }
}