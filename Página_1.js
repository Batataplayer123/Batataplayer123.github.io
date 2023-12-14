function Dark() {
    let element = document.body
    element.classList.toggle("dark");
}

function alterarFonte(valor) {
    var mainElement = document.querySelector('main');
    var tamanhoAtual = parseFloat(window.getComputedStyle(mainElement, null).getPropertyValue('font-size'));

    var novoTamanho = tamanhoAtual + valor;

    mainElement.style.fontSize = novoTamanho + "px";
}

let clock = document.querySelector('#clock')

setInterval(function(){
    let data = new Date()
    clock.innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}, 1000)