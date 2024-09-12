
const { getContatos, setContatos } = require('./contatos.js');

function atualizarContato(id, novosDados) {
  const contatos = getContatos();
  const index = contatos.findIndex(contato => contato.id === id);
  if (index !== -1) {
    
    if (novosDados.nome) {
      contatos[index].nome = novosDados.nome;
    }
    if (novosDados.telefone) {
      contatos[index].telefone = novosDados.telefone;
    }
    if (novosDados.email) {
      contatos[index].email = novosDados.email;
    }
    
    setContatos(contatos);
  }
}

module.exports = atualizarContato;
