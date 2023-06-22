function toggleMode() {
  // Pegar a tag HTML element
  const html = document.documentElement

  // Propriedade que identifica um atributo para uma codição "true" or "false".
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Subistituir a imagem
  if (html.classList.contains("light")) {
    // se estiver em (light mode), altera a imagem.
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculus escuro e jaqueta preta com fundo degradê roxo com azul"
    )
  } else {
    // se não estiver (light mode), manter a imagem principal.
    img.setAttribute("src", "./assets/avatar.png")
  }
}
