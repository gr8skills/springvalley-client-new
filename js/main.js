$(document).ready(function(){
  $('.hero-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    navText : ["<i class='fa fa-long-arrow-alt-left'></i>","<i class='fa fa-long-arrow-alt-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  $('.we-inspire').owlCarousel({
    loop:true,
    autoplay: true,
    margin:5,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    center: true,
    nav:true,
    items: 1,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    navText : ["<i class='fa fa-long-arrow-alt-left'></i>","<i class='fa fa-long-arrow-alt-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2,
      },
      767:{
        items:2,
      },
      992:{
          items:2,
      },
      1200:{
          items:3,
      },
      1500:{
          items:4
      }
    }
  });

});
$(document).ready(function(){

  $('.owl-testimonial').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoplayTimeout: 6000,
    // smartSpeed: 800,
    navText : ["<i class='fa fa-long-arrow-alt-left'></i>","<i class='fa fa-long-arrow-alt-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  //   responsive:{
  //     0:{
  //         items:1,
  //         dots:false,
  //         nav:false,
  //     },
  //     767:{
  //         items:1,
  //         dots:false,
  //         nav:false,
  //     },
  //     992:{
  //         items:1,
  //         nav:false
  //     },
  //     1200:{
  //         items:1,
  //         nav:false
  //     },
  //     1500:{
  //         items:1
  //     }
  // }
  });
});