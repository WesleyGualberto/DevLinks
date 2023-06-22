function toggleMode() {
  // Pegar a tag HTML element
  const html = document.documentElement

  // Propriedade que identifica um atributo para uma codição "true" or "false".
  html.classList.toggle("dark")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Subistituir a imagem
  if (html.classList.contains("dark")) {
    // se estiver em (dark mode), manter a imagem principal.
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se não estiver em (dark mode), adicionar a imagem light.
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculus escuro e jaqueta preta com fundo degradê roxo com azul"
    )
  }
}
