/*nombre= 'curso de programcion';
precio= 40;
disponible = true;*/

/*const curso = {
nombre: 'programacion',
duracion: '40 horas',
disponible: true,
informacion :{    
    modulos: 15,
    modalidad:{     
        presencial:true,
        online:true
}

}
}
console.log(curso)
console.log(curso.informacion);*/

const carro = {
    nombre: 'BMW M4',
    potencia: '375 (510)/650',
    motor: '6 cilindros M TwinPower Turbo (bi-turbo) / 2,993 cm / 510 hp (6,250 rpm) / 650 Nm (2,750 – 5,500 rpm)',
    velocidades: '8 velocidades',
    aceleracion: 'De 0 A 100km/h en 3,9',
    informacion:{
        Precio: '126.250$',
        entrea:{   
        entrega: 'Recibir en la tienda mas cercana'
    }
    }
}

const { informacion : {Precio},informacion, informacion:{entrea:{entrega} }} = carro;
console.log (Precio);
console.log(informacion);
console.log(entrega);


/*carro.descripcion='aprende desde cero a programar' //agrego nuevas propiedades a mi objeto

console.log(carro);
delete carro.descripcion; //borro propiedades de  mi objeto

console.log(carro);
console.log(carro.informacion)*/