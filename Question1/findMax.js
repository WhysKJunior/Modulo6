
function findMax(numeros){
    if (numeros.length === 0){
        console.log ('Lista de numeros insuficientes para verificar ')
    }
    let NumeroMaior = 0

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > NumeroMaior) {
            NumeroMaior = numeros[i];
        }
    }
    
    return NumeroMaior;


}

module.exports = findMax;

