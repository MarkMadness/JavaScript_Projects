function PlayerDictionary() {
    var players = {
        BattleLord: "Warrior Class",
        FunkyJams: "BardClass",
        BananaWizard: "Wizard Class"
    }
    delete players.FunkyJams;
    document.getElementById("Dictionary").innerHTML = players.FunkyJams;
}