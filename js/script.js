// slick slider
$(document).ready(function(){
  $('.section-showcase__list').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autospeed: 3000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});


// Lightbox
$(document).ready(function(){
  $('.section-showcase__item').click(function(){
    var currentSlide = $(this).attr('slideId');
    $('.lightbox__list').css('display', 'block');
    $('.lightbox-overlay').css('display', 'block');
    $('.lightbox__list').slick({
      infinite: true,
      arrows: true,
      slidesToshow: 1,
      slidesToScroll: 1,
      initialSlide: currentSlide - 1,
    });

  });
})

function closeLightBox() {
  $('.lightbox-overlay').css('display', 'none');
  $('.lightbox__list').css('display', 'none');
  $('.lightbox__list').slick('unslick');
}



// reveal on load page
$(document).ready(function(){
  window.addEventListener("scroll", reveal);

  reveal();
})

function reveal() {
  var reveals = $('.reveal');
  for (var i=0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible){
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function scrollIntro() {
  var introBottom = $('#section-amazing').position().top - 91;
  document.body.scrollTop = introBottom;
  document.documentElement.scrollTop = introBottom;
}



// function on scroll
$(document).ready(function(){
  window.onscroll = function(){
    showHeaderFixed();
    scrollFunction();
  }
})



// show fixed header 
function showHeaderFixed(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    $('.header-bottom').addClass('active');
  } else {
    $('.header-bottom').removeClass('active');
  }
}



// Scroll to Top
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $('.scrollTopBtn').css('display', 'block');
  } else {
      $('.scrollTopBtn').css('display', 'none');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Account Form
function openAccountForm(){
  $('.account__container').css('display','block');
  $('.account-overlay').css('display', 'block');
}

function closeAccount(){
  $('.overlay').css('display', 'none');
  $('.account__container').css('display','none');
}


// Mobile Menu
function openMobileMenu() {
  $('.mobile-header__nav').css('width', 260);
  $('.mobile-menu-overlay').css('display', 'block');
}

function closeMobileMenu() {
  $('.mobile-header__nav').css('width', 0);
  $('.mobile-menu-overlay').css('display', 'none');
  $('.mobile-header__item').removeClass('active');
}

// Mobile Sub Nav
$(document).ready(function(){
  $('.up-down__btn').click(function(){
    $(this).parents('.mobile-header__item').toggleClass('active');
    if($('.mobile-header__item').hasClass('active')){
      $(this).children('i').removeClass('icon-angle-down');
      $(this).children('i').addClass('icon-angle-up');
    } else {
      $(this).children('i').removeClass('icon-angle-up');
      $(this).children('i').addClass('icon-angle-down');
    }
  })
})