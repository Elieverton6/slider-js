let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let inputThree = document.getElementById("inputThree");
let inputFour = document.getElementById("inputFour");
let inputFive = document.getElementById("inputFive");

let nameVehicleTxt = document.getElementById("nameVehicle");
let imgCarros = document.getElementById("imgCarros");

nameVehicleTxt.innerHTML = "CARRO 1"

inputOne.addEventListener('click', function() {
    imgCarros.src = "carroOne.jpg";
    nameVehicleTxt.innerHTML = "CARRO 1"
});

inputTwo.addEventListener('click', function() {
    imgCarros.src = "carroTwo.jpg";
    nameVehicleTxt.innerHTML = "CARRO 2"    
});

inputThree.addEventListener('click', function() {
    imgCarros.src = "carroThree.jpg";
    nameVehicleTxt.innerHTML = "CARRO 3"    
});

inputFour.addEventListener('click', function() {
    imgCarros.src = "carroFour.jpg";
    nameVehicleTxt.innerHTML = "CARRO 4"    
});

inputFive.addEventListener('click', function() {
    imgCarros.src = "carroFive.jpg";
    nameVehicleTxt.innerHTML = "CARRO 5"    
});