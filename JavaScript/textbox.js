function istextempty(textbox){
    if (textbox.value == "") {
        return true;
    }
    return false;
}
istextempty(document.getElementById("textbox"));
