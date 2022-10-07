"use strict";

// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.



const btn = document.getElementById('calcola');

const calcolaBiglietto = function (){
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    console.log(km);
    console.log(age);

// costo biglietto
    let costokm = 0.21;
    let costoBiglietto = (costokm * km);
    console.log(costoBiglietto);

// calcolo sconto
    let scontoUnder = 18;
    let scontoOver = 65;
    let costoFinale;
    if(age < scontoUnder){
        costoFinale = (costoBiglietto * 0.8).toFixed(2);
    } else if (age >= scontoOver){
        costoFinale = (costoBiglietto * 0.6).toFixed(2);
    } else {
        costoFinale = costoBiglietto.toFixed(2);
    }

    console.log(costoFinale);

    document.getElementById("prezzo").innerHTML = costoFinale + '€';
    document.getElementById("distanza").innerHTML = km;
    document.getElementById("eta").innerHTML = age;
    document.getElementById("prezzofinale").innerHTML = costoFinale + '€';    
}

const openBiglietto = function (){
        const menu = document.getElementById('biglietto');
        menu.classList.remove('d-none');
        menu.classList.add('show');
    
    }
    const bottone = document.getElementById('calcola')
    
bottone.addEventListener('click', openBiglietto);
btn.addEventListener('click', calcolaBiglietto);