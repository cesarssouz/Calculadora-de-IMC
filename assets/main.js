const form = document.querySelector('#form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault()
    console.log("Ta prevenido")
    resultado('Isso ai')
} )


function resultado (mensagem) {
    const resultado = document.querySelector('#resultado')
    console.log('resultado', resultado);


    resultado.innerHTML = ""
    const p = document.createElement('p')
    p.innerHTML = mensagem
    resultado.appendChild(p);
}

