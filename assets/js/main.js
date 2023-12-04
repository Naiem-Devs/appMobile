(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
  // ------------ Counter BEGIN ------------ 
  $(".counter__increment, .counter__decrement").click(function(e)
  {
          e.preventDefault()
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass('counter__increment'))
    {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
    {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });

// Mouse scroll 
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
  });
 
})(jQuery);
