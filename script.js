function buttonclick(val){

    document.getElementById("screen").value+=val;
}

function buttonOp(value){
        var screen = document.getElementById("screen");
        var text = screen.value;
    
        // Check if the last character is an operator
        if (/[\+\-\*\/]$/.test(text) && /[\+\-\*\/]/.test(value)) {
            // If the last character is an operator and the new value is also an operator, replace it
            screen.value = text.slice(0, -1) + value;
        } else {
            // Otherwise, just append the new value
            screen.value += value;
        }
    }    

function clearDisplay(){
    document.getElementById("screen").value=""
}

function backspace() {
    var text = document.getElementById("screen").value;
    document.getElementById("screen").value = text.slice(0, -1); // Remove last character
}


function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

