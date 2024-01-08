;(function(){
  var form = $('.section-form');
  /*
   * Controlador para inicializar el carrusel
   * de los títulos de Conoce a detalle las herramientas que te ofrece DaaS
   */
  var controllerTabs = function(){
    $(".slider-tabs li").click(function() {
  		$(".slider-tabs li").removeClass("active");
  		$(this).addClass("active");
  		$(".tab").hide();
  		var activeTab = $(this).find("a").attr("href");
  		$(activeTab).fadeIn();
  		return false;
  	});
  };

  /*
   * Controlador para inicializar el carrusel
   * de Conoce a detalle las herramientas que te ofrece DaaS
   */
  var controllerSlider = function(){
    $('.slider-tabs').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
			arrows: true,
      infinite: false,
			dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
    });
  };

  /*
   * Controlador para inicializar
   * el menu nav mobile
   */
  var controllerMenuMobile = function(){
    var item = document.querySelectorAll('.menu >ul >li >a');
    var btnMenu = document.querySelectorAll('#btnGlobalMenu')[0];
    var btnClose = document.querySelectorAll('#btnCloseM')[0];
    btnMenu.onclick = function(){
      if (!this.parentNode.classList.contains('active')) {
        this.parentNode.classList.add('active');
        document.body.style.overflow = "hidden";
      } else {
        this.parentNode.classList.remove('active');
        document.body.style.overflow = "scroll";
      }
    };

    btnClose.onclick = function(){
      this.parentNode.classList.remove('active');
      document.body.removeAttribute('style');
    };
    for (var i = 0; i < item.length; i++) {
      item[i].onclick = function(e){
        e.preventDefault();
        if (!this.classList.contains('active')) {
          this.classList.add('active');
        } else {
          for (var j = 0; j < item.length; j++) {
            item[j].classList.remove('active');
          }
        }
      };
    }

  };
  /*
   * Controlador para el funcionamiento
   * de las anclas
   */
  var controllerAnchors = function(){
    var item = document.querySelector('.menu');
    var menu = $('#menu li'),
        menuActive = menu.find('a'),
        user_agent = navigator.userAgent.toLowerCase();
        ios_devices = user_agent.match(/(iphone|ipod|ipad)/)  ? "touchstart" : "click";
    menuActive.on( ios_devices ,function(event){
      event.preventDefault();
      item.classList.remove('active');
    	var strAncla=$(this).attr('href'); //id del ancla
  			$('body,html').stop(true,true).animate({
  				scrollTop: $(strAncla).offset().top
  			},1000);
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

  controllerSlider();
  controllerTabs();
  controllerMenuMobile();
  controllerAnchors();
  controllerCalltoAction();
})();
