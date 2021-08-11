/* SAYFAMA HOSGELDINIZ SLIDING */
debugger;
var len=document.getElementById("header").innerHTML.length;
words=" Sayfama hoşgeldiniz...";
var k=0
function sliding(){
if(k>len)
{
  k=0;      
}
else if(k<=len)
{
  document.getElementById("header").innerHTML=words.substring(0,k+1);
  k++;  
}
}
setInterval (sliding, 200); 
/* --------------------------------------------------- */
/* ISIM SOYISIM RENK GECISI */
var a=0;
function changingColor(){
switch(a)
{
case 0 : document.getElementById("nameSurnameId").style.color="blue"; a++; break;
case 1 :document.getElementById("nameSurnameId").style.color="white"; a++; break;
case 2: document.getElementById("nameSurnameId").style.color="white"; a++; break;
case 3: document.getElementById("nameSurnameId").style.color="blue"; a=0;
} 
}
setInterval (changingColor, 600); 
/* --------------------------------------------------------------------------------------- */



