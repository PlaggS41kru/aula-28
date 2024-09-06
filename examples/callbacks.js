// Função principal que inicia o cronômetro
function iniciarCronometro(tempoEmSegundos, callback) {
  let tempoRestante = tempoEmSegundos;

  // Função que será chamada a cada segundo
  const intervalo = setInterval(() => {
    console.log(`Tempo restante: ${tempoRestante} segundos`);

    if (tempoRestante === 0) {
      clearInterval(intervalo); // Para o cronômetro quando o tempo acabar
      callback(); // Chama o callback quando o cronômetro atinge zero
    } else {
      tempoRestante--; // Decrementa o tempo
    }
  }, 1000); // Intervalo de 1 segundo
}

// Função de callback que será chamada quando o cronômetro terminar
function tempoEsgotado() {
  console.log("O tempo acabou!");
}

// Inicia o cronômetro com 5 segundos
iniciarCronometro(5, tempoEsgotado);
