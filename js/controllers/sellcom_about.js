;(function(){
	/*
   * Controlador para inicializar el carrusel
   * de Ellos confían en nosotros
   */
	var controllerSlider = function(){
		$('.carousel-customer').slick({
			autoplay:true,
			slidesToShow: 1,
			arrows: false,
			dots: true,
			speed: 600
		});
	};

	/*
	 * Controlador para animar un número conforme esté dentro de la vista del usuario
	 * Parámetros: contenedor (usualmente como id), duración, número inicial, número final
	 */
	var controllerAnimateNumber = function(container, duration, startNumber, finishNumber) {
		var active = 0;
		$(window).scroll(function(){
			$(container).each(function(){
				if (active !== 1){
					if(isScrolledIntoView($(this))) {
						active = 1;
						numberAnimation(container, duration, startNumber, finishNumber);
					}
				}
			});
		});
	}

	/*
	 * Función para animación de un número
	 */
	var numberAnimation = function(container, duration, startNumber, finishNumber) {
		$(container).each(function () {
			var $this = $(this);
			jQuery({ Counter: startNumber }).animate({ Counter: finishNumber }, {
				duration: duration,
				easing: 'swing',
				step: function () {
					$this.text(Math.ceil(this.Counter));
				},
				complete: function(){
					this.Counter = finishNumber;
					$this.text(commafy(Math.ceil(this.Counter)));
				}
			});
		});
	}

	/*
	 * Detección del div en el rango de visión del usuario
	 */
	function isScrolledIntoView(elem){
		var $elem = $(elem);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();

		console.log(elemBottom);

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	/*
	 * Agregar coma cada 3 números
	 */
	function commafy( num ) {
		var str = num.toString().split('.');
		if (str[0].length >= 3) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 3) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		return str.join('.');
	}
	var numbercollaborators = $('#number-collaborators').text();
	var numberawards = $('#number-awards').text();
	var numbersuccess = $('#number-success').text();


	controllerSlider();
	controllerAnimateNumber('#number-collaborators', 1000, 0, numbercollaborators);
	controllerAnimateNumber('#number-awards', 1000, 0, numberawards);
	controllerAnimateNumber('#number-success', 1000, 0, numbersuccess);
})();
