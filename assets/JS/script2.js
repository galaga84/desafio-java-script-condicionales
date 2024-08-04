let sticker1 = document.getElementById("1");
console.log(sticker1);
let sticker2 = document.getElementById("2");
console.log(sticker2);
let sticker3 = document.getElementById("3");
console.log(sticker3);
let sumaStickers = document.getElementById("verificar");
console.log(sumaStickers);
let texto = document.getElementById("conteo");
console.log(texto);

sumaStickers.addEventListener("click", () => {
  let valor1 = parseInt(sticker1.value);
  let valor2 = parseInt(sticker2.value);
  let valor3 = parseInt(sticker3.value);
  console.log(valor1);
  console.log(valor2);
  console.log(valor3);
  let sumaFinal = valor1 + valor2 + valor3;
  console.log(sumaFinal);
  if (sumaFinal <= 10) {
    texto.innerHTML = `Llevas ${sumaFinal} stickers`;
  } else {
    texto.innerHTML = "¡Llevas demasiados stickers!";
  }
});
