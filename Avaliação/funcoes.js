
const listarContatos = require('./listarContatos.js');
const adicionarContato = require('./adicionarContato.js');
const atualizarContato = require('./atualizarContato.js');
const removerContato = require('./removerContato.js');
const prompt = require('prompt-sync')();
const { getContatos } = require('./contatos.js');

function adicionarNovoContato() {
  const id = parseInt(prompt('Digite o ID do novo contato: '), 10);
  const contatos = getContatos();
  const contatoExistente = contatos.find(contato => contato.id === id);

  if (contatoExistente) {
    console.log('ID já existe!');
    const escolha = prompt('Deseja (A) Atualizar o contato existente ou (M) Mudar o ID? [A/M]: ').toUpperCase();

    if (escolha === 'A') {
      const nome = prompt('Digite o novo nome: ');
      const telefone = prompt('Digite o novo telefone: ');
      const email = prompt('Digite o novo email: ');
      atualizarContato(id, { nome, telefone, email });
      console.log('Contato atualizado com sucesso!');
    } else if (escolha === 'M') {
      console.log('Por favor, forneça um novo ID.');
      adicionarNovoContato();
    } else {
      console.log('Opção inválida!');
    }
  } else {
    const nome = prompt('Digite o nome do novo contato: ');
    const telefone = prompt('Digite o telefone do novo contato: ');
    const email = prompt('Digite o email do novo contato: ');

    adicionarContato({ id, nome, telefone, email });
    console.log('Contato adicionado com sucesso!');
  }
}

function atualizarContatoExistente() {
  const id = parseInt(prompt('Digite o ID do contato a ser atualizado: '), 10);
  const nome = prompt('Digite o novo nome (deixe em branco para manter o atual): ');
  const telefone = prompt('Digite o novo telefone (deixe em branco para manter o atual): ');
  const email = prompt('Digite o novo email (deixe em branco para manter o atual): ');

  const novosDados = {};
  if (nome) novosDados.nome = nome;
  if (telefone) novosDados.telefone = telefone;
  if (email) novosDados.email = email;

  atualizarContato(id, novosDados);
  console.log('Contato atualizado com sucesso!');
}

function removerContatoExistente() {
  const id = parseInt(prompt('Digite o ID do contato a ser removido: '), 10);
  removerContato(id);
  console.log('Contato removido com sucesso!');
}

module.exports = {
  adicionarNovoContato,
  atualizarContatoExistente,
  removerContatoExistente,
  listarContatos
};
