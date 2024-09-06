// Funções assíncronas que retornam Promises
function buscarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Usuário buscado.");
      resolve({ id: 1, nome: "João" });
    }, 1000);
  });
}

function buscarEncomendasDoUsuario(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Encomendas do usuário ${usuario.nome} buscadas.`);
      resolve([{ id: 101, produto: "Livro" }, { id: 102, produto: "Notebook" }]);
    }, 1000);
  });
}

function buscarStatusDeEntrega(encomenda) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Status da encomenda ${encomenda.produto} obtido.`);
      resolve({ status: "Entregue" });
    }, 1000);
  });
}

// Função assíncrona principal que usa async/await
async function processarEncomendas() {
  try {
    const usuario = await buscarUsuario(); // Espera a busca do usuário
    const encomendas = await buscarEncomendasDoUsuario(usuario); // Espera a busca das encomendas

    for (const encomenda of encomendas) {
      const status = await buscarStatusDeEntrega(encomenda); // Espera o status de cada encomenda
      console.log(`A encomenda de ${encomenda.produto} está ${status.status}.`);
    }

    console.log("Processamento completo.");
  } catch (erro) {
    console.error("Ocorreu um erro:", erro);
  }
}

// Executa a função assíncrona
processarEncomendas();
