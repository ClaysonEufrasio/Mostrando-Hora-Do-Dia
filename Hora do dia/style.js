function mostraHora() {
    var mensagem = document.getElementById("mensagem")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
}
