import persons from "./Persons.json" with { type: "json" };
console.log(persons);

// "id": 6,
// "name": "Sophie Dubois",
// "groesse": 168,
// "geburtsdatum": "1994-03-10",
// "herkunft": "Frankreich",
// "gewicht": 59.5 -->

function renderPersons() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    for (const person of persons) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.groesse}</td>
            <td>${person.geburtsdatum}</td>
            <td>${person.herkunft}</td>
            <td>${person.gewicht}</td>
        `;
        tbody.appendChild(tr);
    }
}

const thHeight = document.querySelector("#height");
thHeight.addEventListener("click", () => {
    console.log("height clicked!!");
    persons.sort((a, b) => a.groesse - b.groesse);
    renderPersons();
});


const id = document.querySelector("#id");
id.addEventListener("click", () => {
    console.log("id clicked!!");
    persons.sort((a, b) => a.id - b.id);
    renderPersons();
   
});

const name = document.querySelector("#name");
name.addEventListener("click", () => {
    console.log("name clicked!!");
    persons.sort((a, b) => a.name.localeCompare(b.name));
    renderPersons();
});

const gebjahr = document.querySelector("#gebjahr");
gebjahr.addEventListener("click", () => {
    console.log("gebjahr clicked!!");
    persons.sort((a, b) => new Date(a.geburtsdatum) - new Date(b.geburtsdatum));
    renderPersons();
});

const herkunft = document.querySelector("#herkunft");
herkunft.addEventListener("click", () => {
    console.log("herkunft clicked!!");
    persons.sort((a, b) => a.herkunft.localeCompare(b.herkunft));
    renderPersons();
});

const gewicht = document.querySelector("#gewicht");
gewicht.addEventListener("click", () => {
    console.log("gewicht clicked!!");
    persons.sort((a, b) => a.gewicht - b.gewicht);
    renderPersons();
});



window.renderPersons = renderPersons;
renderPersons();