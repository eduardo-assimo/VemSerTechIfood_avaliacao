function contarPalavrasIniciadasComMaiuscula(frase) {
    const palavras = frase.split(' ').filter(Boolean);
    return palavras.length;
  }
  const texto = "FaçaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
  let frase = texto.replace(/(?=[A-Z])/g, ' ');
  const numeroDePalavras = contarPalavrasIniciadasComMaiuscula(frase);
  console.log(numeroDePalavras);
  