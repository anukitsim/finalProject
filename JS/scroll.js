document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  function isElementInViewport(el){
    if(typeof JQuery === "function" && el instanceof JQuery){
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
      && rect.bottom >= 0) 
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
        

  }

 var scroll = window.requestAnimationFrame || 

               function(callback){
                window.setTimeout(callback, 1000/60)
               };

 var elementToShow = document.querySelectorAll(".show-on-scroll");
 
 function loop(){
  elementToShow.forEach(function(element){
    if(isElementInViewport(element)){
      element.classList.add("is-visible");
    }else{
      element.classList.remove("is-visible");
    }
  });
  scroll(loop);
 }

 loop();
 document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  function isElementInViewport(el){
    if(typeof JQuery === "function" && el instanceof JQuery){
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
      && rect.bottom >= 0) 
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
        

  }

 var scroll = window.requestAnimationFrame || 

               function(callback){
                window.setTimeout(callback, 1000/60)
               };

 var elementToShow = document.querySelectorAll(".show-on-scroll");
 
 function loop(){
  elementToShow.forEach(function(element){
    if(isElementInViewport(element)){
      element.classList.add("is-visible");
    }else{
      element.classList.remove("is-visible");
    }
  });
  scroll(loop);
 }

 loop();

