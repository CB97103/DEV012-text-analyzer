import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
/*Function contarLetras (){
        document.querySelectorAll("textarea").value;
   numeroDeCaracteres = texto.lenght;
console.log("numeroDeCaracteres");
}*/

const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');

const primerElemento = document.querySelector(
  "li.conteo:nth-child(1)"
); /*se ubica en la posicion*/
const segundoElemento = document.querySelector("li.conteo:nth-child(3)");
/*const getCharacterCount = document.querySelector ('li.conteo:nth-child(2)')*/

boton.addEventListener("click", function () {
  textarea.value = "";
});

textarea.addEventListener("input", function () {
  const numeroDeCaracteres = analyzer.getCharacterCount(textarea.value)
console.log(numeroDeCaracteres);
primerElemento.textContent= "numeroDeCaracteres: " + numeroDeCaracteres;
});
/*
        const totalCaracteres = analyzer.metodoUno("uva");
primerElemento.textContent = totalCaracteres;
segundoElemento.textContent = 'Me gusta la pera';
})
*/
