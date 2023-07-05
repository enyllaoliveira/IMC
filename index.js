let nameInf = document.getElementById('inf-name')
let weight = document.getElementById('inf-peso')
let height = document.getElementById('inf-alt')
let containerInf = document.getElementById("rodape")
const button = document.getElementById('btn')


button.classList.add('disabled')
button.style.pointerEvents = 'none'
nameInf.addEventListener('keyup', validate) 
weight.addEventListener('keyup', validate) 
height.addEventListener('keyup', validate) 
validate()

function validate () {
    if(nameInf.value != '' && weight.value != 0 && height.value != 0) {
      button.classList.remove('disabled')
      button.removeAttribute('style')
    } else {
      button.classList.add('disabled')
      button.style.pointerEvents = 'none'
}
}

button.addEventListener('click', calcular)
function calcular() {
  let weightConvertido = Number(weight.value)
  let heightConvertido = Number(height.value)
    let imc = (((weightConvertido * 100) / ((heightConvertido * heightConvertido / 100)))).toFixed(2)
    let situation = ''

    if (imc  < 18.5) {
      situation = 'magreza'
    } else if (imc > 18.5 && imc < 24.9) {
      situation = 'normal'
    } else if ( imc > 25 && imc < 29.9 ) {
      situation = 'sobrepeso I'
    } else if (imc > 30 && imc < 39.9) {
      situation = 'obesidade I'
    } else {
      situation = 'grave III'
    }
      containerInf.innerHTML = `<p> Olá, ${nameInf.value}.</p> 
     <p> Seu IMC atual é de ${imc}</p>
     <p>  Sua situação é de ${situation} </p>`
    }


