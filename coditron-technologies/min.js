$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav:true  ,
      navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      slideBy:1,
      items:1,
      margin:10,
      dots:false,
      autoplay:true,
      autoplaySpeed:700,
      items:1,
      animateIn:'fastIn',
      animateOut:'slide',
      slideTransition:'linear',
      loop:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:false,
        },
        992:{
            items:3,
        },
        1234:{
            items:3
        }



      }
    });
    $(".owl-carousel").on("mousewheel",'.owl-stage',function(e){
        if(e.deltaY>0){
            $(".owl-carousel").trigger('next.owl');
        }else{
            $(".owl-carousel").trigger('prev.owl');
        }
        e.preventDefault();
    })

});


$(document).ready(function(){
    $(".sidd").owlCarousel({
      nav:true  ,
      navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      slideBy:1,
      items:1,
      dots:true,
      margin:10,
      autoplay:true,
      autoplaySpeed:700,
      items:1,
      animateIn:'fastIn',
      animateOut:'fadeOut',
      loop:true,
      responsive:{
        0:{
            items:1,
            nav:true,
            dots:true,
        },
        768:{
            items:2,
            nav:false,
        },
        992:{
            items:3,
        }



      }
    });
    

});