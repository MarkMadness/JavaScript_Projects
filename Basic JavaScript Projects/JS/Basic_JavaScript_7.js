/*
var X = 5;
function AddOne() {
    document.write(12 + X);
}
function AddTwo() {
    var Y = 3;
    document.write(X + Y);
}
AddOne();
AddTwo(); 
*/

function IfElseTest() {
    Power_Level = document.getElementById("Power_Level").value;
    if(Power_Level > 9000) {
        document.getElementById("IfTest").innerHTML = "You are strong enough to face the boss."
    }
    else {
        document.getElementById("IfTest").innerHTML = "You are not strong enough to face the boss. Get better!"
    }
}