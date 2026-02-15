const sendButton = document.querySelector("button");

sendButton.addEventListener("click", 
function() {
    let eta = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    if(eta < 18) {
        let prezzo = ((km * 0.21) * 0.80);
        console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
    } else if(eta >= 65) {
        let prezzo = ((km * 0.21) * 0.60);
        console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
    } else {
        let prezzo = (km * 0.21);
        console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
    }
})
