function display(){

var sal = document.getElementById("floatingInput").value;

var invest = parseFloat(0.1 * Number(sal));
var emergency = parseFloat(0.1 * Number(sal));

/*spending*/
var fun = parseFloat(0.1 * Number(sal));
var sink = parseFloat(0.1 * Number(sal));
/* necessities */
var nece  = parseFloat(0.6 * Number(sal));

document.getElementById("c3").innerHTML = "Mutual Funds,Cryptocurrency etc:\n "+invest+"/-"+"<br>"+"Emergency Funds(Don't touch this):\n"+emergency+"/-";
document.getElementById("c4").innerHTML = "For hanging out, movies etc:\n "+fun+"/-" +"<br>"+"For purchases like laptop,games,netflix etc:\n"+sink+"/-";
document.getElementById("c5").innerHTML = "For necessities such as commute,groceries,utility bills, rent etc:\n"+nece+"/-";

}
