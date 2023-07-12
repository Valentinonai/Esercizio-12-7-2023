let inserimento;
const ul = document.getElementById("startList");
let cont = 0; //! CONTATORE PER ATTRIBUIRE UN NOME AGLI ELEMENTI
const addList = (Lista) => {
  cont += 1;
  console.log(cont);
  Lista.preventDefault();
  inserimento = Lista.target.elements[0]; //?PRENDO IL VALORE DEL CAMPO TESTO INSERITO
  console.log(inserimento.value);

  const form = document.createElement("form");
  const li = document.createElement("li"); //! CREAZIONE ELEMENTI CON TIPI,NOMI E CLASSI
  const check = document.createElement("input");
  check.type = "checkbox";
  check.name = cont;
  check.addEventListener("change", checked); //? AGGIUNTO EVENTO SELEZIONE CHECKBOX
  check.classList.add("ckeckBoxStyle");
  form.classList.add("formStyle");
  const delate = document.createElement("button");
  delate.classList.add("buttonStyle");
  delate.addEventListener("click", cancella); //?   AGGIUNTO EVENTO CLICK
  delate.name = cont;
  form.name = cont;
  form.appendChild(delate);
  form.appendChild(check); //! SI POTEVA SCRIVERE ul.INNERHTML= `<li onclick="FUNZION(event)"></li>`
  li.innerText = inserimento.value;
  li.name = cont;
  form.appendChild(li);
  ul.appendChild(form);
  console.dir(delate);
  Lista.target.reset();
};

//!FUNZIONE CHE CANCELLA UNA RIGA DELLA LISTA
const cancella = (event) => {
  const form = document.getElementsByTagName("form");
  event.preventDefault();
  for (let i = 0; i < form.length; i++) {
    if (form[i].name === event.target.name) {
      form[i].remove();
      console.log(form[i]);
    }
  }
};
//!FUNZIONE CHE DEPENNA UNA RIGA DELLA LISTA
const checked = (event) => {
  const li = document.getElementsByTagName("li");
  event.preventDefault();
  console.dir(li);
  if (event.target.checked === true) {
    for (let i = 0; i < li.length; i++) {
      const nome = li[i].name;
      const N = parseInt(event.target.name);
      if (nome === N) {
        li[i].style.textDecoration = "line-through";
      }
    }
  } else {
    for (let i = 0; i < li.length; i++) {
      const nome = li[i].name;
      const N = parseInt(event.target.name);
      if (nome === N) {
        li[i].style.textDecoration = "none";
      }
    }
  }
};
