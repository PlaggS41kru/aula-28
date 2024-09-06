function calcularSoma() {
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  console.log(`A soma de 1 a 100 é: ${soma}`);
}

function exibirMensagem() {
  console.log("Cálculo completo!");
}

// Execução do código de maneira single-threaded
calcularSoma();
exibirMensagem();
