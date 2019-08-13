function Add_Demo() {
    addition = 3 + 4;
    document.getElementById("Add").innerHTML = addition;
}

function Subtract_Demo() {
    subtraction = 10 - 5;;
    document.getElementById("Subtract").innerHTML = subtraction;
}

function Multiply_Demo() {
    multiply = 3 * 2;
    document.getElementById("Multiply").innerHTML = multiply;
}

function Divide_Demo() {
    division = 8/2;
    document.getElementById("Divide").innerHTML = division;
}

function Remainder_Demo() {
    remainder = 20 % 6;
    document.getElementById("Remainder").innerHTML = remainder;
}

function Many_Demo() {
    many = (2 + 1) * 3;
    document.getElementById("Many").innerHTML = many;
}

function Negative_Demo() {
    var n = 5;
    document.getElementById("Negative").innerHTML = -n; 
}

function Increment_Demo() {
    var x = 5;
    x++;
    document.getElementById("Increment").innerHTML = x;
}

function Decrement_Demo() {
    var x = 5;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}

function Random_Demo() {
    var r = (Math.random()*10);
    document.getElementById("Random").innerHTML = r;
}

function MathObject_Demo() {
    var mo = (Math.round(3.68));
    document.getElementById("MathObject").innerHTML = mo;
}