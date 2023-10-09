const analyzer = {
  metodoUno: (texto) => {
    return "Me gusta la " + texto;
  },

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim() === ""){
      return 0
    } 
    const palabras = text.trim().replace(/[\d\W]/g, '');    
    return palabras.length;
    
    /*console.log(text)*/
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const sinEspacios = text.replace(/[\W]/g, '');
    return sinEspacios.length; 
    
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /* una variable para que quite espacios*/
    const sinEspacios = text.replace(/[\W]/g, '');
    const words = text.split(" ");
    let contador = 0;
    
    if(text === sinEspacios){
      contador = 0;
    }
    /* if para cuando texto es vacio*/
    if (words === ' '){
      contador = 0;
    }
    for (let i=0; i < words.length; i++){
      const numero = Number(words[i])
      if (!isNaN(numero)){
        contador += 1;
      }
    }
    console.log(contador)
    return contador
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
   /*const numeros = text.match(/\b\d+(\.\d+)?\b/g); 
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
CONTADOR 
si pasa algo if else 
for
    }

  },*/ },
}

export default analyzer;
