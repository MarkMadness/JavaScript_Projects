function displayType(levelorder) {
    var levelType = levelorder.getAttribute("data-selection-order");
    alert(levelType + " is the " + levelorder.innerHTML + " level in the game.")
}