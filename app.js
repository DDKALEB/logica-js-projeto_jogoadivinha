alert('Boas Vindas ao Jogo do Numero Secreto');
let numeroMaximo = 5000;
let numeroScreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroScreto);
let chute;
let tentativas = 1;

//enquanto = while, chute não for igual a Num Secreto continue tentando
while (chute != numeroScreto) {
  chute = prompt(`Escolha um Numero entre 1 e ${numeroMaximo}`);
  if (chute == numeroScreto) {
    //QUERO parar o While se chute for igual
    break;
  } else {
    if (chute > numeroScreto) {
      alert(`O numero Secteto é menor que o ${chute}`);
    }
    //alert('Vc errou :( tente novamete');
    //alert('O numero secreto era ' + numeroScreto + ', mas Vc escolheu ' + chute);
    else {
      alert(`O numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}

// Operador ternario
// Caso tentativas seja maior que 1, '?' escreva/use tentativas, caso contrario ':' use tentativa.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(
  `Isso ai! Você descobriu o numero Secreto ${numeroScreto} com ${tentativas} ${palavraTentativa}.`
);
/*
if (tentativas > 1) {
  alert(
    `Isso ai! Você descobriu o numero Secreto ${numeroScreto} com ${tentativas} tentativas.`
  );
} else {
  alert(
    `Isso ai! Você descobriu o numero Secreto ${numeroScreto} com ${tentativas} tentativa.`
  );
}
*/

/*alert(
  `O Número secreto é: ${numeroScreto} vc descobriu com ${tentativas} tentativas`
);
*/
