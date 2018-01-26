/**
 * @author Rounak Saha (www.rongmz.in)
 * @link https://github.com/rongmz/jquery-indian-keyboard
 * @version 0.0.1
 * 
 * This jQuery plugin provides support for input methods using indian unicode language charecters.
 * This initiates a on-screen keyboard providing both keyborad input and onscreen input based on 
 * mapped language charecters.
 * 
 */
(function ($) {

  /**
   * Method for attaching the plugin to any input field.
   * @argument options [object]
   * @returns element jquery instance for chaining.
   */
  $.fn.indianKeyboard = function (options) {

    // extending the defaults
    var settings = $.extend({
      mode: 'float'       // modes: 'float' | 'overlay'
      , size: 'full'      // sizes: 'full' | 'medium' | 'small'
      , keyboardIndex: 0  // to be used internally
    }, options);

    // set settings to element data
    $(this).data(settings);

     // unbind all key events
    $(this).unbind("keypress keydown keyup focus");

    // bind all key events to input field
    $(this).keyup($.fn.indianKeyboard.keyup);
    $(this).keydown($.fn.indianKeyboard.keydown);
    $(this).keypress($.fn.indianKeyboard.keypress);
    $(this).focus($.fn.indianKeyboard.focus);

    return this;
  };

  /**
   * Add a default blank array of mappers. It will be filled by mappers after loading.
   */
  $.fn.indianKeyboard.keyboards = [];

  /**
   * A template for extending for custom mappers
   */
  $.fn.indianKeyboard.keyboradTemplate = {
    name: 'default',  // the name of the mapper
    shortName: '',    // the short name to be shown
    keyMaps: {},      // the keymap to be used on normal mode
    shiftKeyMaps: {}, // keymaps when shift is pressed
    ctrlKeyMaps: {}   // keymaps when CTRL is pressed  
  }


  /**
   * Method to be called internally during [KEYUP]
   * @argument ev keyup event
   */
  $.fn.indianKeyboard.keyup = function(ev) {
    console.log('keyup', ev);
  }



  /**
   * Method to be called internally during [KEYDOWN]
   * @argument ev keydown event
   */
  $.fn.indianKeyboard.keydown = function(ev) {
    console.log('keydown', ev);
  }



  /**
   * Method to be called internally during [KEYPRESS]
   * @argument ev keypress event
   */
  $.fn.indianKeyboard.keypress = function(ev) {
    console.log('keypress', ev);
  }



  /**
   * Method to be called internally during [FOCUS]
   * @argument ev focus event
   */
  $.fn.indianKeyboard.focus = function(ev) {
    console.log('focus', ev, $(this).data());
  }


}(jQuery));