
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

function IfElseTest() {
    var Power_Level = document.getElementById("Power_Level").value;
    if(Power_Level > 9000) {
        document.getElementById("IfTest").innerHTML = "You are strong enough to face the boss."
    }
    else {
        document.getElementById("IfTest").innerHTML = "You are not strong enough to face the boss. Get better!"
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}