/* Assignemnt 
function Call_Loop() {
    var num = 0;
    while (num < 5) {
        num++;
    }
    document.getElementById("Loop").innerHTML = num;
}
*/

/*
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
*/

/*
const guild = {players: 5, rank: 38, realm: "Ebonhawk"};
function constant_function() {
    guild.rank = 37;
    guild.lastraid = "Heart of Evil's Lair";
    document.getElementById("Constant").innerHTML = "The guild ran the raid " + guild.lastraid + " last night and are now rank " + guild.rank + ".";
}
*/

/*
function Let() {
    var A = 4;
    document.write(A);
    {
        let A = 5;
        document.write(A);
    }
    document.write(A);
}
*/


    let partyboat = {
        make: "The Best!",
        model: "The Wave Rider",
        capacity: "280",
        color: "Silver",
        description: function() {
            return "The party boat is " + this.make + " make, model: " + this.model + ", with a color of " + this.color + ", and can hold " + this.capacity + " people.";        
        }
    };
    document.getElementById("LetObject").innerHTML = partyboat.description();