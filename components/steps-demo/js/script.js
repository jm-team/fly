/**
 * Created by haolisha on 2017/1/19.
 */
$(function(){
    $(".J_next").on("click",function(){
        var currentStep = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-cross").index();
        if(currentStep >= 0){
            $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item").eq(currentStep).removeClass("jm-steps-cross").addClass("jm-steps-finish").next().addClass("jm-steps-cross");
        }else {
            var finishLength = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-finish").length;
            var finishLast = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-finish").last().index();
            if(finishLength >= finishLast + 1){
                $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item").eq(finishLength-1).next().addClass("jm-steps-cross");
            }

        }
    });

    $(".J_prev").on("click",function(){
        var finishLength = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-finish").length;
        if(finishLength > 0) {
            var currentStep = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-cross").last().index();
            if (currentStep > 0) {
                $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item").eq(currentStep).removeClass("jm-steps-cross").prev().addClass("jm-steps-finish");
            } else {
                var currentStep = $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item.jm-steps-finish").last().index();
                $(this).siblings(".jm-steps-wrap").eq(0).find(".jm-steps-item").eq(currentStep).removeClass("jm-steps-finish").addClass("jm-steps-cross");
            }
        }
    });
})