/*var total=0;
function agregarcarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return impuesto=total*1.16;

}

total= agregarcarrito(300);
agregarcarrito(600);
agregarcarrito(1200);
impuesto = calcularImpuesto(total);
console.log(`El total a pagar es ${total} y el impuesto es ${impuesto}`);
document.write(`<h1>El total a pagar es ${total} y el impuesto es ${impuesto}<h1>`);*/

var compras = prompt('deseas comprar','si')
const catalogo= [
    {ID:1, producto: 'Pera', Precio: 150},
    {ID:2, producto: 'mango', Precio: 200},
    {ID:3, producto: 'manzana', Precio: 300},
    {ID:4, producto: 'harina', Precio: 300},
    {ID:5, producto: 'agua', Precio: 250},
    {ID:6, producto: 'carner', Precio: 450},
]



if (compras="si"){
    mostrarCatalogo(catalogo);
} else (
    console.log('no quiero comprar')
)


function mostrarCatalogo(catalogo){
    for (let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i]);

}

var compras2 = prompt ('ingrese un id',0);
console.log(`haz agregado el carrito el producto con el id ${compras2}`);
}
mostrarCatalogo(catalogo);


