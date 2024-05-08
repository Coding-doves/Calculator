let display = document.getElementById("screenInput");


function appendToScreen(value){
    display.value += value
}

function percentage(){
    display.value += '%'
    calculate();
}

function pi(){
    // Replace pi (PI) with the Math.PI
    appendToScreen(Math.PI);
}

function delValue(){
    display.value = display.value.slice(0,-1);
}

function clearScreen(){
    display.value = "";
}

function calculate(){
    try {
        if(display.value === ""){
            display.value = "";
        }
        else{
            // Replace of with multiplication
            display.value = display.value.replace(/of/gi, '*');
            // Replace percentage with multiplication by 0.01
            display.value = display.value.replace(/%/g, '*0.01');
            // Replace modulo (%) with the modulo operator
            display.value = display.value.replace(/mod/gi, '%');

            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'error';
    }
}
