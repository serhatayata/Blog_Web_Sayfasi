/* DATES */
/* Date1 */
function date1() {
    const d1=new Date();
    document.getElementById("date1").innerHTML=d1.getHours()+ ":" + d1.getMinutes()+ ":" + d1.getSeconds();
    console.log(d1);
}
setInterval(date1,1000)
/* Parola Kontrol */
function parolaKontrol(){
  var p1 = document.getElementById("parola1").value;
  var p2 = document.getElementById("parola2").value;
  if(p1 != p2){
    alert('Parola Farklı !!')
  }
}
/* Sadece Rakam girme (TEL NO) ve 11 haneli olması */
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    return true;
}
