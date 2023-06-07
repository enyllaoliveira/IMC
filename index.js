let nome = document.getElementById('inf-name')
let alt = document.getElementById('inf-alt')
let peso = document.getElementById('inf-peso')
let botao = document.getElementById('btn')
let containerInf = document.getElementById("rodape")

botao.addEventListener('click', clique)
function clique() {
    let peso1 = Number(peso.value)
    let alt1 = Number(alt.value)
    let imc = (((peso1 * 100) / (alt1 * alt1))  * 100 ).toFixed(2)
    containerInf.innerHTML = `Olá, ${nome.value}. <br>
     Seu IMC atual é de ${imc}`
}