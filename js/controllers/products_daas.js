;(function(){
  /*
   * Controlador para el funcionamiento
   * de las anclas
   */
  var controllerAnchors= function(){
    var menu = $('#submenu li'),
        menuActive = menu.find('a'),
        user_agent = navigator.userAgent.toLowerCase();
        ios_devices = user_agent.match(/(iphone|ipod|ipad)/)  ? "touchstart" : "click";
    menuActive.on( ios_devices ,function(event){
      event.preventDefault();

    	var strAncla=$(this).attr('href'); //id del ancla
  			$('body,html').stop(true,true).animate({
  				scrollTop: $(strAncla).offset().top -150
  			},1000);
    });
  };
  controllerAnchors();
})();
