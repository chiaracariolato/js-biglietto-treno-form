let prezzo = document.getElementById("price");
let form = document.querySelector("form");
let inputEta = document.getElementById("finalAge");
let inputKm = document.getElementById("finalKm");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let eta = document.getElementById("age").value.trim();
    let km = document.getElementById("km").value.trim();
    inputEta.innerText = `${eta} anni`;
    inputKm.innerText = `${km} km`;
    // `Per una persona di ${eta} anni che percorre ${km} km il prezzo è ${prezzo}`
    let innerText = visiblePrice(km, 1)

    if(eta < 18) {
        innerText = visiblePrice(km, 0.80)
    } else if(eta >= 65) {
        innerText = visiblePrice(km, 0.60)
    }

    price.innerText = innerText;
    
    form.reset()
})

function visiblePrice(km, discount) {
    return `${((km * 0.21) * discount).toFixed(2)} €`;
}
