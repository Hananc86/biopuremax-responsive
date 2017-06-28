

$('.dots-sliders li').bind('click', function(){
        index = $(this).index()+1;
        $('.dots-sliders li').removeClass("slider-active");
        $("#slide_" + index).addClass("slider-active");

        $('.slider').removeClass("border-top-slider");
        $(".slider" + index).addClass("border-top-slider"); 


        var classes  =  $('.sec1 div:first-child').attr('class').split(' ');
        for(i=0; i<classes.length; i++){
          $('.sec1 div:first-child').removeClass(classes[i]);
          console.log(classes[i]);
        };
        $('.sec1 div:first-child').addClass("background-sec"+index);


       
        index === 1?$('.first-title').replaceWith('<h1 class="first-title">ESR&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Electrolytic Scale Reduction</h1>'):console.log(index);
        index === 2?$('.first-title').replaceWith('<h1 class="first-title">HOD&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hydro Optical De-Chlorination</h1>'):console.log(index);
        index === 3?$('.first-title').replaceWith('<h1 class="first-title">HWS&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hot Water Sanitization</h1>'):console.log(index);
        index === 4?$('.first-title').replaceWith('<h1 class="first-title">Biopuremax&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">No media | No regeneration | No flushing</h1>'):console.log(index);
        index === 5?$('.first-title').replaceWith('<h1 class="first-title">CBR&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Continues Bioburden Reduction</h1>'):console.log(index);

        
    var mq = window.matchMedia( "(max-width: 1024px)" );
      // media query event handler
      if (matchMedia) {
       var mq = window.matchMedia( "(max-width: 1024px)" );
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      
   


   // media query change
   function WidthChange(mq) {
   if (mq.matches) {
 
    console.log(index,'ertertertert');
    $('.slider').fadeOut(0.10);
    $('.slider'+index).fadeIn(300);
    

     } else {
     
     }}

});


$('.sliders div').bind('click', function(){

        var index = $(this).index()+1;
        $('.dots-sliders li').removeClass("slider-active");
        $("#slide_" + index).addClass("slider-active");

        $('.slider').removeClass("border-top-slider");
        $(".slider" + index).addClass("border-top-slider"); 

        $('.background-section').removeClass("background-sec-main");
        $('.background-section').removeClass("background-sec1");
        $('.background-section').removeClass("background-sec2");
        $('.background-section').removeClass("background-sec3");
        $('.background-section').removeClass("background-sec4");
        $('.background-section').removeClass("background-sec5");
        $('.background-section').addClass("background-sec"+index); 


           index === 1?$('.first-title').replaceWith('<h1 class="first-title">ESR&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Electrolytic Scale Reduction</h1>'):console.log(index);
           index === 2?$('.first-title').replaceWith('<h1 class="first-title">HOD&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hydro Optical De-Chlorination</h1>'):console.log(index);
           index === 3?$('.first-title').replaceWith('<h1 class="first-title">HWS&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hot Water Sanitization</h1>'):console.log(index);
           index === 4?$('.first-title').replaceWith('<h1 class="first-title">Biopuremax&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">No media | No regeneration | No flushing</h1>'):console.log(index);
           index === 5?$('.first-title').replaceWith('<h1 class="first-title">CBR&trade;</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Continues Bioburden Reduction</h1>'):console.log(index);



            console.log(index); 


});






      var mq = window.matchMedia( "(max-width: 1024px)" );
      // media query event handler
      if (matchMedia) {
       var mq = window.matchMedia( "(max-width: 1024px)" );
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      

   // media query change
   function WidthChange(mq) {
   if (mq.matches) {
    var index = $('.dots-sliders .slider-active').index() +1;   
    $('.slider').fadeOut(0.10);
    $('.slider'+index).fadeIn(300);

    
     } else {
     // window width is less than 500px
     
      $('.slider').fadeIn(300);
     }}
      
      
    
//Smooth Scroling


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}





















