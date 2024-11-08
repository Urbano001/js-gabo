function listadoFrutas(fruta1, fruta2,... todasfrutas){
    console.log("la fruta 1 es", fruta1);
    console.log("la fruta 2 es", fruta2);
    console.log(todasfrutas);

}
var fruta2=["mango","uvas","kiwi"];
listadoFrutas(...fruta2,"Fresa","Cambur","patilla");