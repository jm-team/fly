/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-22 16:32:12
 * @version $Id$
 */
(function($){
    $.fn.extend({
        'jmAlert':function(){
            this.each(function(){
            var $this = $(this);
            $this.find('button[data-dismiss="alert"]').bind('click',function(){
                $(this).parent().remove();
            })
            })
        }
    })
    $(function(){
        $('.jm-alert-dismissible').jmAlert();
    })

})(jQuery)

