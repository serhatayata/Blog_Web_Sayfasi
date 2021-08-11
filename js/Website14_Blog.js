/* DATES */
/* Date1 */
function date1() {
    const d1=new Date();
    document.getElementById("date1").innerHTML=d1.getHours()+ ":" + d1.getMinutes()+ ":" + d1.getSeconds();
    console.log(d1);
}
setInterval(date1,1000)

