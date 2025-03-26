var pao = 265
var queijomussarela = 280
var leite = 42
var pera = 57
var bolodechocolate = 371
var maça = 52
var banana = 89
var manga = 60
var morango = 33
var docedeleite = 315
var qnt = document.getElementById('quantia')
var total = document.getElementById('total')
function calcular() {
    var data = document.querySelector('input[type="date"]').value
    var alimento = document.querySelector('input[type="text"]').value
    var quantidade = document.querySelector('input[type="number"]').value
    quantidade = quantidade / 100; //ajustar a quantidade para 100g
    if (alimento == 'pão') {
        qnt.innerHTML = pao * quantidade
    } else if (alimento == 'queijo mussarela') {
        qnt.innerHTML = queijomussarela * quantidade              
    } else if (alimento == 'leite') {
        qnt.innerHTML = leite * quantidade
    } else if (alimento == 'pera') {
        qnt.innerHTML = pera * quantidade
    } else if (alimento == 'bolo de chocolate') {
        qnt.innerHTML = bolodechocolate * quantidade
    } else if (alimento == 'maçã') {
        qnt.innerHTML = maça * quantidade
    } else if (alimento == 'banana') {
        qnt.innerHTML = banana * quantidade
    } else if (alimento == 'manga') {
        qnt.innerHTML = manga * quantidade
    } else if (alimento == 'morango') {
        qnt.innerHTML = morango * quantidade
    } else if (alimento == 'doce de leite') {
        qnt.innerHTML = docedeleite * quantidade
    }
    qnt.innerHTML = parseFloat(qnt.innerHTML).toFixed(2).replace('.', ',')
}
function registrar() {
    var totalAtual = parseFloat(total.innerHTML.replace(',', '.'))
    var qntAtual = parseFloat(qnt.innerHTML.replace(',', '.'))
    total.innerHTML = (qntAtual).toFixed(2).replace('.', ',')
}