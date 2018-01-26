/**
 * @author Rounak Saha (www.rongmz.in)
 * @link https://github.com/rongmz/jquery-indian-keyboard
 * @version 0.0.1
 * 
 * This mapper file provides support for devnagari language for jquery-indian-keyboard plugin.
 * 
 */
(function ($) {

  function checkAttach() {
    // checking if indianKeyboard plugin is loaded.
    if ($.fn.indianKeyboard) {
      // extend the template
      var ikDevnagari = $.extend($.fn.indianKeyboard.keyboradTemplate, {

      });

      // append to list
      $.fn.indianKeyboard.keyboards.push(ikDevnagari);
    }
    else setTimeout(checkAttach, 1000);
  }
  checkAttach();

}(jQuery));