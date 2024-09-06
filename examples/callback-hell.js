// Simulação de chamadas assíncronas usando setTimeout para representar atrasos de rede
function buscarUsuario(callback) {
  setTimeout(() => {
    console.log("Usuário buscado.");
    callback({ id: 1, nome: "João" });
  }, 1000);
}

function buscarEncomendasDoUsuario(usuario, callback) {
  setTimeout(() => {
    console.log(`Encomendas do usuário ${usuario.nome} buscadas.`);
    callback([{ id: 101, produto: "Livro" }, { id: 102, produto: "Notebook" }]);
  }, 1000);
}

function buscarStatusDeEntrega(encomenda, callback) {
  setTimeout(() => {
    console.log(`Status da encomenda ${encomenda.produto} obtido.`);
    callback({ status: "Entregue" });
  }, 1000);
}

// Exemplo de Callback Hell
buscarUsuario((usuario) => {
  buscarEncomendasDoUsuario(usuario, (encomendas) => {
    encomendas.forEach((encomenda) => {
      buscarStatusDeEntrega(encomenda, (status) => {
        console.log(`A encomenda de ${encomenda.produto} está ${status.status}.`);
      });
    });
  });
});
