const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let countLetras1 = 0;
let countLetras2 = 0;
let countBar1 = 0;
let countBar2 = 0;

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let bar1 = document.querySelector("#e1");
let bar2 = document.querySelector("#e2");
let nome1 = "Natacha Azevedo";
let nome2 = "Criatividade & Funcionalidade";
let timeLetras1 = 100;
let timeBar = 300;

let palavra = document.createElement("span");
palavra.classList.add("word");
h1.appendChild(palavra);

let interval1 = setInterval(() => {
  let letraAtual = nome1[countLetras1];
  let span = document.createElement("span");
  span.textContent = letraAtual;
  span.classList.add("letter");
  span.style.color = colors[countLetras1 % colors.length];
  palavra.appendChild(span);

  if (letraAtual === " ") { // Se letra atual for espaço em branco
    palavra.appendChild(document.createTextNode(" ")); // Adiciona um espaço em branco
  } else if (nome1[countLetras1 + 1] !== " ") { // Se a próxima letra não for espaço em branco
    setTimeout(() => {
      span.style.color = "#ded9e4";
    }, timeLetras1);
  }

  countLetras1++;

  if (countLetras1 == nome1.length) {
    bar1.style.display = "none";
    setTimeout(() => {
      h1.childNodes.forEach((word) => {
        word.childNodes.forEach((span) => {
          span.style.color = "#ded9e4";
        });
      });
    }, timeLetras1);
    clearInterval(interval1);
    segundoTexto();
  }
}, timeLetras1);



function segundoTexto() {
  bar2.style.opacity = "1";
  let interval2 = setInterval(() => {
    h2.textContent += nome2[countLetras2];
    countLetras2++;
    if (countLetras2 == nome2.length) {
      clearInterval(interval2);
      setInterval(() => {
        if (countBar2 % 2 == 0) {
          bar2.style.opacity = "0";
        } else {
          bar2.style.opacity = "1";
        }
        countBar2++;
      }, timeBar);
    }
  }, timeLetras1);
}

let letters = document.querySelectorAll("h1 span");

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  let className = "color-" + i;
  let delay = i * 50;
  letter.style.animationDelay = delay + "ms";
  letter.classList.add(className);
}

// Animação de scroll
document.addEventListener("scroll", function () {
  var ids = ["about", "projects"];
  var elements = new Array();

  for (const id of ids) {
    elements.push(document.getElementById(id));
  }

  for (let element of elements) {
    const rect = element.getBoundingClientRect();

    // Obtém a altura da janela
    const windowHeight = window.innerHeight;

    // Calcula a posição vertical central da janela
    const windowCenter = windowHeight / 2;

    if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
});
