/*
 * Controladores que se necesitan para la funcionalidad de globo fixed
 * y mostrar formulario de descarga
 */
;(function(){
  var globe = $('.globe');
  var form = $('.section-form');

  var controllerGlobe = function(){
    var btnDownload = document.getElementById('btnDownload');
    btnDownload.onclick = function(event){
      event.preventDefault();
      globe.removeClass("close");
      $('html, body').animate({
        scrollTop: parseInt(form.offset().top) - 0
      }, 1000);
		};
  };
  var controllerCloseGlobe = function () {
    var btnClose = document.getElementById('btnClose');
    btnClose.onclick = function (event) {
      event.preventDefault();
			globe.addClass("close");
		};
  }
  var controllerDownload = function(){
    var btnShow= document.getElementById('btnShowForm');
    btnShow.onclick = function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: parseInt(form.offset().top) - 0
      }, 1000);
    }
  }
  controllerCloseGlobe();
  controllerGlobe();
  controllerDownload();

})();
