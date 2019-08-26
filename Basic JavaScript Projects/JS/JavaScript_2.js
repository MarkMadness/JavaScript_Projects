function Form() {
    var fn = document.forms["myform"]["first name"].value;
    var ln = document.forms["myform"]["last name"].value;
    if(fn == "", ln == ""){
        alert("Please fill in your name");
        return false;
    }
}