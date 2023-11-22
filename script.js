// Seleciona o elemento de imagem
const exerciseImage = document.getElementById("exercise-image");

// Seleciona todos os links de exercícios
const exerciseLinks = document.querySelectorAll(".exercise-link");

// Adiciona um evento de clique a cada link de exercício
exerciseLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Obtém o nome da imagem do atributo data-image
        const exerciseImageName = link.getAttribute("data-image");

        // Atualiza a imagem exibida com base no link clicado
        exerciseImage.src = exerciseImageName;
    });
});
