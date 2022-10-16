//get the id element

let inputNumber = document.getElementById("input-number");
let btnSubmit = document.getElementById("btn-submit");
let convertResultOne = document.getElementById("conversion-1");
let convertResultTwo = document.getElementById("conversion-2");
let convertResultThree = document.getElementById("conversion-3");

// addEvent Listener to Button
btnSubmit.addEventListener("click", function () {
    showResultOne();
    showResultTwo();
    showResultThree();  
    inputNumber.value = '';
})

//function

function showResultOne () {
    let metersToFeet = inputNumber.value * 3.28084
    let feetToMeter = inputNumber.value * 0.3048
    let showResult = `${inputNumber.value} meters = ${metersToFeet.toFixed(2)} feet | ${inputNumber.value} feet = ${feetToMeter.toFixed(2)} meters`
    convertResultOne.textContent = showResult
    localStorage.setItem("Converter", JSON.stringify(showResult));
 
}

function showResultTwo () {
    let litersToGallon = inputNumber.value * 0.264172
    let gallonToLiters = inputNumber.value * 3.78541
    let showResult = `${inputNumber.value} Litters = ${litersToGallon.toFixed(2)} Gallons | ${inputNumber.value} Gallons = ${gallonToLiters.toFixed(2)} Litters`
    convertResultTwo.textContent = showResult
    localStorage.setItem("Converter", JSON.stringify(showResult));
}

function showResultThree() {
    let kilosToPounds = inputNumber.value * 2.20462
    let poundsToKilos = inputNumber.value * 0.453592
    let hasil = `${inputNumber.value} Kilos = ${kilosToPounds.toFixed(2)} Pounds | ${inputNumber.value} Pounds = ${poundsToKilos.toFixed(2)} Kilos`
    convertResultThree.textContent = hasil
    localStorage.setItem("Converter", JSON.stringify(showResult));
}