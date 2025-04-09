const nome = prompt("Digite o nome do recruta: ");
const sobrenome = prompt("Digite o sobrenome: ");
const campo_de_estudo = prompt("Digite o campo de estudo do recruta: ");
const ano_nascimento = parseInt(prompt("Digite o ano de nascimento: "));

const data = new Date();
const ano = data.getFullYear();

window.alert(
    "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " + nome + ' ' + sobrenome +
    "\nCampo de estudo: " + campo_de_estudo +
    "\nIdade: " + (ano - ano_nascimento)
);