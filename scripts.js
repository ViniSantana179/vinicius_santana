// EXEMPLO DADO EM AULA
document.querySelectorAll("#intro nav ul a").forEach((ele) => {
  ele.addEventListener("click", (event) => {
    event.preventDefault();
    const href = ele.getAttribute("href");
    const alvo = document.querySelector(href);

    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// IMPLEMENTACOES
document.querySelector(".btn-intro").addEventListener("click", (event) => {
  event.preventDefault();
  let alvo = document.getElementById("work");
  alvo.scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelectorAll(".container-footer a").forEach((ele) => {
  ele.addEventListener("click", (event) => {
    event.preventDefault();
    const href = ele.getAttribute("href");
    const alvo = document.querySelector(href);
    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//Adicionando Classe para aumentar tamanho das minhas divs no evento de onFocus
function diminuir(ele) {
  ele.style.height = "150px";
  ele.style.transition = "0.3s";
}

function aumentar(ele) {
  ele.style.height = "300px";
  ele.style.transition = "0.3s";
}

// Abrindo Tela de chat
const chat = document.querySelector(".chat");
const modal = document.querySelector("dialog");

// ABRINDO MODAL NO CLIQUE EM CHAT
chat.addEventListener("click", () => {
  modal.showModal();
});

// EXEMPLO REUTILIZADO PARA QUANDO SE E CLICADO FORA DO MODAL
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
    console.log(e.target);
  }
});

document.querySelector("#enviar-msg").addEventListener("click", () => {
  modal.close();
});
