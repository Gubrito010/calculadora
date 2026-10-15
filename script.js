const botao = document.getElementById("btn-calcular");

botao.addEventListener("click", function () {
  const nota1 = Number(document.getElementById("nota-1").value);
  const nota2 = Number(document.getElementById("nota-2").value);
  const nota3 = Number(document.getElementById("nota-3").value);
  const nota4 = Number(document.getElementById("nota-4").value);

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  alert("Sua média é: " + media);
});

const botaoAdicionar = document.getElementById("btn-adicionar");

const listaNotas = document.getElementById("lista-notas");

botaoAdicionar.addEventListener("click", function () {
  const quantidade = document.querySelectorAll(".nota__input").length;

  const novaNota = document.createElement("div");

  novaNota.className = "nota";

  novaNota.innerHTML = `
        <label>Nota ${quantidade + 1}</label>
        <input type="number" class="nota__input" min="0" max="10" placeholder="0 a 10">
    `;

  listaNotas.appendChild(novaNota);
});
