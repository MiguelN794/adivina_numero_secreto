const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    const input = readlineSync.question("Ingrese un numero: ");
    return parseInt(input);
}

const juegoAdvinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("Bienvenido al juego de las adivinanzas!");
    console.log("Intente adivinar el numero secreto del 1 al 100.\n");

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdvinanza();
