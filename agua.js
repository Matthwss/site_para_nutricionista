var p = 35 //ml por kg
function clicou() {
    var peso = document.querySelector('input[type="number"]')
    var peso1 = document.querySelector('#peso')
    peso1.innerHTML = `Você deve consumir no minimo ${peso.value * p}ml de água por dia`
}