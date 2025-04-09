const turista = prompt('E aí, turista! Qual é o seu nome?');
let cidades = "";
let contagem = 0;

let continuar = prompt('Você visitou alguma cidade? (sim/não)');

while (continuar === 'sim') {
    let cidade = prompt('Qual o nome da cidade que você visitou?');
    cidades += " - " + cidade  + "\n";
    contagem ++;
    continuar = prompt('Você visitou alguma outra cidade? (sim/não)');
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )