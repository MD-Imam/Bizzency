// --------------------------------
//        stickey/fixed navbar part
//  -------------------------------
$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  
  if(scrollamount > 400){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

    



  if(scrollamount > 500){
    $(".back-to-top").fadeIn();
  }else{
    $(".back-to-top").fadeOut();
  }
})


$(".back-to-top").click(function(){
$("html,body").animate({
  scrollTop:0
},3000)
})

// --------------------------------
//        stickey/fixed navbar part
//  -------------------------------
// --------------------------------
//        header-top 2nd part
//  -------------------------------
$(".find").click(function(){
    $(".beta").slideDown();
})
$(".cross").click(function(){
    $(".beta").slideUp();
})
$(".ber").click(function(){
    $(".nav-item").fadeToggle();
})
// --------------------------------
//        header-top 2nd part
//  -------------------------------
// --------------------------------
//        our-skills part
//  -------------------------------
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller({
    barColor: '#fc6'
});
$('#bar4').barfiller({
    barColor: '#900',
    duration: 3000
});
// --------------------------------
//        our-skills part
//  -------------------------------
// --------------------------------
//        venobox part
//  -------------------------------
$('.venobox').venobox(); 
// --------------------------------
//        venobox part
//  -------------------------------
// --------------------------------
//        services part
//  -------------------------------

$('.t').slick({
    dots:false,
    arrows:false,
    infinite:true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





// --------------------------------
//        services part
//  -------------------------------
// --------------------------------
//        pricing part
//  -------------------------------
$('.v').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// --------------------------------
//        pricing part
//  -------------------------------
// --------------------------------
//        team part
//  -------------------------------
$('.w').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:0,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// --------------------------------
//        team part
//  -------------------------------
// --------------------------------
//        protfolio part
//  -------------------------------
$('.x').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:0,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// --------------------------------
//        protfolio part
//  -------------------------------
// --------------------------------
//         testimonial part
//  -------------------------------
$('.darker').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:0,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// --------------------------------
//         testimonial part
//  -------------------------------
// --------------------------------
//          blog part
//  -------------------------------

$('.zee').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:0,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// --------------------------------
//          blog part
//  -------------------------------
