
//array es una coleccion de tipos de datos
var nombre = 'jenny';

var alumnos = ['Daniela','Paula','Gabriel','Carlos'];

//console.log(alumnos);
//console.log(alumnos[1]); // asi imprimo una posicion en especifico de mi arreglo etentiendo
// que lo que esta entre los corchetes es el indice

//console.log(alumnos.length); //contar lo largo de mi arreglo

const frutas = ['mandarina','fresa','cambur','patilla','lechoza']

for (var i=0; i<frutas.length; i++){      
    console.log(i);
    console.log(frutas[i]);
}

const frutas2 = ['mango',' peras'];

console.log(...frutas2,frutas);