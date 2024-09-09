const { getContatos } = require('./contatos.js');

function listarContatos() {
  const contatos = getContatos();
  contatos.forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
  });
}

module.exports = listarContatos;
