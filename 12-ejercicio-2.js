function mostrarEntre2Numeros() {
    
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    console.log("Los números entre " + numeroInicial + " y " + numeroFinal + " son:");

    for (let i = numeroInicial; i <= numeroFinal; i++) {
      if (i  !== 0) {
        console.log("ep = " + i);
      }
    }
  }
  
  mostrarEntre2Numeros();