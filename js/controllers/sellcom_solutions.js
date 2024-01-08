;(function () {
  /*
   * Controlador para inicializar el carrusel
   * de Descubre a nuestros socios de negocio
   */
  var controllerCarousel = function(){
    $('.carousel-partners').slick({
      autoplay:true,
			slidesToShow: 1,
			arrows: true,
			dots: false,
			speed: 600
    });
  };
  controllerCarousel();
})();
