function mostrarImpares() {

    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    console.log("entre " + numeroInicial + " y " + numeroFinal + " son:");
    for (let i = numeroInicial; i <= numeroFinal; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  mostrarImpares();