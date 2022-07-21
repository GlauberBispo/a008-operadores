let num1 = Number(prompt('Me informe um número:'));
let num2 = Number(prompt('Me informe outro número:'));

console.log('Primeiro número:',num1);
console.log('Segundo número:',num2);

console.log('O primeiro número é maior que o segundo?', num1 > num2);
console.log('O primeiro número é ígual ao segundo?', num1 === num2);
console.log('O primeiro número é divisível pelo segundo?', (num1 % num2) === 0);
console.log('O segundo número é divisível pelo primeiro?', (num2 % num1) === 0);
