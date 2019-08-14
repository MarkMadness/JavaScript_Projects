
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}

function Spaceship(Make, Model, Type, Color){
    this.Spaceship_Make=Make;
    this.Spaceship_Model=Model;
    this.Spaceship_Type=Type;
    this.Spaceship_Color=Color;
}
var Jack = new Spaceship("Starshooter", "TX50", "Long-Distance", "Green")
var Sarah = new Spaceship("Exodus", "400VF", "LightSpeed", "Silver")

function SpaceshipData(){
    document.getElementById("GetData").innerHTML = "Jack has the spaceship: " + Jack.Spaceship_Make + "."
}

function Test() {
    document.getElementById("TestData").innerHTML = NestedTest();
    function NestedTest() {
        var test1 = 2;
        function Plus_One() {test1 += 1;}
        Plus_One();
        return test1;
    }
}