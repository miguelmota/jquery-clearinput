(function($) {

  $.fn.clearinput = function(opts) {

    var defaults = {
      'iconClass': 'clearinput',
      'focusOnClear': true,
      'iconText': '&times;'
    };

    settings = $.extend(defaults, opts);

    var init = function() {

      var $this = $(this),
          $icon,
          wrapperClass = settings.iconClass + '-wrapper',
          clearField,
          checkField,
          hasText,
          update;

      if (!$this.parent().hasClass(wrapperClass)) {

        var wrapParts = [
          '<div style="position: relative;" class="' + wrapperClass + '">',
          $this.html(),
          '</div>'
        ];

        $this.wrap(wrapParts.join(''));

        var afterParts = [
          '<a style="position: absolute; cursor: pointer;" class="' + settings.iconClass + '">',
          settings.iconText,
          '</a>'
        ];

        $this.after(afterParts.join(''));
      }

      $icon = $this.next();

      clearField = function() {
        $this.val('').change();
        checkField();
        if (settings.focusOnClear) {
          $this.focus();
        }
        if (typeof (settings.callback) === 'function') {
          settings.callback();
        }
      };

      checkField = function() {

        if (hasText()) {
          $icon.show();
        } else {
          $icon.hide();
        }
        update();
      };

      hasText = function() {
        return $this.val().replace(/^\s+|\s+$/g, '').length > 0;
      };

      update = function() {
        var width = $this.outerWidth(), height = $this.outerHeight();

        $icon.css({
          top: height / 2 - $icon.height() / 2,
          left: width - height / 2 - $icon.height() / 2
        });
      };

      $icon.on('click', clearField);

      $this.on('keyup keydown change focus', checkField);
      $(window).on('resize', update);

      checkField();
    };

    return this.each(init);

  };
})(jQuery);
