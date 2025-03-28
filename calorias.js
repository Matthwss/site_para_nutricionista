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
var frango = 239 
var peixe = 206 
var beterraba = 43 
var cenoura = 41 
var Carnedeboi = 250 
var batata = 86 
var arroz = 130 
var feijao = 347
var macarrao = 371
var alface = 15 
var sucodeuva = 60 
var sucodelaranja = 45
var cafe = 0
var brocolis = 34 
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
    } else if (alimento == 'frango') {
        qnt.innerHTML = frango * quantidade
    } else if (alimento == 'peixe') {
        qnt.innerHTML = peixe * quantidade
    } else if (alimento == 'beterraba') {
        qnt.innerHTML = beterraba * quantidade
    } else if (alimento == 'cenoura') {
        qnt.innerHTML = cenoura * quantidade
    } else if (alimento == 'carne de boi') {
        qnt.innerHTML = Carnedeboi * quantidade
    } else if (alimento == 'batata') {
        qnt.innerHTML == batata * quantidade
    } else if (alimento == 'arroz') {
        qnt.innerHTML = arroz * quantidade
    } else if (alimento == 'feijão') {
        qnt.innerHTML = feijao * quantidade
    } else if (alimento == 'macarrão') {
        qnt.innerHTML = macarrao * quantidade
    } else if (alimento == 'alface') {
        qnt.innerHTML = alface * quantidade
    } else if (alimento == 'suco de uva') {
        qnt.innerHTML = sucodeuva * quantidade
    } else if (alimento == 'suco de laranja') {
        qnt.innerHTML = sucodelaranja * quantidade
    } else if (alimento == 'café') {
        qnt.innerHTML = cafe * quantidade
    } else if (alimento == 'brócolis') {
        qnt.innerHTML = brocolis * quantidade
    }
    qnt.innerHTML = parseFloat(qnt.innerHTML).toFixed(2).replace('.', ',')
}
function registrar() {
    var totalAtual = parseFloat(total.innerHTML.replace(',', '.'))
    var qntAtual = parseFloat(qnt.innerHTML.replace(',', '.'))
    total.innerHTML = (qntAtual).toFixed(2).replace('.', ',')
}