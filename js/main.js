$(document).ready(function(){

  AOS.init();

  //서브메뉴
  $("header .depth2").hide();

  $("header .gnb > li").hover(function(){
    $(this).find(".depth2").stop().slideToggle();
  });



  //모바일 메뉴창 열기/닫기
  $("header .ham").click(function(){
  $(".mobile-menu").animate({"left" : "0px"},500,"swing");
  });
  //모바일 메뉴창 닫기
  $(".mobile-menu .close").click(function(){
    $(".mobile-menu").animate({"left" : "-200%"},500,"swing");
  });

  //모바일 서브메뉴
  $(".mobile-menu .mb-depth2").hide();
  $(".mobile-menu .mb-gnb > li > a").click(function(e) {
    e.preventDefault(); // 링크 이동 방지

    const $depth2 = $(this).next(".mb-depth2");

    // 열려있는 다른 메뉴 닫기 (선택 사항)
    $(".mobile-menu .mb-depth2").not($depth2).slideUp();

    // 현재 클릭된 메뉴만 토글
    $depth2.slideToggle();
  });

  //이벤트 배너
  $(".event > ul > li").mouseenter(function(){
    $(this).find(".event-txt").animate({"left" : "0px"},500,"swing");
  });

  //제품상세페이지 new-menu
  $(".product-detail-wrap").hide();
  $(".product-detail").hide();

  $(".new-menu .new-swiper li:nth-of-type(1)").click(function(){
     $(".product-detail-wrap").show();
     $(".kaya").show();
  });

    $(".new-menu .new-swiper li:nth-of-type(2)").click(function(){
     $(".product-detail-wrap").show();
     $(".berry").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(3)").click(function(){
     $(".product-detail-wrap").show();
     $(".vanilla").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(4)").click(function(){
     $(".product-detail-wrap").show();
     $(".zero").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(5)").click(function(){
     $(".product-detail-wrap").show();
     $(".peanut").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(6)").click(function(){
     $(".product-detail-wrap").show();
     $(".green").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(7)").click(function(){
     $(".product-detail-wrap").show();
     $(".yogurt").show();
  });

  $(".new-menu .new-swiper li:nth-of-type(8)").click(function(){
     $(".product-detail-wrap").show();
     $(".choco").show();
  });

 //best-menu
    $(".best-menu .best-swiper li:nth-of-type(1)").click(function(){
     $(".product-detail-wrap").show();
     $(".milk").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(2)").click(function(){
     $(".product-detail-wrap").show();
     $(".vanilla").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(3)").click(function(){
     $(".product-detail-wrap").show();
     $(".earlgray").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(4)").click(function(){
     $(".product-detail-wrap").show();
     $(".choco-pudding").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(5)").click(function(){
     $(".product-detail-wrap").show();
     $(".mint").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(6)").click(function(){
     $(".product-detail-wrap").show();
     $(".zero-choco").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(7)").click(function(){
     $(".product-detail-wrap").show();
     $(".zero-green").show();
  });

  $(".best-menu .best-swiper li:nth-of-type(8)").click(function(){
     $(".product-detail-wrap").show();
     $(".zero-yogurt").show();
  });

  //beverage
    $(".signature  ul.signature-desktop li:nth-child(1)").click(function(){
     $(".product-detail-wrap").show();
     $(".greenlatte").show();
  });

   $(".signature  ul.signature-desktop li:nth-child(2)").click(function(){
     $(".product-detail-wrap").show();
     $(".creamlatte").show();
  });

   $(".signature  ul.signature-desktop li:nth-child(3)").click(function(){
     $(".product-detail-wrap").show();
     $(".watermelone").show();
  });

   $(".signature  ul.signature-desktop li:nth-child(4)").click(function(){
     $(".product-detail-wrap").show();
     $(".milkice").show();
  });

   $(".signature  ul.signature-desktop li:nth-child(5)").click(function(){
     $(".product-detail-wrap").show();
     $(".milkcloud").show();
  });

    $(".product-detail .close").click(function(){
     $(".product-detail-wrap").hide();
     $(".product-detail").hide();
  });

  //top버튼
  
    const topBtn = document.querySelector('.top');

    topBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  

    //스크롤고정
    $(window).on('scroll', function () {
  if ($(this).scrollTop() > 50) {
    $('header nav').addClass('fixed-nav');
  } else {
    $('header nav').removeClass('fixed-nav');
  }
});




 


 


 //메인배너 슬라이드 
  const main_swiper = new Swiper('.main-swiper', {

    autoplay: {
    delay: 1800, 
    disableOnInteraction: false,
  },
    speed: 2000, 
    loop: true,
    // slidesPerView: 1,

});

 //new-menu 슬라이드 
  const new_swiper = new Swiper('.new-swiper', {

    navigation: {
    nextEl: ".new-next", // 다음버튼
    prevEl: ".new-prev", // 이전버튼
  },
  
    speed: 1000, 
    loop: true,
    slidesPerView: 2.3, 
    spaceBetween: 34,
    breakpoints: { 
      765: {
        
        slidesPerView: 3.3,
        spaceBetween: 20,
      },

       1200: {
        
        slidesPerView: 4,
      },

      1400: {
        
        slidesPerView: 5,
      },
    },
});

 //best-menu 슬라이드 
  const best_swiper = new Swiper('.best-swiper', {

    navigation: {
    nextEl: ".best-next", // 다음버튼
    prevEl: ".best-prev", // 이전버튼
  },
  
    speed: 1000, 
    loop: true,
    slidesPerView: 2.3, 
    spaceBetween: 34,
    breakpoints: { 
      765: {
        
        slidesPerView: 3.3,
        spaceBetween: 20,
      },

       1200: {
        
        slidesPerView: 4,
      },

      1400: {
        
        slidesPerView: 5,
      },
    },
});

//online-shop 슬라이드
  const shop_swiper = new Swiper('.shop-swiper', {

    autoplay: {
      delay: 2500, 
      disableOnInteraction: false,
    },
    speed: 2000,
    speed: 1800, 
    loop: true,

    slidesPerView: 2, 
    centeredSlides: true,
    spaceBetween: 68,
    breakpoints: { 
      765: {
        slidesPerView: 3.6,
        spaceBetween: 39,
      },

       1200: {
        sslidesPerView: 4,
        spaceBetween: 39,
      },

      1400: {
        
        slidesPerView: 6,
        spaceBetween: 42,
      },
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, 
      dragSize: 464,
      draggable: true, 
     },
});

//instargram 슬라이드
const instar_swiper = new Swiper('.instar-swiper', {

  loop: true,

   autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  },
  speed: 5000, 

  slidesPerView: 2.4, 
  spaceBetween: 34,
  centeredSlides: true,
  breakpoints: { 
    865: {
      
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    1400: {
      
      slidesPerView: 5.5,
      spaceBetween: 28,
    },
  },
  
});





});//끝