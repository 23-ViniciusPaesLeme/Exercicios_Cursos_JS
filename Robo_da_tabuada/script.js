// const numero = parseInt(prompt('Informe um número inteiro: '));

// for (let i = 1; i <= 20; i++) {
//     window.alert(`A tabuada do número ${numero} é: \n ${numero} * ${i} = ${numero * i}`);
// };

const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)