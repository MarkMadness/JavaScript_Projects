function getReceipt() {
    // this initializesour string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0;i<sizeArray.length;i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // these variables will be passed on to each function
    getMeatandVeggies(runningTotal,text1);
};

function getMeatandVeggies(runningTotal,text1) {
    var meatTotal = 0;
    var veggieTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    for (var v = 0; v < veggieArray.length; v++) {
        if (veggieArray[v].checked) {
            selectedVeggie.push(veggieArray[v].value);
            console.log("selected veggie item: ("+veggieArray[v].value+")");
            text1 = text1+veggieArray[v].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    var veggieCount = selectedVeggie.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal + veggieTotal);
    console.log("total selected meat items: "+meatCount);
    console.log("total selected veggie items: "+veggieCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log(veggieCount+" veggie = 1 free veggie = "+"$"+veggieTotal+".00");
    console.log("meat and veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};