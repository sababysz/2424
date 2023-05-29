const checkbox = document.getElementById('check-1');
const ball = document.querySelector('.ball');

checkbox.addEventListener('click', () => {
  localStorage.setItem('checkboxState', checkbox.checked);
  updateBallPosition();
});

window.addEventListener('load', () => {
  const checkboxState = localStorage.getItem('checkboxState');
  if (checkboxState === 'true') {
    checkbox.checked = true;
    updateBallPosition();
  }
});

function updateBallPosition() {
  if (checkbox.checked) {
    ball.classList.add('ball-move');
  } else {
    ball.classList.remove('ball-move');
  }
}




// Defina uma variável global para armazenar o estado do checkbox
let checkboxState = false;

// Seleciona o elemento HTML que tem a classe "background"
const background = document.querySelector('.background');

// Adiciona um ouvinte de eventos para detectar a mudança no estado do checkbox
document.getElementById("check-1").addEventListener("change", function() {
  // Atualize a variável global com o novo estado do checkbox
  checkboxState = this.checked;



  // Atualize a cor de fundo com base no estado atual do checkbox
  if (checkboxState) {
    background.style.backgroundColor = "#FFDDFF";
  } else {
    background.style.backgroundColor = "#000112";
  }
});





var posicaoInicial = window.pageYOffset;

window.addEventListener('scroll', function() {
  var cabecalho = document.querySelector('.cabecalho');
  var posicaoAtual = window.pageYOffset;
  
  if (posicaoAtual < posicaoInicial) {
    cabecalho.classList.remove('oculto');
  } else {
    cabecalho.classList.add('oculto');
  }
  
  posicaoInicial = posicaoAtual;
});








const carouselContainer = document.querySelector('.carousel-container');
const slidesList = document.querySelector('.slides-list');
const slides = Array.from(slidesList.querySelectorAll('.slide'));

// Clonar os slides para criar o efeito infinito
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  slidesList.appendChild(clone);
});

// Ajustar a posição inicial do carrossel
let translateValue = 0;
slidesList.style.transform = `translateX(${translateValue}px)`;

// Função para avançar o carrossel
function nextSlide() {
  translateValue -= slides[0].offsetWidth + 10; // Ajuste o valor do espaçamento entre slides conforme necessário
  slidesList.style.transform = `translateX(${translateValue}px)`;
  slidesList.style.transition = 'transform 0.5s';
}

// Função para retroceder o carrossel
function prevSlide() {
  translateValue += slides[0].offsetWidth + 10; // Ajuste o valor do espaçamento entre slides conforme necessário
  slidesList.style.transform = `translateX(${translateValue}px)`;
  slidesList.style.transition = 'transform 0.5s';
}

