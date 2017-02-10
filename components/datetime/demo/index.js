$(function(){
	moment.locale("zh-cn");
	$("input[name='datetime1']").datetimepicker({
		locale: "zh-cn",
		format: "YYYY-MM-DD HH:mm:ss",
		showClose: true,
		showClear: true,
		showTodayButton: true
	});
	//date
	$("input[name='date1']").datetimepicker({
		locale: "zh-cn",
		format: "YYYY-MM-DD",
		showClose: true,
		showClear: true,
		showTodayButton: true
	});	
	$("input[name='date3']").daterangepicker({
		locale: {
	      applyLabel: "确定",
	      cancelLabel: "取消",
	      monthNames: [
	      	"一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
	      ]
	    }
	});	
	$("input[name='date4']").daterangepicker({
		locale: {
	      applyLabel: "确定",
	      cancelLabel: "取消",
	      monthNames: [
	      	"一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
	      ]
	    },
	    linkedCalendars: true,	//左右两个月份始终保持紧邻关系
	    alwaysShowCalendars: true,	    
	    showCustomRangeLabel: false,
	    //startDate: moment().subtract(29, 'days'),
	    //endDate: moment(),
	    ranges: {
           '今天': [moment(), moment()],
           '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           '最近7天': [moment().subtract(6, 'days'), moment()],
           '最近30天': [moment().subtract(29, 'days'), moment()],
           '本月': [moment().startOf('month'), moment().endOf('month')],
           '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
	});	
	$("input[name='date5'],input[name='datetime2']").datetimepicker({
		format: "YYYY",
		viewMode: "years"
	});
	$("input[name='date6'],input[name='datetime3']").datetimepicker({
		locale: "zh-cn",
		format: "YYYY-MM",
		viewMode: "months"
	});
});