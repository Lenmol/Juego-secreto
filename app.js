let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaDeNumeros = [];



//onclick de intentar verifica el numero que ingresa con el numero secreto
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero secreoto, tus intentos fueron ${intentos} ${(intentos ==1)? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //numero incorecto
        if (numeroSecreto < numeroDeUsuario){
            asignarTextoElemento("p", "El numero es menor");
        } else {
            asignarTextoElemento("p", "El numero es mayor");
        }
    intentos++;
    limpiarCaja();
    }
    return;
}

//al precionar intentar limpia el numeroSecreto, de la caja
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

//son los elementos principales que aparecen en la pagina
function reinicioElementos(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}



//al apretar nuevo juego reinicia el juego completamente
function iniciarJuego(){
    //reinicio los textos
    //limpiar contador
    //generar nuevo numero secreto
    reinicioElementos();
    //quitar nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    //limpiar caja
    limpiarCaja();
    
}

//crea el numero secreto de 1 a 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaDeNumeros);

    //Cambia el nuemero generado para que no se repita
    if (listaDeNumeros.length == numeroMaximo){
        listaDeNumeros = [];
        return numeroGenerado
    }else{
        if (listaDeNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDeNumeros.push(numeroGenerado);
            return numeroGenerado ;
        }
    }
}

//con esto se puede crear cualqueir texto de cualquier tipo 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//invoca la funcion que muestra como se ve la pagina originalmente
reinicioElementos();