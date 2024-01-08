;(function(){
  /*
   * Controlador para inicializar el carrusel
   * de Casos de éxito
   */
  var controllerSlider = function(){
    $('.carousel-success').slick({
      autoplay:true,
      slidesToShow: 2,
      arrows: false,
      dots: true,
      speed: 600,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 561,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
	};

  /*
   * Controlador para el funcionamiento
   * de las tabs de Productos y Servicios
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
   * Controlador de carga de
   * Productos y Servicios con un servicio de prueba
   */
  var messageProduct = $('#msjProduct').hide();
  var messageService = $('#msjService').hide();
  var ajaxCallServices=function(){
    var url= Sellcom.URL.SERVICES; //la url se encuentra en el archivo "Sellcom.js"
    $.ajax({
      url: url,
      type: 'GET',
      data:url.data,
      dataType: 'json',
      success: function (response) {
        if(response.success === true) {
          var config = {
            elements: response.data.list,
            default: '',
            keys: ['nid', 'image','title','subtitle', 'desc', 'link']
          };

          var itemsList=response.data.list;
          var itemsPage = currentPage + 2;
          var recipesRow = '';

          if (itemsList.length > 0) {
            for (var i = 0; i < itemsList.length; i++) {
              recipesRow =
              '<li class="col-4 services">'+
                '<div class="block">'+
                  '<div class="image">'+
                    '<a href="'+response.data.list[i].link+'">'+
                      '<img src="'+response.data.list[i].image+'" alt="'+response.data.list[i].title+'">'+
                    '</a>'+
                  '</div>'+
                  '<div class="description">'+
                    '<h3>'+
                      '<a href="'+response.data.list[i].link+'">'+response.data.list[i].title+'</a>'+
                    '</h3>'+
                    '<b>'+response.data.list[i].subtitle+'</b>'+
                    '<p>'+response.data.list[i].desc+'</p>'+
                    '<a class="btn-more" href="'+response.data.list[i].link+'">Conoce más</a>'+
                  '</div>'+
                '</div>'+
              '</li>';
              append( recipesRow, "ul.services-list" );
            }
            $(".services-list li").slice(0, 6).show();
          } else {
            messageService.show();
          }
        }
      }
    });
  };

  var currentPage = 0;
  var lista =[];
  var ajaxCallProducts=function(){
    var url= Sellcom.URL.PRODUCTS;//la url se encuentra en el archivo "Sellcom.js"
    var template = document.getElementById('itemList'),
        list = document.querySelector('.products-list');
    $.ajax({
      url: url,
      type: 'GET',
      data:url.data,
      dataType: 'json',
      success: function (response) {
        if(response.success === true) {
          var config = {
            elements: response.data.list,
            default: '',
            keys: ['nid', 'image','title','subtitle', 'desc', 'link']
          };

          var itemsList=response.data.list;
          var itemsPage = currentPage + 2;
          var recipesRow = '';
          if (itemsList.length > 0) {
            for (var i = 0; i < itemsList.length; i++) {
              recipesRow =
              '<li class="col-4">'+
                '<div class="block">'+
                  '<div class="image">'+
                    '<a href="'+response.data.list[i].link+'">'+
                      '<img src="'+response.data.list[i].image+'" alt="'+response.data.list[i].title+'">'+
                    '</a>'+
                  '</div>'+
                  '<div class="description">'+
                    '<h3>'+
                      '<a href="'+response.data.list[i].link+'">'+response.data.list[i].title+'</a>'+
                    '</h3>'+
                    '<p>'+response.data.list[i].desc+'</p>'+
                    '<a class="btn-more" href="'+response.data.list[i].link+'">Conoce más</a>'+
                  '</div>'+
                '</div>'+
              '</li>';
              append( recipesRow, "ul.products-list" );
            }
            $(".products-list li").slice(0, 6).show();
          } else {
            messageProduct.show();
          }
        }
      }
    });
  };
  function append (elString, parent ) {
    var div = document.createElement( "div" );
    div.innerHTML = elString;
    document.querySelector( parent || "body" ).appendChild( div.firstChild );
  }

  /*
   * Controlador de cargar más
   * Productos y/o Servicios
   */
  var controllerLoadmore = function(){
    var btnProducts = $('.btn-more-products');
		btnProducts.click(function(event){
			event.preventDefault();
      $(".products-list li:hidden").slice(0, 6).slideDown();
      if ($(".products-list li:hidden").length == 0) {
          $(".btn-more-products").fadeOut('slow');
      }
    });
    var btnServices = $('.btn-more-services');
		btnServices.click(function(event){
			event.preventDefault();
      $(".services-list li:hidden").slice(0, 6).slideDown();
      if ($(".services-list li:hidden").length == 0) {
          $(".btn-more-services").fadeOut('slow');
      }
		});
  };
  ajaxCallServices();
  ajaxCallProducts();
  controllerLoadmore();
  controllerSlider();
  controllerTabs();
})();
