
const listarContatos  = require('./listarContatos.js');
const { adicionarNovoContato, atualizarContatoExistente, removerContatoExistente } = require('./funcoes.js');
const prompt = require('prompt-sync')();

function menu() {
  while (true) {
    console.log('\nMenu:');
    console.log('1. Listar Contatos');
    console.log('2. Adicionar Contato');
    console.log('3. Atualizar Contato');
    console.log('4. Remover Contato');
    console.log('5. Sair');
    
    const escolha = prompt('Escolha uma opção: ');

    switch (escolha) {
      case '1':
        listarContatos();
        break;
      case '2':
        adicionarNovoContato();
        break;
      case '3':
        atualizarContatoExistente();
        break;
      case '4':
        removerContatoExistente();
        break;
      case '5':
        console.log('Saindo...');
        process.exit();
        break;
      default:
        console.log('Opção inválida! Tente novamente.');
    }
  }
}

menu();
