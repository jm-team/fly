/**
 * Created by haolisha on 2017/1/19.
 */

// import jquery from 'jquery';
$(function(){

    $(".J_next").on("click",function(){
        var _stepsWrap = $(this).siblings(".jm-steps-wrap") ;
        var _stepsWrapItem = _stepsWrap.find(".jm-steps-item");
        var currentStep = _stepsWrap.find(".jm-steps-item.jm-steps-cross").index();
        if(currentStep >= 0){
            //_stepsWrapItem.eq(currentStep).find(".jm-steps-icon").attr("class","jm-steps-icon jm-icon jm-icon-success");
            _stepsWrapItem.eq(currentStep).attr("class","jm-steps-item jm-steps-finish").next().addClass("jm-steps-cross")
        }else {
            var finishLength = _stepsWrap.find(".jm-steps-item.jm-steps-finish").length;
            var finishLast = _stepsWrap.find(".jm-steps-item.jm-steps-finish").last().index();
            if(finishLength >= finishLast + 1){
                _stepsWrapItem.eq(finishLength).addClass("jm-steps-cross");
            }

        }
    });

    $(".J_prev").on("click",function(){
        var _stepsWrap = $(this).siblings(".jm-steps-wrap") ;
        var _stepsWrapItem = _stepsWrap.find(".jm-steps-item");

        var finishLength =_stepsWrap.find(".jm-steps-item.jm-steps-finish").length;
        if(finishLength > 0) {
            var currentStep = _stepsWrap.find(".jm-steps-item.jm-steps-cross").last().index();
            if (currentStep > 0) {
                _stepsWrapItem.eq(currentStep).removeClass("jm-steps-cross").prev().addClass("jm-steps-finish");
            } else {
                var currentStep = _stepsWrap.find(".jm-steps-item.jm-steps-finish").last().index();
                _stepsWrapItem.eq(currentStep).removeClass("jm-steps-finish").addClass("jm-steps-cross");
                //_stepsWrapItem.eq(currentStep).attr("class","jm-steps-item jm-steps-cross");
                //_stepsWrapItem.eq(currentStep).find(".jm-steps-icon").attr("class","jm-steps-icon jm-icon jm-icon-circle").text(currentStep+1)
            }
        }
    });
});