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
let timeLetras2 = 75;
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



function shuffleString(str) {
  let arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function segundoTexto() { // Animação do segundo texto
  bar2.style.opacity = "1"; // Mostra a barra
  let originalOrder = nome2.split(""); // Separa o nome em letras
  let shuffledName = shuffleString(nome2); // Embaralha as letras
  let remainingLetters = shuffledName.split(""); // Separa as letras embaralhadas
  let interval2 = setInterval(() => { // Intervalo de tempo para mostrar as letras
    let nextLetter = remainingLetters.shift(); // Pega a próxima letra
    if (nextLetter !== undefined) { // Se a próxima letra não for indefinida
      h2.textContent += nextLetter; // Adiciona a letra ao texto
      countLetras2++; // Conta a letra
    }
    if (countLetras2 == nome2.length){  // Se a contagem de letras for igual ao tamanho do nome
      clearInterval(interval2); // Para o intervalo
      let restoreInterval = setInterval(() => { // Intervalo de tempo para restaurar a ordem original
        let nextLetter = originalOrder.shift(); // Pega a próxima letra
        if (nextLetter !== undefined) { // Se a próxima letra não for indefinida
          h2.textContent = h2.textContent.slice(0, countLetras2 - 1) + nextLetter + h2.textContent.slice(countLetras2); // Substitui a letra
          countLetras2--; // Conta a letra
        } 
        if (countLetras2 == 0) { // Se a contagem de letras for igual a zero
          clearInterval(restoreInterval); // Para o intervalo
          h2.textContent = h2.textContent.split("").reverse().join(""); // Inverte o texto
          setInterval(() => { // Intervalo de tempo para piscar a barra
            if (countBar2 % 2 == 0) { // Se a contagem da barra for par
              bar2.style.opacity = "0"; // Esconde a barra
            } else { // Se a contagem da barra for ímpar
              bar2.style.opacity = "1"; // Mostra a barra
            } 
            countBar2++; // Conta a barra
          }, timeBar); // Tempo da barra
        }
      }, timeLetras2); // Tempo das letras
    }
  }, timeLetras1); // Tempo das letras
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
