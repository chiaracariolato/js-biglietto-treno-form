let prezzo = document.getElementById("price");
let form = document.querySelector("form");
let inputEta = document.getElementById("finalAge");
let inputKm = document.getElementById("finalKm");


form.addEventListener("submit", 
function(e) {
    e.preventDefault();
    let eta = document.getElementById("age").value.trim();
    let km = document.getElementById("km").value.trim();
    inputEta.innerText = eta + " anni";
    inputKm.innerText = km + " km";

    if(eta < 18) {
        prezzo.innerText = ((km * 0.21) * 0.80).toFixed(2) + "€";
    } else if(eta >= 65) {
        prezzo.innerText = ((km * 0.21) * 0.60).toFixed(2) + "€";
    } else {
        prezzo.innerText = (km * 0.21).toFixed(2) + "€";
    }
    
    form.reset()
})
