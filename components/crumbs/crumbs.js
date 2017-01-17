$(function () {
    // 单选框事件
    $('.jm-radio-box').on('click', function () {
        if($(this).hasClass('jm-radio-disabled') == false){
            $(this).children('.jm-radio').attr('checked', true);
            $(this).children('.jm-radio-icon').addClass('jm-icon-radio').removeClass('jm-icon-radio-none');
            $(this).siblings().children('.jm-radio').removeAttr('checked');
            $(this).siblings().children('.jm-radio-icon').removeClass('jm-icon-radio').addClass('jm-icon-radio-none')
        } 
    });
    // 多选框事件
    $('.jm-checkbox-box').on('click', function () {
        if ($(this).hasClass('jm-checkbox-disabled')) {
            $(this).addClass('jm-checkbox-disabled')
        } else if ($(this).children('.jm-checkbox').attr('checked')) {
            $(this).children('.jm-checkbox').removeAttr('checked');
            $(this).children('.jm-checkbox-icon').addClass('jm-icon-checkbaba').removeClass('jm-icon-checkbook')
        } else {
            $(this).children('.jm-checkbox').attr('checked', true);
            $(this).children('.jm-checkbox-icon').addClass('jm-icon-checkbook').removeClass('jm-icon-checkbaba')
        }
    })
});
