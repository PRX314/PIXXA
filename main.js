
function scegliRandom(lista, quanti) {
  const shuffled = [...lista].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, quanti);
}

function generaNomeDaIngredienti(ingredienti) {
  const i = (x) => ingredienti.includes(x);
  if (i("Nutella") && i("Popcorn")) return "Dolce Esplosione";
  if (i("Wurstel") && i("Ananas")) return "L'Americana Confusa";
  if (i("Gomme da masticare")) return "Errore di Laboratorio";
  return "Pizza Misteriosa";
}

function generaPizza() {
  const livello = document.getElementById("livelloSelect").value;
  let nome = "", ingredienti = [], provenienza = "", note = "";

  if (livello === "classica") {
    const p = scegliRandom(pizzeClassiche, 1)[0];
    nome = p.nome;
    ingredienti = p.ingredienti;
note = p.note;
  } else if (livello === "leggenda") {
    const p = scegliRandom(pizzeLeggendarie, 1)[0];
    nome = p.nome;
    ingredienti = p.ingredienti;
    provenienza = p.provenienza;
    note = p.note;

  } else {
    let lista;
    if (livello === "americana") lista = ingredientiAmericana;
    if (livello === "pazza") lista = ingredientiPazza;
    if (livello === "chimica") lista = ingredientiChimica;
    ingredienti = scegliRandom(lista, Math.floor(Math.random() * 4) + 2);
    nome = generaNomeDaIngredienti(ingredienti);
  }

  let html = `<h2>🍕 ${nome}</h2>`;
  if (provenienza) html += `<p><strong>Provenienza:</strong> ${provenienza}</p>`;
  html += `<p><strong>Ingredienti:</strong> ${ingredienti.join(", ")}</p>`;
  if (note) html += `<p class="note">📝 ${note}</p>`;
  document.getElementById("pizzaResult").innerHTML = html;
}
