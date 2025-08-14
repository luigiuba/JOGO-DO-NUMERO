alert('Seja bem vindo ao GAME MORTAL DO NUMERO SECRETO!');
nomeUser = prompt('Antes de começarmos gostariamos de perguntar qual o seu nome');
alert(`Saudações ${nomeUser}`);
console.log('boas vindas dev ' + nomeUser);

/// aleatoriza um numero inteiro digitado com parseint
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('o numero aqui dev shhhhh ' + numeroSecreto);
let chute;
let tentativas = 1;

// enquanto != nao for igual
while (chute != numeroSecreto) {
    chute = prompt(`qual o teu chute ${nomeUser} ? ta entre 1 e ${numeroMaximo}`);
if (chute == numeroSecreto);
    {
     break; 
} else {
    if (chute < numeroSecreto) {
        alert('Pouquinho mais que ' + chute);
    } else {
        alert('Pouquinho menos que ' + chute);
    }
    // para atribuir mais 1 utilizar ++
    tentativas ++;
    }
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Boa!! ${nomeUser}, o numero era ${numeroSecreto} mas tu usou ${tentativas} ${palavraTentativa
}`);

