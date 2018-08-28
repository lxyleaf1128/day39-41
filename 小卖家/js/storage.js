// 全局变量，用于查询存储在localStorage中的数据
var key= "local-data";
   
// localStorage初始化
function initLocalStorage() {
    var data = [];
    if (!getLocalStorage()) {
        data = sourceData.slice();//源数据
        data = JSON.stringify(data);
        localStorage.setItem(key, data);
    }
}

// 获取localStorage
function getLocalStorage() {
    return JSON.parse(localStorage.getItem(key));
}

// 更新localStorage
function updateLocalStorage(product, region, index, value) {
    var localData = getLocalStorage();
    for (var i = 0; i < localData.length; i++) {
        if (localData[i]["product"] === product
            && localData[i]["region"] === region) {
            localData[i]["sale"][index] = value;
            break;
        }
    }
    localStorage.setItem(key, JSON.stringify(localData));
}