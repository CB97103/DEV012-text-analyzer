import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector('textarea[name="user-input"]');

const primerConteo = document.querySelector("li.conteo:nth-child(1)");
const segundoConteo = document.querySelector("li.conteo:nth-child(2)");
const tercerConteo = document.querySelector("li.conteo:nth-child(3)");
const cuartoConteo = document.querySelector("li.conteo:nth-child(4)");
const quintoConteo = document.querySelector("li.conteo:nth-child(5)");
const sextoConteo = document.querySelector("li.conteo:nth-child(6)");

const boton = document.getElementById("reset-button");

textarea.addEventListener("input", function () {
  const numeroDePalabras = analyzer.getWordCount(textarea.value);
  primerConteo.textContent = "Palabras: " + numeroDePalabras

  const numeroDeCaracteres = analyzer.getCharacterCount(textarea.value);
  segundoConteo.textContent = "Caracteres: " + numeroDeCaracteres;

  const caracteresSinEpacios = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  tercerConteo.textContent = "Caracteres sin espacio: " + caracteresSinEpacios;

  const longitudDePalabras = analyzer.getAverageWordLength(textarea.value);
  cuartoConteo.textContent = "Longitud media de palabras: " + longitudDePalabras;

  const numeros = analyzer.getNumberCount(textarea.value);
  quintoConteo.textContent = "Números: " + numeros;

  const sumaDeNumeros = analyzer.getNumberSum(textarea.value);
  sextoConteo.textContent = "Suma total de números: " + sumaDeNumeros;
});

boton.addEventListener("click", function () {
  textarea.value = "";
  primerConteo.textContent = "Palabras: 0";
  segundoConteo.textContent = "Caracteres: 0";
  tercerConteo.textContent = "Caracteres sin espacios: 0";
  cuartoConteo.textContent = "Longitud media de palabras: 0";
  quintoConteo.textContent = "Números: 0";
  sextoConteo.textContent = "Suma total de números: 0";
});
