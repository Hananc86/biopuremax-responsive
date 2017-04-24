


$('.dots-sliders li').bind('click', function(){

        index = $(this).index()+1;
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

        index === 1?$('.first-title').replaceWith('<h1 class="first-title">ESR™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Electrolytic Scale Reduction</h1>'):console.log(index);
        index === 2?$('.first-title').replaceWith('<h1 class="first-title">HOD™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hydro Optical De-Chlorination</h1>'):console.log(index);
        index === 3?$('.first-title').replaceWith('<h1 class="first-title">HWS™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hot Water Sanitization</h1>'):console.log(index);
        index === 4?$('.first-title').replaceWith('<h1 class="first-title">Biopuremax™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">No media | No regeneration | No flushing</h1>'):console.log(index);
        index === 5?$('.first-title').replaceWith('<h1 class="first-title">CBR™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Continues Bioburden Reduction</h1>'):console.log(index);

        console.log(index); 





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


           index === 1?$('.first-title').replaceWith('<h1 class="first-title">ESR™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Electrolytic Scale Reduction</h1>'):console.log(index);
           index === 2?$('.first-title').replaceWith('<h1 class="first-title">HOD™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hydro Optical De-Chlorination</h1>'):console.log(index);
           index === 3?$('.first-title').replaceWith('<h1 class="first-title">HWS™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Hot Water Sanitization</h1>'):console.log(index);
           index === 4?$('.first-title').replaceWith('<h1 class="first-title">Biopuremax™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">No media | No regeneration | No flushing</h1>'):console.log(index);
           index === 5?$('.first-title').replaceWith('<h1 class="first-title">CBR™</h1>') && $('.second-title').replaceWith('<h1 class="second-title">Continues Bioburden Reduction</h1>'):console.log(index);



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

    console.log('dhgdfhgdfhghg');
     } else {
     // window width is less than 500px
     console.log('fdhdfh');
      $('.slider').fadeIn(300);
     }}
      
      
      





        //   if ($(window).width() < 1024) {
        //      alert('Less than 960');
        //   }
        //   else {
        //      console.log($(window).width());
        //   }


        //   $('.slider').fadeOut(300);
        //   $("#slide_" + index).fadeIn(300);  