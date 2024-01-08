/**
* @author       Santiago Marcelino Flores<santiago.marcelino@ingenia.com>
* @copyright    2018 Ingenia.
* @description Controladores que se necesitan para cada página del sitio
* @lastmodifiedDate 13.04.2018 10:00
* @private
*/
;(function () {
  /*
   * Controlador para inicializar el carrusel
   * de casos de éxito
   */
  var controllerCarousel = function(){
    $('.carousel-success').slick({
      infinite: true,
      slidesToShow: 1,
    });
  };
  /*
   * Controllador para ir a la siguiente seccion
   * despues del video.
   */
  var controllerGoSection = function(){
    var btnGo = document.getElementById('btnGo');
    btnGo.onclick = function () {
			$('html, body').animate({
				scrollTop: parseInt($(".services-section" ).offset().top) - 0
			}, 1000);
		};
  };




  /*
   * Controllador para ir a la animación en slider
   */
  var controllersMyCarouselAnimation = function(){
    var carrusel = $('#animation-slider'),
        item = carrusel.find('.animation-item'),
        firstItem = carrusel.find('.animation-item:first-child');
    setTimeout(function(){
      firstItem.addClass('actived');
      //nextSlide(carrusel);

    }, 300);
  }

  var nextSlide = function(){
    var carrusel = $('#animation-slider');
    var carSlide = carrusel.find('.animation-item');
    var active = carrusel.find('.actived');
    var nextS;
    nextS = active.next();
    if(!nextS.length){
      carSlide.show();
      nextS = carrusel.find('.animation-item:first-child');
    }
    nextS.addClass('actived');
    active.fadeOut('slow', function(){
      if(active.is(':last-child')){
        setTimeout(function(){
          carrusel.find('.animation-item:last-child').show();
        }, 2000);
      }
      active.removeClass('actived');
    });
  };
  controllerCarousel();
  //controllerGoSection();
  controllersMyCarouselAnimation();
  var timeSlider = setInterval(function(){
    nextSlide();
  },11000);
})();



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

