function display() {
    document.getElementById("time").innerHTML=Date();
}

function right() {
    alert("right!!!")
}

function wrong() {
    alert("wrong!!!")
}


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

function weather(){
    
}

function createnode() {
    var para=document.createElement("p");
    var node=document.createTextNode("handsome");
    para.appendChild(node);
    var element=document.getElementById("insert01");
    element.appendChild(para);
}

function createnode2() {
    var para=document.createElement("p");
    var node=document.createTextNode("Clever");
    para.appendChild(node);
    var element=document.getElementById("insert01");
    element.appendChild(para);
}

function createnode3() {
    var para=document.createElement("p");
    var node=document.createTextNode("Super Power");
    para.appendChild(node);
    var element=document.getElementById("insert01");
    element.appendChild(para);
}

function createnode4() {
    var para=document.createElement("p");
    var node=document.createTextNode("Brave");
    para.appendChild(node);
    var element=document.getElementById("insert01");
    element.appendChild(para);
}

function createnode5() {
    var para=document.createElement("p");
    var node=document.createTextNode("Confident");
    para.appendChild(node);
    var element=document.getElementById("insert01");
    element.appendChild(para);
}

function removenode(){
    var list = document.getElementById("insert01");
    var step = list.children.length;
    for(i=step-1;i>=0;step--){
        var child = list.children[i];
        // alert(i);
        list.removeChild(child);
        // alert(i);
    }

}

function changenode(){
    document.getElementById("insert02").innerHTML="Yes !!!!";
}

function changenode2(){
    document.getElementById("insert02").innerHTML="Are you serious???";
}

function cloneme(){
    var node=document.getElementById("cloneme").firstChild.cloneNode(true);
    document.getElementById("cloneme").appendChild(node);
}

function test(){
    alert(document.getElementById("data").value);
}