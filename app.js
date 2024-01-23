// Inicio del Juego
alert('Bienvenido al juego del número secreto');

// Variables
let numeroUsuario = 0;
let numeroSecreto = 0;
let numeroDeIntentos = 0;
let numeroDeJuego = 0;

//Establecer No de numeros
numeroDeJuego = parseInt(prompt('Ingrese a cuantos numeros quiere jugar'));
numeroSecreto = Math.floor(Math.random()*numeroDeJuego)+1;
console.log(numeroSecreto);

// Establecer No de Intentos
numeroDeIntentos = prompt('Ingerse a cuantos intenos quire jugar');
console.log(numeroDeIntentos);

// Ciclo While
while( numeroUsuario != numeroSecreto ){

// Indtroduccion del intento 
numeroUsuario = prompt('Elige un número entre 1 y ' + numeroDeJuego);
console.log(numeroUsuario);

// Comparacion de respuesta con el numero Secreto
if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero es: ' + numeroSecreto);

    // Pista de si el numero es mayor 
} else {
    if (numeroUsuario < numeroSecreto){
    alert("El numero es mayor")
    }

// Pista de si el numero es Menor    
    else{
    alert("El numero es menor")
    }

    // Advertencia de intentos Restantes    
     alert('Intentos Restantes ' + (numeroDeIntentos-1));
    numeroDeIntentos = numeroDeIntentos-1;
    console.log(numeroDeIntentos);
}

// Condicion de Fin del juego
if (numeroDeIntentos <= 0){
    alert('Te quedaste sin intentos, Game over');
    break;
}
}
