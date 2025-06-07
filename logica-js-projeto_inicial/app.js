indiceDeMassaCorporal(1.60,92);

function indiceDeMassaCorporal(altura,peso) {
    let imc = peso / (altura ** 2);
    return console.log(imc);   
}

function converterDolar(dolar) {
    let resultado = dolar * 4.80;
    return console.log(`$${dolar} dolares é Igual á R$${resultado} reais.`);
}
converterDolar(50);

function calcularFatorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function calculoAreaRetangulo(comprimento,largura) {
  let calculoArea = comprimento * largura;
  return calculoArea;
}

let comprimento = 7;
let largura = 4;
let area = calculoAreaRetangulo(comprimento,largura);
console.log(`O calculo da área da sala é de ${area}m².`);

let raio = 7;
function calculoAreaCirculo(raio) {
  let calculoA = 3.14 * raio ** 2;
  return console.log(`Área do círculo: ${calculoA}m².`);
}
calculoAreaCirculo(raio);

function mostrarTabuada(num) {
  for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let num = 7;
mostrarTabuada(num);