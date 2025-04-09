const nome_veiculo_1 = prompt("Digite o nome do veículo 1:");
const velocidade_veiculo_1 = parseInt(prompt("Digite a velocidade em km/h do veículo 1:"));

const nome_veiculo_2 = prompt("Digite o nome do veículo 2:");
const velocidade_veiculo_2 = parseInt(prompt("Digite a velocidade em km/h do veículo 2:"));

if (velocidade_veiculo_1 > velocidade_veiculo_2) {
    window.alert("A velocidade do veículo " + nome_veiculo_1 + " é maior que a do " + nome_veiculo_2);
} else if (velocidade_veiculo_2 > velocidade_veiculo_1) {
    window.alert("A velocidade do veículo " + nome_veiculo_2 + " é maior que a do " + nome_veiculo_1);
} else {
    window.alert("A velocidade do " + nome_veiculo_1 + " e do " + nome_veiculo_2 + " são iguais!");
};