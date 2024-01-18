alert('Boas Vindas ao Jogo do Numero Secreto');
let numeroScreto = 5;
console.log(numeroScreto);
let chute;
let tentativas = 1;

//enquanto = while, chute não for igual a Num Secreto continue tentando
while (chute != numeroScreto) {
  chute = prompt(' Escolha um Numero entre 1 e 10');
  if (chute == numeroScreto) {
    alert(
      `O Número secreto é: ${numeroScreto} vc descobriu com ${tentativas} tentativas`
    );
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
