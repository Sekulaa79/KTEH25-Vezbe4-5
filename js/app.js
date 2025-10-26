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

const emailInput = document.querySelector("#email-input");

function dodajKorisnika(ime, email){
    //1 kreira novi tr u tbody
    const red = document.createElement('tr');
    red.innerHTML= `
    <td>${ime}</td>
    <td>${email}</td>
    <td><button class="delete-btn">Obrisi</button></td>
    `
    tableBody.appendChild(red);
    
}

forma.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Forma je poslata");

    const imeVrednost = imeInput.value.trim();
    const emailVrednost = emailInput.value.trim();

    console.log("Ime>", imeVrednost,emailVrednost);
    
    dodajKorisnika(imeVrednost,emailVrednost);


    //ime.value = "";
    //email.value= "";
    forma.reset();

}
)