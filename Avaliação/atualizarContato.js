
const { getContatos, setContatos } = require('./contatos.js');

function atualizarContato(id, novosDados) {
  const contatos = getContatos();
  const index = contatos.findIndex(contato => contato.id === id);
  if (index !== -1) {
    contatos[index] = { ...contatos[index], ...novosDados };
    setContatos(contatos);
  }
}

module.exports = atualizarContato;
