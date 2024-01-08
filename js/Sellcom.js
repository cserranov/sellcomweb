/**
* @author       Santiago Marcelino Flores <santaigo.marcelino@ingenia.com>
* @copyright    2018 Ingenia.
* @description  Namespace del sitio Sellcom que engloba el resto de clases, constantes
*               y variables globales
*/

/**
* @namespace Sellcom
* @public
*/

var Sellcom = Sellcom || {
  URL:{
    PRODUCTS:'http://desarrollo.ingenia.com/Sellcom_Marketing_Digital/Code/front_end/dist/dev/js/products.json',
    SERVICES:'http://desarrollo.ingenia.com/Sellcom_Marketing_Digital/Code/front_end/dist/dev/js/services.json'
  },
  TEMPLATES: {
    MODE: {
      APPEND: 'append'
    },
    TYPE: {
      SINGLE: 'single',
      CYCLE: 'cycle'
    }
  },
  TYPOGRAPHY:{
    /**
    * Tamaño mínimo del texto
    * @constant
    * @type {number}
    */
    MIN_SIZE: 14,
    /**
    * Tamaño máximo del texto
    * @constant
    * @type {number}
    */
    MAX_SIZE: 25
  },
  ANIMATIONS: {
    /**
    * Número de milisegundos para reproducir una animación
    * automáticamente
    * @constant
    * @type {number}
    */
    AUTOPLAY: 10000,
    /**
    * Número de milisegundos para ocultar y mostrar elementos
    * @constant
    * @type {number}
    */
    FADE: 6000,
    /**
    * Número de milisegundos para un ciclo de animación
    * @constant
    * @type {number}
    */
    REPEAT: 100,
    /**
    * Número de milisegundos para una animación
    * @constant
    * @type {number}
    */
    TIME: 600,
    /**
    * Número de milisegundos para el tiempo de una transición
    * @constant
    * @type {number}
    */
    TRANSITION: 1000,
    /**
    * Número de milisegundos para esperar antes de ejecutar
    * la siguiente ejecución
    * @constant
    * @type {number}
    */
    WAIT: 20
  },
  /**
	* Objecto con las constantes de puntos de referencia para los
	* media queries.
	* @constant
	* @type {object}
	*/
  BREAKPOINTS: {
    /**
    * Configuración para pantallas grandes
    * @constant
    * @type {object}
    */
    FULL: {
      /**
      * Nombre de la resolución que cubre toda la pantalla
      * @constant
      * @type {string}
      */
      NAME: 'full',
      /**
      * Número máximo de pixeles
      * @constant
      * @type {undefined}
      */
      VALUE: '100%'
    },
    /**
    * Configuración para las pantallas estándares
    * @constant
    * @type {object}
    */
    DESKTOP: {
      /**
      * Nombre de la resolución para las pantallas estándares
      * @constant
      * @type {string}
      */
      NAME: 'desktop',
      /**
      * Número máximo de pixeles para la vista en computadoras
      * @constant
      * @type {number}
      */
      VALUE: 1200
    },
    /**
    * Configuración para las tabletas en posición landscape
    * @constant
    * @type {object}
    */
    TABLET_LANDSCAPE: {
      /**
      * Nombre de la resolución que cubre las tabletas en posición landscape
      * @constant
      * @type {string}
      */
      NAME: 'tablet-landscape',
      /**
      * Número máximo de pixeles para vistas por ejemplo en ipad 1 y 2
      * @constant
      * @type {number}
      */
      VALUE: 1024
    },
    /**
    * Configuración para las tabletas en posición portrait
    * @constant
    * @type {object}
    */
    TABLET_PORTRAIT: {
      /**
      * Nombre de la resolución que cubre las tabletas en posición portrait
      * @constant
      * @type {string}
      */
      NAME: 'tablet-portrait',
      /**
      * Número máximo de pixeles para vistas por ejemplo en ipad mini
      * @constant
      * @type {number}
      */
      VALUE: 960
    },
    /**
    * Configuración genérica para tabletas y phablets
    * @constant
    * @type {object}
    */
    TABLET: {
      /**
      * Nombre de la resolución que cubre las tabletas y phablets
      * @constant
      * @type {string}
      */
      NAME: 'tablet',
      /**
      * Número máximo de pixeles para vistas por ejemplo en iPhone 6+
      * @constant
      * @type {number}
      */
      VALUE: 768
    },
    /**
    * Configuración genérica para teléfonos
    * @constant
    * @type {object}
    */
    MOBILE: {
      /**
      * Nombre de la resolución que cubre los teléfonos en forma general
      * @constant
      * @type {string}
      */
      NAME: 'mobile',
      /**
      * Número máximo de pixeles para vistas por ejemplo en Xperia Z5
      * @constant
      * @type {number}
      */
      VALUE: 560
    },
    /**
    * Configuración para teléfonos en modo landscape
    * @constant
    * @type {object}
    */
    MOBILE_LANDSCAPE: {
      /**
      * Nombre de la resolución que cubre los teléfonos en modo landscape
      * @constant
      * @type {string}
      */
      NAME: 'mobile-landscape',
      /**
      * Número máximo de pixeles para vistas por ejemplo en iPhone 5s
      * @constant
      * @type {number}
      */
      VALUE: 480
    },
    /**
    * Configuración para teléfonos en modo portrait
    * @constant
    * @type {object}
    */
    MOBILE_PORTRAIT: {
      /**
      * Configuración para teléfonos en modo portrait
      * @constant
      * @type {object}
      */
      NAME: 'mobile-portrait',
      /**
      * Número máximo de pixeles para vistas en el resto de dispositivos
      * móviles
      * @constant
      * @type {number}
      */
      VALUE: 320
    }
  },
  /**
	* Objecto con las constantes de los nombres de las clases que se aplican
	* para los efectos o animaciones.
	* @constant
	* @type {object}
	*/
  CLASSNAMES: {
    /**
    * Clase para indicar cuando un elemento está recibiendo el foco de atención
    * en la línea de tiempo
    * @constant
    * @type {string}
    */
    ACTIVE: 'active',
    /**
    * Clase para indicar cuando un elemento está posiblemente oculto, ejemplo
    * menu global
    * @constant
    * @type {string}
    */
    CLOSE: 'close',
    /**
    * Clase para indicar cuando un elemento está siendo animado.
    * @constant
    * @type {string}
    */
    CURRENT: 'current',
    MOVE: 'move',
    /**
    * Clase para indicar cuando un elemento es visible
    * @constant
    * @type {string}
    */
    OPEN: 'open',
    /**
     *
    * Clase para indicar el movimiento de una transición
    * @constant
    * @type {string}
    */
    UP: 'up'
  },
  DEBUG: false,
  /**
  * Configuración de los nombres de los dispositivos soportados
  * @constant
  * @type {object}
  */
  DEVICE: {
    /**
    * Identificacdor para los teléfonos con Android
    * @constant
    * @type {string}
    */
    ANDROID: 'Android',
    /**
    * Identificacdor para las computadoras
    * @constant
    * @type {string}
    */
    DESKTOP: 'Desktop',
    /**
    * Identificacdor para las tabletas iPad
    * @constant
    * @type {string}
    */
    IPAD: 'iPad',
    /**
    * Identificacdor para los teléfonos con iOS
    * @constant
    * @type {string}
    */
    IPHONE: 'iPhone',
    /**
    * Identificacdor para los dispositivos con iOS
    * @constant
    * @type {string}
    */
    IPOD: 'iPod touch',
    /**
    * Identificacdor para los teléfonos con Windows Phone
    * @constant
    * @type {string}
    */
    WINDOWS: 'Windows Phone'
  },
  EVENTS:{
    COMBO_SELECT: 'combo_select'
  },
  /**
  * Configuración de los nombres para simular el giroscópio
  * @constant
  * @type {object}
  */
  ORIENTATION: {
    /**
    * Identificacdor para la posición de paisaje
    * @constant
    * @type {string}
    */
    LANDSCAPE: 'landscape',
    /**
    * Identificacdor para la posición por default
    * @constant
    * @type {string}
    */
    PORTRAIT: 'portrait',
  },
  PROJECT_NAME: 'Sellcom'
}
