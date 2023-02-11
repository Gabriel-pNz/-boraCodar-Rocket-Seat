
function clean() {
    document.querySelector('#final').innerHTML = '';
    document.querySelector('#calc').innerHTML = '';
}

function backSpace () {
    var operand = document.querySelector('#calc').innerHTML;
    document.querySelector('#calc').innerHTML = operand.substring(0, operand.length -1)
}  

function insert (valor) {
    document.querySelector('#calc').innerHTML += valor
}

function equals () {
    var tela = document.querySelector('#calc').innerHTML;
    
    eval(tela)
       
    document.querySelector('#final').innerHTML = eval(tela).toFixed(2)

}

function percent () {
    var porce = document.querySelector('#calc').innerHTML
    document.querySelector('#calc').innerText = porce / 100;
}


