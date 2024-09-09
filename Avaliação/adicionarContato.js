
const { getContatos, setContatos } = require('./contatos.js');

function adicionarContato(contato) {
  const contatos = getContatos();
  contatos.push(contato);
  setContatos(contatos);
}

module.exports = adicionarContato;
