const { getContatos, setContatos } = require('./contatos.js');

function removerContato(id) {
  const contatos = getContatos();
  const novosContatos = contatos.filter(contato => contato.id !== id);
  setContatos(novosContatos);
}

module.exports = removerContato;
