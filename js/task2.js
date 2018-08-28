function getHash(){//解析Hash，获取状态参数
    return location.hash.substring(1);//取#后面的值，并返回
}
function display() {//渲染函数
    cont1=document.getElementById('text1');
	cont2=document.getElementById('text2');
    content=getHash();//内容 = 解析Hash，获取状态参数
    // console.log(typeof(content))
    if(content==''){
        cont1.innerHTML='无';        
		cont2.innerHTML='无';    	
    }else if(content=='A'||content=='B'||content=='C'){//不可写成content=='A'||'B'||'C'
        cont1.innerHTML=content;
    	cont2.innerHTML='无';
    }else if(content==='D'||content=='E'||content=='F'){
        cont1.innerHTML='无';
        cont2.innerHTML=content;
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
