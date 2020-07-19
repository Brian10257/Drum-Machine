function play(str) {
    let displayField = document.getElementById("display")

    if (str === "q" || str === "Q") {
        displayField.innerHTML = 'The letter Q Has Been Pressed';
    } else if (str === "w" || str === "W") {
        displayField.innerHTML = 'The letter W Has Been Pressed';
    } else if (str === "e" || str === "E") {
        displayField.innerHTML = 'The letter E Has Been Pressed';
    } else if (str === "a" || str === "A") {
        displayField.innerHTML = 'The letter A Has Been Pressed';
    } else if (str === "s" || str === "S") {
        displayField.innerHTML = 'The letter S Has Been Pressed';
    } else if (str === "d" || str === "D") {
        displayField.innerHTML = 'The letter D Has Been Pressed';
    } else if (str === "z" || str === "Z") {
        displayField.innerHTML = 'The letter Z Has Been Pressed';
    } else if (str === "x" || str === "X") {
        displayField.innerHTML = 'The letter X Has Been Pressed';
    } else if (str === "c" || str === "C") {
        displayField.innerHTML = 'The letter C Has Been Pressed';
    }
    var audio = document.getElementById(str)
    audio.play();
}

window.document.onkeyup = function(event){
    let keystroke = event.key;
    if(keystroke === "q" || keystroke === "Q"){
        play("Q")
    } else if (keystroke === "w" || keystroke === "W") {
        play("W")
    } else if (keystroke === "e" || keystroke === "E") {
        play("E")
    } else if (keystroke === "a" || keystroke === "A") {
        play("A")
    } else if (keystroke === "s" || keystroke === "S") {
        play("S")
    } else if (keystroke === "d" || keystroke === "D") {
        play("D")
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z")
    } else if (keystroke === "x" || keystroke === "X") {
        play("X")
    } else if (keystroke === "c" || keystroke === "C") {
        play("C")
    }
}