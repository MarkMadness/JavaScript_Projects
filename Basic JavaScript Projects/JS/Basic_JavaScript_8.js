function Concat() {
    var sentence1 = "This is ";
    var sentence2 = "where the concat happens.";
    var whole_sentence = sentence1.concat(sentence2);
    document.getElementById("Concat_Method").innerHTML = whole_sentence;
}

function SliceMethod() {
    var sentence = "I am the greatest!"
    var Section = sentence.slice(9,18)
    document.getElementById("sliced").innerHTML = Section
}

function ToString(){
    var num = 82;
    document.getElementById("string").innerHTML = num.toString()
}

function Precise(){
    var numlength = 12345.6789012345;
    document.getElementById("length").innerHTML = numlength.toPrecision(8)
}