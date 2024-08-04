let bordeRojo = document.getElementById("akira");

bordeRojo.addEventListener("click", () => {
  if (bordeRojo.style.border === "5px solid red") {
    bordeRojo.style.border = "";
  } else {
    bordeRojo.style.border = "5px solid red";
  }
  console.log("Has clickeado en la imagen");
});

