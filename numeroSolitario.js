const numeros = [12, 17, 15, 19, 22, 17, 19, 12];

function numerosNaoRepetidos(array) {
    return array.filter((num, index, arr) => arr.indexOf(num) === arr.lastIndexOf(num));
  }
  
  const numerosSemRepeticao = numerosNaoRepetidos(numeros);
  
  console.log(numerosSemRepeticao);
