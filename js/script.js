// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(filtro = "") {
  const termo = filtro.trim().toLowerCase();
  const filtrados = cursos.filter((c) => c.nome.toLowerCase().includes(termo));

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
    return;
  }

  lista.innerHTML = filtrados
    .map((c) => `<li>${c.nome} — ${c.area}</li>`)
    .join("");
}

render();
busca.addEventListener("input", () => render(busca.value));
