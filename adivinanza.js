const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log(`Felicitaciones! Advinaste el numero secreto!`)
    } else if (numeroAdivinado > numeroSecreto ) {
        console.log(`El numero secreto es menor. Segui intentando!`)
    } else {
        console.log(`El numero secreto es mayor. Segui intentando!`)
    }
}

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};

