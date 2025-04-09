window.alert("Bem-vindo a Calculadora")

const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

window.alert(
    "Resultados: " +
    "\nSoma: " + (valor1 + valor2) +
    "\nSubtração: " + (valor1 - valor2) +
    "\nMultiplicação: " + (valor1 * valor2) +
    "\nDivisão: " + (valor1 / valor2) 
)