window.addEventListener("load",function() {
       
  var nav = document.getElementById('nav');
  var navHomeY = nav.offsetTop;
  var isFixed = false;
  window.addEventListener("scroll", function(){

        var scrollTop = window.pageYOffset;
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed)
         {
            nav.style.position='fixed';
            nav.style.top=0;
            nav.style.width='90%';
            isFixed = true;
         }
        else if (!shouldBeFixed && isFixed)
         {
            
            nav.style.position='static';
            nav.style.width='100%';
            isFixed = false;
         }
    });
});