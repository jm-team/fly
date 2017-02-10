var data=[
	{
		name: "北京",
		code: "bj",
		type: 0,	//0,直辖市；1,省；2，城市；3，区/县
		members: ["昌平","朝阳","大兴","房山","丰台","海淀","怀柔","门头沟","密云","平谷","石景山","顺义","通州","延庆"]
	},
	{
		name: "上海",
		code: "sh",
		type: 0,
		members: ["宝山","崇明","奉贤","嘉定","金山","闵行","浦东南汇","浦东","青浦","松江","徐家汇"]
	},
	{
		name: "浙江",
		code: "zj",
		type: 1,
		members: [
			{
				name: "杭州",
				code: "hz",
				type: 2,
				members: ["淳安","富阳","建德","临安","桐庐","萧山","余杭"]
			},
			{
				name: "金华",
				code: "jh",
				type: 2,
				members: ["东阳","兰溪","磐安","浦江","武义","义乌","永康"]
			},
			{
				name: "宁波",
				code: "nb",
				type: 2,
				members: ["北仑","慈溪","奉化","宁海","象山","余姚","鄞州","镇海"]
			}
		]
	}
];
function getAreaItems(lev1Code,lev2Code,$selects){
	var pro,city,obj,items,html=[],$select;
	if(lev1Code){
		for(var i=0;i<data.length;i++){
			if(data[i].code==lev1Code){
				pro=data[i];
				break;
			}
		}
	}
	if(lev2Code){
		for(var i=0;i<pro.members.length;i++){
			if(pro.members[i].code==lev2Code){
				city=pro.members[i];
				break;
			}
		}
	}
    obj=city||pro, items=obj.members||[];
    $selects.empty();
    if(obj.type==0&&$selects.length>1) {
        $selects.first().append('<option value="'+obj.code+'">'+obj.name+'</option>');
        $select=$selects.last();
    }else{
        $select=$selects.first();
    }
    $select.append('<option></option>');
	for(var i=0;i<items.length;i++){
		if(typeof(items[i])=="string"){
			html.push('<option value="'+(i+1)+'">'+items[i]+'</option>');
		}else{
			html.push('<option value="'+items[i].code+'">'+items[i].name+'</option>');
		}
        if($select) $select.append(html[i]);
	}
	return html.join("");
}
$(function(){
	$(".t-basic select,.t-single select").select2({
		//allowClear: true,
		minimumResultsForSearch: -1
	});
	$(".t-mix select").select2({
		
	});
    $("[name='list4a']").on("change",function(){
        $(".t-select-value").text($(this).val());
    });
	$("[name='province1']").on("change",function(){
        getAreaItems($(this).val(),"",$("[name='city1']"));
	});
    $("[name='province2']").on("change",function(){
        getAreaItems($(this).val(),"",$("[name='city2'],[name='county2']"));
    }); 
    $("[name='city2']").on("change",function(){
        getAreaItems($("[name='province2']").val(),$(this).val(),$("[name='county2']"));
    }); 
    $("[name='province3']").on("change",function(){
        getAreaItems($(this).val(),"",$("[name='city3'],[name='county3']"));
    }); 
    $("[name='city3']").on("change",function(){
        getAreaItems($("[name='province3']").val(),$(this).val(),$("[name='county2']"));
    });   
    $("[name='province4']").on("change",function(){
        getAreaItems($(this).val(),"",$("[name='city4']"));
    });   
});