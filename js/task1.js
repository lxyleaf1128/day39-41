function getHash(){//解析Hash，获取状态参数
    return location.hash.substring(1);//取#后面的值，并返回
}
function display() {//渲染函数
	cont=document.getElementById('text');
    content=getHash();//内容 = 解析Hash，获取状态参数()
    if(content==''){
		cont.innerHTML='无';    	
    }else{
    	cont.innerHTML=content;
    }//cont的innerHTML = 内容
}

var buttonArea=document.getElementById('button-area');
buttonArea.onclick = function(e) {//按钮点击事件 
    target=e.target;
    // console.log(target.type)
    if (target.type=='submit') {
	    text=target.innerText;
	    location.hash=text;//设置新的hash
    }
}
display();//进来先执行一次渲染函数，刷新页面的时候，保持div中的显示
window.onhashchange = function(){//hash改变后渲染一次渲染函数
	// console.log(location.href);
	display();
}
