var p = 35 //ml por kg
function clicou() {
    var peso = document.querySelector('input[type="number"]')
    var peso1 = document.querySelector('#peso')
    peso1.innerHTML = `A quantia de Água para o peso de ${peso.value}kg, deve ser de ${peso.value * p}ml de água por dia`
    peso.value = ''
    peso.focus()
}