let btnEl = document.getElementById("btn");
let fnameEl = document.getElementById("fname");
let contEl = document.getElementById("cont");

btnEl.addEventListener("click", () => {
  // console.log("click");
  let name = fnameEl.value;
  fnameEl.value = "";
  let contact = contEl.value;
  contEl.value = "";

  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else if (contact.length <= 9) {
    alert("Please Enter correct number");
    return false;
  } else if (contact == "") {
    alert("Contact must be filled out or type proper contact");
    return false;
  }
  let correction = /^[A-Za-z]+$/;

  if (!name.match(correction)) {
    alert("Please Correct Name");
    return false;
  }

  let tableEl = document.getElementById("tbody");
  let newEl = document.createElement("tr");

  newEl.innerHTML = `
  <td class = "td">${name}</td>            
  <td class = "td">${contact}</td>`;

  tableEl.appendChild(newEl);
});
