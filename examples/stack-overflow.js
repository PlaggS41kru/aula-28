function chamarRecursivamente() {
  console.log("Chamando a função...");
  chamarRecursivamente(); // Chama a si mesma sem condição de parada
}

// Executa a função que causa o stack overflow
chamarRecursivamente();
