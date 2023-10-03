import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
/*Function contarLetras (){
        document.querySelectorAll("textarea").value;
   numeroDeCaracteres = texto.lenght;
console.log("numeroDeCaracteres");
}*/


const textarea = document.querySelector('textarea[name="user-input"]');

/*-------------------se ubica en la posicion---------------------------*/
const primerConteo = document.querySelector("li.conteo:nth-child(1)"); 
const segundoConteo = document.querySelector("li.conteo:nth-child(2)");
const terceroConteo = document.querySelector("li.conteo:nth-child(3)");


const boton = document.getElementById("reset-button");


textarea.addEventListener("input", function () {
  const numeroDePalabras = analyzer.getWordCount(textarea.value)
  console.log(numeroDePalabras);
  primerConteo.textContent= "Palabras: " + numeroDePalabras;
  const numeroDeCaracteres = analyzer.getCharacterCount(textarea.value)
/*console.log(numeroDeCaracteres);*/
  segundoConteo.textContent= "Caracteres: " + numeroDeCaracteres;

  const caracteresSinEpacios = analyzer.getCharacterCountExcludingSpaces(textarea.value)
  terceroConteo.textContent= "Caracteres sin espacio: " + caracteresSinEpacios;
  }); 

boton.addEventListener("click", function () {
  textarea.value = "";
});

/*
        const totalCaracteres = analyzer.metodoUno("uva");
primerElemento.textContent = totalCaracteres;
segundoElemento.textContent = 'Me gusta la pera';
})
*/
