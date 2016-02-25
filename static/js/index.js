//====================变量区域========================================================
var navTwoHeight=0;
foo=false;
fff=false;
var targeT;

//==========================函数区域==================================================

function search_1() {
    var search=document.getElementById("search");
    search.setAttribute("value","");
}
function search_2() {
    var search=document.getElementById("search");
    search.setAttribute("value","请输入搜索内容");
}
function f1() {
    if(navTwoHeight==40)
        {   navTwoHeight=0;
            return false;}
    if(foo==true)
        {navTwoHeight=0;
         return false;}
    navTwoHeight=navTwoHeight+20;
    document.getElementById("nav_2").style.height=navTwoHeight+"px";
    setTimeout("f1()",10);
}
function f2(x) {
    if(fff==true){return false;}
    foo=true;
    document.getElementById("nav_2").style.height="0px";
    document.getElementById('nav_2').innerHTML ='';
    foo=false;

}
function ff(){
    document.getElementById("nav_2").style.height="40px";
    targeT.style.backgroundColor="gray";
    fff=true;
}
/*  color: #fff;
    font-size: 12px;
    padding: 0 0 0 10px; */
function newA(x,txt,n){
    nav_2.appendChild(x);
    x.href="";
    x.appendChild(txt);
    x.style.position="fixed";
    x.style.left=(xl+n)+"px";
    x.style.lineHeight="40px";
    x.style.color="#fff";
    x.style.fontSize="12px";
    x.style.textDecoration="none";
    x.setAttribute('onmousemove',' ');
}

function f3(x){
    xl=x.getBoundingClientRect().left;
    var newa=document.createElement("a");
    var nav_2=document.getElementById("nav_2");
    var txt=document.createTextNode("学院简介");
    nav_2.appendChild(newa);
    newa.href=" ";
    newa.style.position="fixed";
    newa.style.left=(xl+10)+"px";
    newa.appendChild(txt);
    newa.style.lineHeight="40px";
    newa.style.color="#fff";
    newa.style.fontSize="12px";
    newa.style.textDecoration="none";
    newA(document.createElement("a"),document.createTextNode("111"),100);
    newA(document.createElement("a"),document.createTextNode("222"),200);
    newA(document.createElement("a"),document.createTextNode("333"),300);

}
function f4(x){
    targeT=x;
}
function wtf(){
    fff=false;f2();targeT.style.background='#5A5F69';document.getElementById('nav_2').innerHTML ='';
}

function changecolor(x){
    x.style.color='red';

    for(i=1;i<9;i++){
        q=String(i);
        ss="qaz"+q;
        // console.log(ss);
        document.getElementById(ss).style.color='black';
    }

    x.style.color='red';
}
function news1(){
    document.getElementById('newone').style.display='none';
    document.getElementById('newtwo').style.display='block';
}

function news2(){
    document.getElementById('newtwo').style.display='none';
    document.getElementById('newone').style.display='block';
}

// ==============================================

/*
var pic=new Array();
pic[0]="inline";
pic[1]="none";
pic[2]="inline";
piccount=0;*/
piccount=0;
tmd1=1.0;
tmd2=0.0;
time=1000
function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}
function play(){
    if(piccount==2)
        piccount=0;
if (piccount==0){
	$("#iiiii").fadeToggle(time);
	$("#iiiii2").fadeToggle(time);
	$("#iiiii3").fadeToggle(time);
	$("#iiiii4").fadeToggle(time);
    
}

if (piccount==1){
	$("#iiiii").fadeToggle(time);
	$("#iiiii2").fadeToggle(time);
	$("#iiiii3").fadeToggle(time);
	$("#iiiii4").fadeToggle(time);
}
    piccount++;

}








// ============================================
function kcjs(){
    $("#kcjs").slideDown();
    $("#rcpy").slideUp();
    $("#cgzs").slideUp();
}
function rcpy(){
    $("#kcjs").slideUp();
    $("#rcpy").slideDown();
    $("#cgzs").slideUp();
}
function cgzs(){
    $("#kcjs").slideUp();
    $("#rcpy").slideUp();
    $("#cgzs").slideDown();
}
// function ddd(){
//    var xy=document.getElementById("kcjst");
//    xy.onclick = function() {
//        document.getElementById('kcjs').style.display='block';
//        console.log('hi');
//    }
// }
// window.onload=function(){
//   ddd();
// }

function goleft(){
    pic=document.getElementById('tc');
    left=parseInt(pic.style.left);
    if(left>=0)
        return false;
    left=left+10;
    pic.style.left=left+'px';
    console.log(left);

}

function goright(){

    pic=document.getElementById('tc');
    left=parseInt(pic.style.left);
    right=parseInt(pic.style.right);
    if(left<-190)
        return false;
    left=left-10;
    pic.style.left=left+'px';
    console.log(left);

}
//===============================================

setInterval('play()',5000)









