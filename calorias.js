let alimentos = ["pão", "queijo mussarela", "leite", "pera", "bolo de chocolate", "maçã", "banana", "manga", "morango", "doce de leite", "frango", "peixe", "beterraba", "cenoura", "Carne de boi", "batata", "arroz", "feijão", "macarrão", "alface", "suco de uva", "suco de laranja", "café", "brócolis"]
let calorias = [265, 280, 42, 57, 371, 52, 89, 60, 33, 315, 239, 206, 43, 41, 250, 86, 130, 347, 371, 15, 60, 45, 0, 34]

var qnt = document.getElementById('quantia')
var total = document.getElementById('total')
function calcular() {
var data = document.querySelector('input[type="date"]').value
var alimento = document.querySelector('input[type="text"]').value
var quantidade = parseFloat(document.querySelector('input[type="number"]').value);
if (data > new Date()) {
    window.alert('coloque uma data valiada')
}

if (!alimento || isNaN(quantidade) || quantidade <= 0) {
    window.alert('Coloque uma quantia válida');
    return;
}
quantidade = quantidade / 100; //ajustar a quantidade para 100g
var index = alimentos.indexOf(alimento);
if (index !== -1) {
    var caloriasCalculadas = calorias[index] * quantidade;
    qnt.innerHTML = caloriasCalculadas.toFixed(2).replace('.', ',');
} else {
    window.alert('Alimento ainda não consta no sistema, Breve será adicionado!')
}
    qnt.innerHTML = parseFloat(qnt.innerHTML).toFixed(2).replace('.', ',');
    data.value = ''
    alimento.value = ''
    quantidade.valueOf = ''
}
function registrar() {
    var totalAtual = parseFloat(total.innerHTML.replace(',', '.'))
    var qntAtual = parseFloat(qnt.innerHTML.replace(',', '.'))
    total.innerHTML = (qntAtual).toFixed(2).replace('.', ',')
}