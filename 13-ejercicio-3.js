const num1 = parseInt(prompt("Introducir un numero para tu tabla de multiplicar",0));
const titulo = `la tabla de multiplicare ${num1}`;
document.getElemenbyId("ti").innerHTML = titulo;

for( let i=0; i <=10; i++) {
    resultado=`${num1} * ${i}` , num1 * i;
    html.document.getElemenbyId("multi")= resultado;
}