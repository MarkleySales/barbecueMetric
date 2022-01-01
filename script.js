let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calc(){
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;
    
    let qtdTotalBeef = beefPP(duration) * adults + (beefPP(duration)/2 * kids);
    let qtdTotalBeer = beerPP(duration) * adults;
    let qtdTotalDrinks = drinksPP(duration) * adults + (drinksPP(duration)/2 * kids);

    result.innerHTML = `<p>${qtdTotalBeef}g de carne</p>`
    result.innerHTML += `<p>${qtdTotalBeer}ml de cerveja</p>`
    result.innerHTML += `<p>${qtdTotalDrinks}ml de bebida</p>`
}

function beefPP(duration){
    if (duration >= 6){
        return 650;
    }else{
        return 400;
    }
}
function beerPP(duration){
    if (duration >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function drinksPP(duration){
    if (duration >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
