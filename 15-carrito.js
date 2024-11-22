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
const catalago= [
    {producto: 'Pera', Precio: 150},
    {producto: 'mango', Precio: 200},
    {producto: 'manzana', Precio: 300},
    {producto: 'harina', Precio: 300},
    {producto: 'agua', Precio: 250},
    {producto: 'carner', Precio: 450},
]



if (compras){
    mostrarCatalogo(catalogo);
} else (
    console.log('no quiero comprar')
)


function mostrarCatalogo(catalogo){
    for (let i = 0; i < catalogo.length; i++){
        var productoadd = prompt (catalogo[i]);

}
console.log('selecciones un producto por id');
var compras = prompt ('ingrese un id',0);
}
mostrarCatalogo(catalago);


