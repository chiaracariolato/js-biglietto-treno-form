let prezzo = document.getElementById("price");
let form = document.querySelector("form");
let inputKm = document.getElementById("finalKm");
let inputNome = document.getElementById("finalName");
let inputCognome = document.getElementById("finalSurname");
let cancelButton = document.getElementById("secondary");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("nome").value;
    let surname = document.getElementById("cognome").value;
    let age = document.getElementById("eta").value;
    let km = document.getElementById("km").value.trim();
    inputNome.innerText = `${name}`;
    inputCognome.innerText = `${surname}`;
    inputKm.innerText = `${km} km`;
    let innerText = visiblePrice(km, 1)

    if(age == 1) {
        innerText = visiblePrice(km, 0.80)
    } else if(age == 3) {
        innerText = visiblePrice(km, 0.60)
    }

    price.innerText = innerText;

    cancelButton.disabled = false;
    
    form.reset()
})

function visiblePrice(km, discount) {
    return `${((km * 0.21) * discount).toFixed(2)} €`;
}

cancelButton.addEventListener("click", () => {
    form.reset()
    inputNome.innerText = "-";
    inputCognome.innerText = "-";
    inputKm.innerText = "-";
    price.innerText = "-";
})

