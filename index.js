function getinput(numbervariable) {
    
    var existingnumber = $("#inputid").val();
    $("#inputid").val(existingnumber + numbervariable);
    
}

function clearresult() {
    $("#inputid").val("");
    //// in js or jQuery val("") that means "" returns null value
    
}

function calc() {
    //// eval function or method can automatically perform mathmatical operations
    var calculation = eval($("#inputid").val());
    $("#inputid").val(calculation);    
}

function del() {
    var presentvalue = $("#inputid").val();
    if (presentvalue!="") {
        $("#inputid").val($("#inputid").val().slice(0,-1));
    }
    
}

