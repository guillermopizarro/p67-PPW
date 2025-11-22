var cambiado = false

function cambiar() {
    let titulo = document.getElementById('titulo')
    if (cambiado) {
        titulo.textContent = 'Título original.'
        titulo.style.color = 'black'
        cambiado = false
    } else {
        titulo.textContent = 'Título cambiado con JS.'
        titulo.style.color = 'red'
        cambiado = true
    }
}