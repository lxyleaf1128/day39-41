function createTable(data) {
    var str='<table><tr><th>商品</th><th>地区</th>';
    for (var i = 1; i <= 12; i++) {
    	str+='<th>'+i+'月'+'</th>';
    }
    str+='</tr>';//输出表头：商品、地区、1月、2月、…… 12月
    var or=check(regionB);
	var op=check(productB);//数组
	var number_r=or.length;
	var number_p=op.length;//获得checkbox选中数量
	
	for (var s = 0; s < data.length; s++) {//生成每行不合并的表格
	    str+='<tr><td>';
	    str+=data[s][0].product;
	    str+='</td><td>';
	    str+=data[s][0].region;
	    str+='</td>';
    	for (var j = 0; j < 12; j++)  {//遍历数据,输出每一行的表格HTML内容
    		var k=j+1;
    		str+='<td class="sale" month="'+k+'">'+data[s][0].sale[j]+'</td>';//j表示月份
    	} 
    	str+='</tr>';
	}//含表头			
    str+='</table>';
    str=str.replace(/,/g,'');
    t.innerHTML=str;//把生成的HTML内容赋给table-wrapper
    // console.log(str)
}