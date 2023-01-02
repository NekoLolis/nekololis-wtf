
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));


async function open_terminal(){
  createText("Waking Nekos..");
  await delay(1000);
  createText("Successful.");
  await delay(850);
  createText("Waking Zensu..");
  await delay(1000);
  createText("Telling The FBI About Syfes Fraudulent Activities..");
  await delay(750);
  createText("Loading Page..");

  await delay(500);
  window.location.href = "page";
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");

  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
