const naslov = document.getElementById('main-title');
console.log(naslov);



const prviInput = document.querySelector("input");
console.log(prviInput);

const sviInputiTag = document.getElementsByTagName("input");
const sviInputiSelektor = document.querySelectorAll("input");

console.log("Svi inputi tag", sviInputiTag);
console.log("Svi inputi selektor", sviInputiSelektor);

/*console.log("Prolaz krog tag elemente:")
sviInputiTag.array.forEach(element => {
    console.log("Input polje tag>", element)
});*/

console.log("Prolaz krog node elemente:")
sviInputiSelektor.forEach(element => {
    console.log("Input polje selektor>", element)
});

naslov.textContent = 'Lista aktivnih korisnika';
naslov.style.color = "blue";
const imeInput = document.querySelector("#name-input");
imeInput.setAttribute("placeholder", "Unesti ime i prezime");

const forma = document.querySelector("#user-form");
const tableBody = document.querySelector("#user-table tbody");

forma.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Forma je poslata");

    const ime = document.querySelector("#name-input");
    const imeVrednost = ime.value;

    const email = document.querySelector("#email-input");
    const emailVrednost = email.value;

    console.log("Ime>", imeVrednost);
    console.log("Email>",emailVrednost);

    ime.value = "";
    email.value= "";
    

}
)