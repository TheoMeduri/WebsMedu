

let liked = false; // Indica se o post foi curtido

function likePost(image) {
    if (liked) {
        image.src = '../imgs/heart (1).png'; // Substitua com o caminho da imagem "curtir"
    } else {
        image.src = '../imgs/heart (2).png'; // Substitua com o caminho da imagem "curtido"
    }

    liked = !liked; // Inverte o estado da curtida
}
