(function(){
/**
   * Listeners para las herrramientas de control del tamaño de los textos
   * y la funcionalidad de impresión.
   * @private
   */
  var controllerTools = function(){
    'use strict';
    var fontBig = document.getElementById('fontBig'),
        fontSmall = document.getElementById('fontSmall'),
        paragraphs = document.getElementsByTagName('p'),
        printer = document.getElementById('printer'),
        big, small;
    //-Listener
    fontBig.onclick = function(event){
      event.preventDefault();
      for(var i = 0; i < paragraphs.length; i++) {
        if(paragraphs[i].style.fontSize) {
          big = parseInt(paragraphs[i].style.fontSize.replace("px",""));
        } else {
          big = 22;
        }
        if(big != Sellcom.TYPOGRAPHY.MAX_SIZE) {
          big += 1;
        }
        paragraphs[i].style.fontSize = big+"px";
        paragraphs[i].style.lineHeight = big + "px";
      }
    };
    //-Listener
    fontSmall.onclick = function(event){
      event.preventDefault();
      for(var i = 0; i < paragraphs.length; i++) {
        if(paragraphs[i].style.fontSize) {
          small = parseInt(paragraphs[i].style.fontSize.replace("px",""));
        } else {
          small = 18;
        }
        if(small != Sellcom.TYPOGRAPHY.MIN_SIZE) {
          small -= 1;
        }
        paragraphs[i].style.fontSize = small+"px";
        paragraphs[i].style.lineHeight = small + "px";
      }
    };

    printer.onclick = function(event){
      event.preventDefault();
      window.print();
    };
  };
  controllerTools();

})();