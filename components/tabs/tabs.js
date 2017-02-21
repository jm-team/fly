$(function() {
    
    function tabContent(selector, pos){
        var pos = pos || 0;
        $.get('../mock/mock.json', function(data) {
            $(selector).children().each(function(index, item) {
                if(index < 3){
                    $(item).children('a').text(data[index].title);
                }
            });
            if(pos < 3){
                $(selector).siblings('.tab-content').text(data[pos].content);
            }else{
                $(selector).siblings('.tab-content').text('新建内容');
            }
        });
    }
    
    /*

         tab干净样式 默认

    */
    tabContent('.tab-clear-default');
    $('.tab-clear-default').on('click', 'li', function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        tabContent('.tab-clear-default', index);
    });

    /*

        tab干净样式 禁止

    */
    tabContent('.tab-clear-disabled');
    $('.tab-clear-disabled').find('li').each(function(index, item) {
        if ($(item).attr('jm-disabled')) {
            $(this).addClass('tab-disabled');
        } else {
            $(item).on('click', function(e) {
                e.preventDefault();
                var index = $(this).index();
                $(this).addClass('active').siblings('li').removeClass('active');
                tabContent('.tab-clear-disabled', index);
            })
        }
    });

    /*

        tab干净样式 icon

    */
    tabContent('.tab-clear-icon');
    $('.tab-clear-icon').on('click', 'li', function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        tabContent('.tab-clear-icon', index);
    });

    /*

        tab卡片样式 默认

    */
    tabContent('.tab-card-default');
    $('.tab-card-default').on('click', 'li', function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        tabContent('.tab-card-default', index);
    });

    /*

        tab卡片样式 关闭

    */
    // 切换
    tabContent('.tab-card-close');
    $('.tab-card-close').on('click', 'li', function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        tabContent('.tab-card-close', index);
    });
    // 关闭
    $('.tab-card-close').on('click', 'i', function(e) {
        e.preventDefault();
        var index = $(this).parent().index();

        if($('.tab-card-close li').length === index + 1){
            $(this).parent().remove();          
            $('.tab-card-close li').eq(index-1).addClass('active');
            tabContent('.tab-card-close', index-1);
        }else{
            $(this).parent().remove();
            $('.tab-card-close li').eq(index).addClass('active');
            tabContent('.tab-card-close', index);
        }
    });

    /*

        tab卡片样式 关闭 添加

    */  
    // 切换
    tabContent('.tab-card-add');
    $('.tab-card-add').on('click', 'li', function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        tabContent('.tab-card-add', index);
    });
    // 关闭
    $('.tab-card-add').on('click', 'i', function(e) {
        e.preventDefault();
        var index = $(this).parent().index();

        if($('.tab-card-add li').length === index + 1){
            $(this).parent().remove();          
            $('.tab-card-add li').eq(index-1).addClass('active');
            tabContent('.tab-card-add', index-1);
        }else{
            $(this).parent().remove();
            $('.tab-card-add li').eq(index).addClass('active');
            tabContent('.tab-card-add', index);
        }
    });
    // 添加
    $('.tab-card-add-icon').on('click', function(e) {
        e.preventDefault();
        var oLi = $('<li>').addClass('fn-left');
        $(oLi).append($('<a>').text('新标签'));
        $(oLi).append($('<i>').addClass('jm-icon jm-icon-wrong'));
        $(oLi).insertBefore($(this));
    });

})