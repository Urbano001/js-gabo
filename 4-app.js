const calculadora = {
    sumar: function(n1, n2) { 
        console.log(`La suma de a: ${n1} mas b: ${n2} =`, n1+ n2);
},
    restar: function(n1, n2) {
        console.log(`La resta de a: ${n1} menos b: ${n2} =`,n1- n2);},
    multiplicar: function(n1, n2) {
        console.log(`La multiplicación de a: ${n1} por b: ${n2} =`, n1 *n2);},
    dividir: function(n1, n2) {
        console.log(`La división de a: ${n1} entre b: ${n2} =`, n1/ n2);}
}

calculadora.sumar(5, 3);
calculadora.restar(10, 5);
calculadora.multiplicar(2, 7);
calculadora.dividir(20, 4);
