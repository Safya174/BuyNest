
$('#Home').click(function(e){
 e.preventDefault();
 $('body').css('overflow', 'hidden');
 $('body').animate({opacity:0, top: '-20px'},{
    duration:400,
    step: function(now,fx){
      if(fx.prop == 'top'){
         $('body').css('transform',`translateY(${now}px)`)
      }
    },
    complete: function(){
      window.location.href = "./index.html";
    }
 })

})
$('#About').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step: function(now,fx){
      if(fx.prop == 'top'){
         $('body').css('transform',`translateY(${now}px)`)
      }
  },
    complete: function(){
      window.location.href = './About.html';
    }
  })
})
$('#Contact').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }
    },
    complete: function(e){
      window.location.href = "./Contact Us.html"
    }
  })
})
$('#Blog').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }

    },
    complete: function(e){
      window.location.href = "./Blog.html" 
    }
  })
})
$('#Blog-Details').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }

    },
    complete: function(e){
      window.location.href = "./Blog-detelis.html" 
    }
  })
})


