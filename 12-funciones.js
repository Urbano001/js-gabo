function suma1(a,b){
    //cuerpo de la fuction o conjunto de instruciones que va ejecutar la funcion
    console.log(a+b);
//lo que va dentro de la los parentecis se llaman parametross
}
suma1(15,20);

const suma2= function(a,b) {
    console.log(a+b)
}
suma2(30,12)//argumentos lo de adentro del parentecis

function registro(nombre,apellido = 'quien sabe'){
    //console.log(`${nombre} se ha registrado con exito y su apellido es ${apellido}`);
    document.write(`<b>${nombre} se ha registrado con exito y su apellido es ${apellido}</b`);
}

registro('jorge', 'rojas');

