// radio & checkbox Method
(function($){
    $.fn.extend({
        // 扩展单选框方法
        JmRadio : function(){
            return this.each(function(){
                var $this = $(this),
                    _radioIcon = $this.find('.jm-icon'),
                    _input = $this.children('input'),
                    siblings = $this.siblings();

                if(_input.attr('disabled')){
                    $this.addClass('jm-radio-disabled')
                }

                if(_input.attr("checked")){
                    _radioIcon.addClass('jm-icon-radio')
                }else{
                    _radioIcon.addClass('jm-icon-radio-none')
                }

                $this.children('span').on("click",function(){
                    if(!_input.attr("disabled")){
                        _input.attr("checked",true);
                        _radioIcon.removeClass('jm-icon-radio-none').addClass('jm-icon-radio');
                        siblings.find('input').removeAttr("checked");
                        siblings.find('.jm-icon').removeClass('jm-icon-radio').addClass('jm-icon-radio-none');
                    }
                });
            });
        }
    });
})(jQuery);