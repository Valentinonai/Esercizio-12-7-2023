//TODO -------Ridimensioniamo la pagina al caricamento----------
window.onload = function () {
  console.log(window.innerHeight);
  window.innerHeight = 700;
  console.log(window.innerHeight);
};

let inserimento;
const addList = (Lista) => {
  const ul = document.getElementById("startList");
  Lista.preventDefault();
  inserimento = Lista.target.elements[0]; //?PRENDO IL VALORE DEL CAMPO TESTO INSERITO
  const form = document.createElement("form");
  const li = document.createElement("li"); //! CREAZIONE ELEMENTI CON TIPI,NOMI E CLASSI
  const check = document.createElement("input");
  const delate = document.createElement("button");
  check.type = "checkbox";
  check.addEventListener("change", checked); //? AGGIUNTO EVENTO SELEZIONE CHECKBOX
  check.classList.add("ckeckBoxStyle");
  form.classList.add("formStyle");
  delate.classList.add("buttonStyle");
  delate.addEventListener("click", cancella); //?   AGGIUNTO EVENTO CLICK Avrei potuto scrivere delate.onclick=cancella
  form.appendChild(delate); //? e fa la stessa di addEventListener tranne che non si possono richiamare più funzioni con lo stesso click
  form.appendChild(check); //! SI POTEVA SCRIVERE ul.INNERHTML+= `<li onclick="FUNZION(event)"></li>`
  li.innerText = inserimento.value;
  form.appendChild(li);
  ul.appendChild(form);
  Lista.target.reset();
};

//!FUNZIONE CHE CANCELLA UNA RIGA DELLA LISTA
const cancella = (event) => {
  const form = document.getElementsByTagName("form");
  event.preventDefault();
  event.target.parentElement.remove(); //TODO    VERSIONE PIù VELOCE
};
//!FUNZIONE CHE DEPENNA UNA RIGA DELLA LISTA
const checked = (event) => {
  event.preventDefault();
  const x = event.target.parentElement;
  const li = x.lastChild;
  if (event.target.checked === true) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
};
