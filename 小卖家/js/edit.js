var t=document.getElementById('table-wrapper');
t.onclick = function(e) {
	var td = e.target;
    var initvalue=td.innerHTML;
    // console.log(initvalue);
	month = td.getAttribute('month');
    // console.log(month);
	if(Number(td.innerText)) {//点击在某个数字td上
        var div = document.createElement("div");//产生可编辑的一整块
        div.setAttribute("class", "edit-div");
        div.setAttribute("id", "editdi");
        var input = document.createElement("input");//输入框
        input.type = "text";
        input.setAttribute("class", "edit-input");
        input.value = td.innerHTML;//填入原始数据
        var verifyBtn = document.createElement("button");//确认按钮
        verifyBtn.setAttribute("class", "verify-item");
        var cancelBtn = document.createElement("button");//取消按钮
        cancelBtn.setAttribute("class", "cancel-item");
        div.appendChild(input);
        div.appendChild(verifyBtn);
        div.appendChild(cancelBtn);
		td.innerHTML='';
		td.appendChild(div);//点击替换部分完成
        td.setAttribute("class", "editnow");//在编辑时候不出现编辑标签
        input.focus();
        var di=document.getElementById('editdi');;
        // console.log(di)
        di.onclick = function(b){//进入编辑环境后定义一个点击事件用于退出编辑
		  tdStatusChange(b,initvalue);
        }	
        t.onkeyup = function(c) {//进入编辑环境后定义一个键盘事件用于退出编辑
            tdStatusChange(c,initvalue);
        }
	}
}

// 编辑状态下的单元格状态切换
function tdStatusChange(event, initVal) {
    var eTarget = event.target,
        eType = event.type;
        input = document.querySelector("input.edit-input");
        // // console.log(eTarget.getAttribute("class"));
        // console.log(eTarget.parentNode.parentNode);
        // // console.log(initVal);

    if ((eType === "click" && eTarget.getAttribute("class") === "cancel-item")//取消
        || (eType === "keyup" && event.keyCode === 27)) {
        Exitedit(eTarget.parentNode.parentNode, initVal);
    }
    if ((eType === "click" && eTarget.getAttribute("class") === "verify-item")//确认
        || (eType === "keyup" && event.keyCode === 13)) {
        var val = input.value;//新输入的值
        // console.log(val);
        tr = eTarget.parentNode.parentNode.parentNode;
        var cells=tr.getElementsByTagName('td');
        product = cells[0].innerHTML;
        region = cells[1].innerHTML;

        if (isNaN(val)) {//输入不符合要求
            alert("Input is not a number!!!");
            input.value=initVal;
            input.focus();
        } else {
            updateLocalStorage(product, region, month-1, +val);//更新localstorage
            Exitedit(eTarget.parentNode.parentNode, val);
        }
    }
}
// 单元格退出编辑状态
function Exitedit(div, valu) {
    div.innerText=valu;//编辑过的数据/未修改的数据
    div.setAttribute("class", "sale");//用css改变编辑标签显示
}



