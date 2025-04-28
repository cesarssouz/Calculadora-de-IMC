const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (altura % 1 === 0) {
        resultado('A altura deve conter casas decimais', false);
        return;
    }

    const imc = resulImc(peso, altura);
    const nivelimc = nivelImc(imc);

    const mensagem = `Seu IMC é ${imc}, (${nivelimc})`


    resultado(mensagem, true)

})

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    return nivel[0];
}

function resulImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)

}

function criarParagrafo() {
    const p = document.createElement('p')
    return p;
}

function resultado(mensagem, valido) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ""

    const p = criarParagrafo();
    if (valido) {
        p.classList.add('resultado-p')
    }else {
        p.classList.add('negativo-p')
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p)
}

