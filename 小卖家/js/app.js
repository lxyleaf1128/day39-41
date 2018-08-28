var regionList=['华东','华北','华南'];
var productList=['手机','笔记本'];
var regionB=document.getElementById('region-radio-wrapper');
var procuctB=document.getElementById('product-radio-wrapper');
generateBox(regionB, regionList)//生成CheckBox
generateBox(procuctB, productList)//生成CheckBox

function all(obj,a){//点击全选框时，选上所有item
	if(obj.checked==true){
	for (var i = 0; i < a.length; i++) {
		a[i].checked=true;//每一个input都选上
	}}else{
		for (var i = 0; i < a.length; i++) {
			a[i].checked=false;//每一个input不选
		}
	}
}
function single(obj,a){//点击单选框时判断是否选上全选框
	var c=0;//统计当前被选数
	for (var i = 1; i < a.length; i++) {//全选框不算
		if(a[i].checked){
			c++;}
	}
	if (c==0) {
		obj.checked=true;
	}
	else if(c==a.length-1){
		a[0].checked=true;
	}else{
		a[0].checked=false;
	}
}
function generateBox( box, list ) {//生成一组CheckBox
    // str='<input type="checkbox" name="all" value="checkbox">全选';//生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    str='<input type="checkbox" name="all" value="全选">全选';//生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    for (var i = 0; i < list.length; i++) {//遍历参数对象 生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    	str+='<input type="checkbox" name="item" value="'+list[i]+'">'+list[i];//便于后续获得筛选条件,value设为list[i]
    }
    box.innerHTML+=str;//生成好的html加到容器中
    var a=box.getElementsByTagName('input');//获取该组CheckBox中的所有input
    for (var i = 0; i < a.length; i++) {//对每一个input
    	a[i].onclick = function(){//对每一个checkbox定义点击事件
    		if(this.type=='checkbox'){
    			if(this.name=='all'){//全选框
    				all(this,a);
    			}else{//单选框
    				single(this,a);
    			}
    		}
    	}
	}
}

var regionB=document.getElementById('region-radio-wrapper');
var productB=document.getElementById('product-radio-wrapper');
var t=document.getElementById('table-wrapper');

regionB.onchange= function(e) {//regionB的change事件
   createTable(getCondition());//渲染新的表格(根据checkbox选项获取数据)
}
productB.onchange= function(e) {//productB的change事件
   createTable(getCondition());//渲染新的表格(根据checkbox选项获取数据)
}
initLocalStorage();

function getHash(){//解析Hash，获取状态参数
    var hash=decodeURIComponent(window.location.hash.substring(1));//取#后面的值，并返回
    return hash;
}

function display() {//渲染函数,显示在表格中
    var check=[];
    var radioArea=document.getElementById('radio-area');
    var items=radioArea.getElementsByTagName('input');
    check=getHash().split("#");
    txt=getHash();
    for (var j = 0; j < items.length; j++) {
        if (check.indexOf(items[j].value)!=-1) {//对于url中有的选项显示在checkbox中
            items[j].checked=true; 
        }
    }
    if ((txt.split('华')).length-1==3 ){//对两个全选框进行操作
    	items[0].checked=true;
    }
    if((txt.split('手机')).length==2&&(txt.split('笔记本')).length==2){
    	items[4].checked=true;
    }
    createTable(getCondition());
}

var radioArea=document.getElementById('radio-area');
var items=radioArea.getElementsByTagName('input');
radioArea.onchange = function() {//checkbox区域任何变化都检查一遍各checkbox 
    text='';
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked&&items[i].value!='全选') {//全选
            text+='#'+items[i].value;
        }
    }
    location.hash =text;//将除全选之外的选项加入hash，使得页面状态反应在url中
}
display();//进来先执行一次渲染函数，刷新页面的时候，保持表格显示
window.onhashchange = function(){//hash改变后渲染一次渲染函数
    display();
}
