const imoveis = [];

let opcao = '';

do {
    opcao = prompt(
        'Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: ' + imoveis.length +
        '\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair'
    );

    switch (opcao){

        case '1':
            const imovel = {};
            imovel.proprietario = prompt('Nome do proprietário');
            imovel.quartos = prompt('Digite a quantidade de quartos:');
            imovel.banheiros = prompt('Digite a quantidade de banheiros');
            imovel.garagem = confirm('O imóvel possui garagem? (OK = Sim / Cancelar = Não)');

            const confirmacao = confirm(
                'Salvar este imóvel?\n' +
                'Proprietário: ' + imovel.proprietario +
                '\nQuartos: ' + imovel.quartos +
                '\nBanheiros: ' + imovel.banheiros +
                '\nGaragem: ' + (imovel.garagem ? 'Sim' : 'Não')
            );

            if (confirmacao) {
                imoveis.push(imovel);
                alert('Imóvel salvo com sucesso!');
            } else {
                alert('Cadastro cancelado');
            };
            break;

        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    'Imóvel ' + (i + 1) +
                    '\nProprietário: ' + imoveis[i].proprietario +
                    '\nQuartos: ' + imoveis[i].quartos + 
                    '\nBanheiros: ' + imoveis[i].banheiros +
                    '\nPossui Garagem?' + imoveis[i].garagem
                );
            };
            break;

        case '3':
            alert('Saindo...');
            break;

        default:
            alert('Digite um valor válido!');

    }

} while (opcao != '3');