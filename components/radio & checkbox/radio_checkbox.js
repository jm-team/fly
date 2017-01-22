// radio & checkbox Method
(function($){
    $.fn.extend({
        // 扩展单选框方法
        JmRadio : function(){
            return this.each(function(){
                var $this = $(this),
                    _radioIcon = $this.find('.jm-radio-icon'),
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
                        _radioIcon.removeClass('jm-icon-radio-none').addClass('jm-icon-radio')
                        siblings.find('input').removeAttr("checked");
                        siblings.find('.jm-radio-icon').removeClass('jm-icon-radio').addClass('jm-icon-radio-none');
                    }
                });
            });
        },
        // 扩展多选框方法
        JmCheckbox : function () {
            return this.each(function () {
                var $this = $(this),
                    _checkboxIcon = $this.find('.jm-checkbox-icon'),
                    _input = $this.children('input');

                if(_input.attr('disabled')){
                    $this.addClass('jm-checkbox-disabled')
                }

                if(_input.attr("checked")){
                    _checkboxIcon.addClass('jm-icon-checkbook')
                }else{
                    _checkboxIcon.addClass('jm-icon-checkbaba')
                }

                $this.children('span').on("click",function(){
                    if(_input.attr("disabled")){
                        return false
                    }
                    if(_input.attr("checked")){
                        _input.removeAttr('checked');
                        _checkboxIcon.removeClass('jm-icon-checkbook').addClass('jm-icon-checkbaba')
                    }else{
                        _input.attr('checked',true);
                        _checkboxIcon.removeClass('jm-icon-checkbaba').addClass('jm-icon-checkbook')
                    }
                });
            })
        }
    });
})(jQuery);