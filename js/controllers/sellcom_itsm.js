;(function(){
  var form = $('.section-form');
  /*
   * Controlador para inicializar las Tabs
   */
  var controllerTabs = function(){
    var tabs = $('.tabs li a');
    tabs.click(function(event){
      event.preventDefault();
      var elementSelect = $(this).parent().index(),
          tabInformation = $('.tab-container');
      tabs.parent().removeClass('active');
      $(this).parent().addClass('active');
      tabInformation.find('>div').removeClass('active');
      tabInformation.find("div:nth-child("+(elementSelect+1)+")").addClass('active');
    });
  };

  /*
   * Controlador para inicializar
   * el globo que desliza a la parte de formulario
   */
  var controllerCalltoAction = function(){
    var boton = $('.btn-dowloands');
    boton.click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: parseInt(form.offset().top) - 0
      }, 1000);
    });
  };

  controllerTabs();
  controllerCalltoAction();
})();
