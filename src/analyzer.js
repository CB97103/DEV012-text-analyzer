const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim() === "") {
      return 0;
    }
    const palabras = text.trim().split(/\s+/);
    return palabras.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const sinEspacios = text.replace(/[\W]/g, "");
    return sinEspacios.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let longitud = 0;
    if (text.trim() === "") {
      return 0;
    }
    const palabras = text.trim().split(" ");
    for (let i = 0; i < palabras.length; i++) {
      longitud += palabras[i].length;
    }
    const promedio = longitud / palabras.length;
    return parseFloat(promedio).toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const sinEspacios = text.replace(/[\W]/g, "");
    const words = text.trim().split(" ");
    let contador = 0;
    if (text === sinEspacios) {
      contador = 0;
    }
    if (words === "") {
      contador = 0;
    }
    for (let i = 0; i < words.length; i++) {
      const numero = Number(words[i]);
      if (!isNaN(numero)) {
        contador += 1;
      }
    }
    return contador;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.match(/\b\d+(\.\d+)?\b/g);
    let suma = 0;
    if (caracteres) {
      for (let i = 0; i < caracteres.length; i++) {
        suma += parseFloat(caracteres[i]);
      }
    }
    return suma;
  },
};

export default analyzer;
