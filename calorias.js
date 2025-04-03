let alimentos = ["pao", "queijomussarela", "leite", "pera", "bolodechocolate", "maça", "banana", "manga", "morango", "docedeleite", "frango", "peixe", "beterraba", "cenoura", "Carnedeboi", "batata", "arroz", "feijao", "macarrao", "alface", "sucodeuva", "sucodelaranja", "cafe", "brocolis"]
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
    qnt.innerHTML = "Entrada inválida";
    return;
}

quantidade = quantidade / 100; //ajustar a quantidade para 100g
var index = alimentos.indexOf(alimento);
if (index !== -1) {
    var caloriasCalculadas = calorias[index] * quantidade;
    qnt.innerHTML = caloriasCalculadas.toFixed(2).replace('.', ',');
} else {
    qnt.innerHTML = "Alimento não encontrado";
}
    qnt.innerHTML = parseFloat(qnt.innerHTML).toFixed(2).replace('.', ',');
    data.value = ''
    alimento.value = ''
    quantidade.value = ''
}
function registrar() {
    var totalAtual = parseFloat(total.innerHTML.replace(',', '.'))
    var qntAtual = parseFloat(qnt.innerHTML.replace(',', '.'))
    total.innerHTML = (qntAtual).toFixed(2).replace('.', ',')
}