    function mOver(obj) {
        obj.innerHTML = "Aprendiendo en 2024"
        const boton = document.querySelector(".boton");
        boton.classList.add('red');

    }

    function mOut(obj) {
    obj.innerHTML = "java script Moderno"
    const boton = document.querySelector(".boton");
    boton.classList.add('ancho');
    }

    function displayDate() {
        document.getElementById("fecha").innerHTML = Date();
    
}

function saludar () {
    document.getElementById("saludo").innerHTML = 'holaaaaaaaa prefe jenny';
}

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toupperCase(); //PARA MAYUSCULAS
    x.value = x.value.tolowerCase(); //PARA MINUSCULAS
}

document.getElementById("myButon").addEventListener("click", mostrar);

function mostrar() {
    alert("Hola Mundo");
}

var x = document.getElementById("myButon");
x.addEventListener("click", mostrar);
x.addEventListener("click", quieroRegalo);
x.addEventListener("mouseover", cambiaColor);
x.addEventListener("mouseout", colorBlue);
function mostrar() {
    alert("Ya es navidad");
}

function quieroRegalo() {
    alert("Te damos un regalo para ti");
}
function cambiaColor() {
    x.classList.add("red"); }

function colorBlue() {
    x.classList.remove("red");
    x.classList.add("blue");
}

var y = document.getElementById("letras");

y.addEventListener("mouseover", cambiaLetra);
y.addEventListener("click", cambiatamano);

function cambiaLetra() {
    y.classList.add("textred");
}

function cambiatamano() {
    y.classList.add("textbig");
}

const para = document.createElement ("p");
const node = document.createTextNode ("this is new");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);