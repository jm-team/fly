/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-13 14:21:46
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
     $('.jm-alert-dismissible').jmAlert();
 })(jQuery)

