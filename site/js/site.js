// 封装复制到剪贴板方法
(function ($) {
    $.fn.extend({
        jmCopy: function () {
            return this.each(function () {
                $(this).on('click',function () {
                    let textarea = $(this).prev('.fn-left').children('.demo-textarea'),
                        demoDispaly = $(this).prev('.fn-left').children('.demo-display');
                    textarea.text(demoDispaly.text()).select();
                    document.execCommand("Copy"); // 执行浏览器复制命令
                    layer.msg("已复制，可粘贴",{time:1000,icon:6})
                })
            })
        }
    })
})(jQuery);

// 代码块显示与隐藏
$(function () {
    $('.code-show').on('click', function () {
        let i = $(this).children('i'),
            div = $(this).prev('.code-demo-display');
        console.log(div);
        if (i.hasClass('jm-icon-down-copy')) {
            i.removeClass('jm-icon-down-copy').addClass('jm-icon-up-copy');
            div.slideDown()
        } else {
            i.removeClass('jm-icon-up-copy').addClass('jm-icon-down-copy');
            div.slideUp()
        }
    })
});