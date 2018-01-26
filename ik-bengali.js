/**
 * @author Rounak Saha (www.rongmz.in)
 * @link https://github.com/rongmz/jquery-indian-keyboard
 * @version 0.0.1
 * 
 * This mapper file provides support for bengali language for jquery-indian-keyboard plugin.
 * 
 */
(function ($) {

  function checkAttach() {
    // checking if indianKeyboard plugin is loaded.
    if ($.fn.indianKeyboard) {
      // extend the template
      var ikBengali = $.extend($.fn.indianKeyboard.keyboradTemplate, {
        name: 'Bengali',
        shortName: 'BEN',
        keyMaps: {
          'a': '\u0985'
        },     
        shiftKeyMaps: {}, // keymaps when shift is pressed
        ctrlKeyMaps: {}   // keymaps when CTRL is pressed 
      });

      // append to list
      $.fn.indianKeyboard.keyboards.push(ikBengali);
    }
    else setTimeout(checkAttach, 1000);
  }
  checkAttach();

}(jQuery));