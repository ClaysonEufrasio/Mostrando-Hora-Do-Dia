function mostraHora() {
    var mensagem = document.getElementById("mensagem")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        imagem.src = './imagens/imagem de dia.png'
        document.body.style.background = '#fde67c'
    }
    else if (hora < 18) {
        imagem.src = './imagens/imagem da tarde.png'
        document.body.style.background = '#d77359'
    }
    else {
        imagem.src = './imagens/imagem da noite.png'
        document.body.style.background = '#16232b'
    }
}
