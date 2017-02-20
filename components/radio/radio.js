// radio & checkbox Method
(function ($) {
    $.fn.extend({
        // 扩展单选框方法
        jmRadio: function (options) {
            return this.each(function () {
                let $this = $(this),
                    _type = options.type,
                    _radioIcon = $this.find('.jm-icon'),
                    _input = $this.find('.jm-radio'),
                    _radioBox = $this.find('.jm-radio-icon-box'),
                    siblings = $this.siblings();

                if (_input.attr('disabled')) {
                    $this.addClass('jm-radio-disabled')
                }

                if (_input.attr("checked")) {
                    if(_type == 0){
                        _radioIcon.addClass('jm-icon-radio')
                    }
                    if(_type == 1){
                        _radioBox.addClass('jm-radio-icon-box-style')
                    }
                } else {
                    if(_type == 0){
                        _radioIcon.addClass('jm-icon-radio-none')
                    }
                }

                _radioBox.on("click", function () {
                    if (!_input.attr("disabled")) {
                        _input.attr("checked", true);
                        siblings.find('input').removeAttr("checked");
                        if (_type == 0){
                            _radioIcon.removeClass('jm-icon-radio-none').addClass('jm-icon-radio');
                            siblings.find('.jm-icon').removeClass('jm-icon-radio').addClass('jm-icon-radio-none');
                        }
                        if( _type == 1){
                            _radioBox.addClass('jm-radio-icon-box-style');
                            siblings.find('.jm-radio-icon-box').removeClass('jm-radio-icon-box-style')
                        }
                    }
                });
            });
        }
    });
})(jQuery);