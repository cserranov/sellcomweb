/**
* @author       Santiago Marcelino Flores<santiago.marcelino@ingenia.com>
* @copyright    2018 Ingenia.
* @description Controladores que se necesitan para cada página del sitio
* @lastmodifiedDate 11.04.2018 18:00
* @private
*/
;(function () {
  var partner = function() {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
          var banner = document.getElementById('partner-banner');
          var description = document.getElementById('partner-description');
          var title = document.getElementById('partner-title');
          banner.className = 'scale-in-center';
          description.className = 'fade-in';
          title.className = 'scale-in-bottom';
      }
    }
  }
  var premios2 = function() {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
          var banner = document.getElementById('prize-banner-2');
          var description = document.getElementById('prize-description-2');
          var title = document.getElementById('prize-title-2');
          banner.className = 'scale-in-center';
          description.className = 'fade-in';
          title.className = 'scale-in-bottom';
      }
    }
  }
  /*
   * Controlador del buscador
   * general del sitio
   */
  var constrollerGlobalSearch = function(){
    var btnSearch = document.getElementById('btnGlobalSearch'),
        txtSearch = document.getElementById('txtSearch'),
        classSearch = 'txt-search',
        id;
    btnSearch.onclick = function(){
      if (txtSearch.className === classSearch || txtSearch.className === Sellcom.CLASSNAMES.CLOSE) {
        txtSearch.className =  Sellcom.CLASSNAMES.OPEN;
        txtSearch.focus();
      }else {
        txtSearch.className = Sellcom.CLASSNAMES.CLOSE;
        id = setTimeout(function(){
          txtSearch.className = classSearch;
          clearTimeout();
        }, Sellcom.ANIMATIONS.TIME);
      }
    };
  };
  /*
   * Controlador  del menu en versiones
   * menores a tablet
   */
  var controllerGlobalMenu = function(){
    var btnMenu = document.getElementById('btnGlobalMenu'),
        menuMain = document.querySelector('.header-main nav'),
        bodyFixed = document.getElementsByTagName('body')[0],
        id;
    btnMenu.onclick = function(){
      if (menuMain.className === '' || menuMain.className === Sellcom.CLASSNAMES.CLOSE) {
        this.className = 'icon-close';
        bodyFixed.className = 'open-menu';
        menuMain.className = Sellcom.CLASSNAMES.OPEN;
      }else {
        this.className = 'icon-burguer';
        menuMain.className = Sellcom.CLASSNAMES.CLOSE;
        bodyFixed.className = 'close-menu';
        id = setTimeout(function(){
          bodyFixed.className = '';
          menuMain.className = '';
          clearTimeout();
        }, Sellcom.ANIMATIONS.TIME);
      }
    };
  };
  /*
   * Controlador para agregar la clase al _header
   * para que cambie de color al hover
   */
  var controllerHeaderMenu = function(){
    var menuMain = $('.menu-main >ul >li.children'),
      headerGlobal = $('header');
    menuMain.mouseover(function() {
      headerGlobal.addClass('active');
    });
    menuMain.mouseout(function() {
      headerGlobal.removeClass('active');
    });
  };

  /*
   * Controlador para agregar el hover en el footer
   * para que muestre sus correspondientes submenus
   */
  var controllerFooterMenu = function(){
    var menuMainFooter = $('.menu-footer >li >a >span')
        elementOptions = $('.submenu-footer.active').height(),
        paddingLegal = $('.section-legal');
    paddingLegal.css({"padding-top":(elementOptions + 80) + "px"});
    menuMainFooter.click(function(event){
      event.preventDefault();
      $('.submenu-footer').removeClass('active');
      $('.menu-footer >li >a').removeClass('active');
      var link = $(this).parents('a');
      link.addClass('active');
      $(this).parents('li').next('.submenu-footer').addClass('active');
      var heightElement = $(this).parents('a').next('.submenu-footer').height();
      paddingLegal.css({"padding-top":(heightElement + 80) + "px"});
    });
  };
  /*
   * Controlador para menu nav mobile
   */
  var controllerMenuMobile = function(){
    var item = document.querySelectorAll('.menu-main >ul >li >a');
    var btnMenu = document.querySelectorAll('#btnGlobalMenu')[0];
    var btnClose = document.querySelectorAll('#btnClose')[0];
    var blkHeader = document.getElementsByTagName('header')[0];

    btnMenu.onclick = function(){
      //blkHeader.classList.add('hide');
      if (!this.parentNode.classList.contains('active')) {
        this.parentNode.classList.add('active');
        document.body.style.overflow = "hidden";
      } else {
        this.parentNode.classList.remove('active');
        document.body.style.overflow = "scroll";
      }
    };

    btnClose.onclick = function(){
        blkHeader.classList.remove('hide');
      this.parentNode.classList.remove('active');
      $('body').removeAttr('style');
    };
  };
  var controllerDetectarChrome = function(){
    if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
      document.getElementById('secondVideo').play();
    }
  };

  var openWhitepageForm = function(){
    var btn = $ ('.whitepage-btn'),
        modal = $ ('#whitepage-form');
    btn.on('click', function(){
      modal.addClass('quitar');
    })
  };
  var openCasousoForm = function(){
    var btn = $ ('.casouso-btn'),
        modal = $ ('#casouso-form');
    btn.on('click', function(){
      modal.addClass('quitar');
    })
  };
  var closeWhitepageForm = function() {
    var btn = $ ('#whitepage-close'),
        modal = $('#whitepage-form');
    btn.on('click', function(){
      modal.removeClass('quitar');
    })
  };
  var closeCasousoForm = function() {
    var btn = $ ('#casouso-close'),
        modal = $('#casouso-form');
    btn.on('click', function(){
      modal.removeClass('quitar');
    })
  };
  var controllerMenu = function(){
    var menu = $('.menu-main'),
        links = menu.find('.withSubmenu'),
        currentSub;

    links.on('mouseover', function(){
      var that = $(this);
      $('header').addClass('active');
      currentSub = that.find('.submenu');
      // if(!currentSub.is(':visible')){
      //   currentSub.slideDown(100, function(){
      //     that.addClass('open');
      //   });
      // }
    });

    links.on('mouseout', function(){
      var that = $(this);
      $('header').removeClass('active');
      // currentSub = that.find('.submenu');
      // if(currentSub.is(':visible')){
      //   currentSub.slideUp('fast');
      // }
    });
  };

  $(window).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop() > 200);
  });

  partner();
  premios2();
  constrollerGlobalSearch();
  controllerHeaderMenu();
  //controllerFooterMenu();
  controllerMenuMobile();
  //controllerGlobalMenu();
  if ($('#secondVideo').length) {
    controllerDetectarChrome();
  }
  controllerMenu();
  openWhitepageForm();
  openCasousoForm();
  closeWhitepageForm();
  closeCasousoForm();


})();
