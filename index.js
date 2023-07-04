let nome = document.getElementById('inf-name')
let peso = document.getElementById('inf-peso')
let alt = document.getElementById('inf-alt')
let containerInf = document.getElementById("rodape")
const botao = document.getElementById('btn')

botao.classList.add('disabled')
botao.style.pointerEvents = 'none'
initial()

function initial() {
nome.addEventListener('keyup', (e) => {
if (e.target.value != '') {
  botao.classList.remove('disabled')
  botao.removeAttribute('style')
} else {
  botao.classList.add('disabled')
  botao.style.pointerEvents = 'none'
}
})

peso.addEventListener('keyup', (e) => {
  if (e.target.value != '') {
    botao.classList.remove('disabled')
    botao.removeAttribute('style')
  } else {
    botao.classList.add('disabled')
    botao.style.pointerEvents = 'none'
  }
  })

  alt.addEventListener('keyup', (e) => {
    if (e.target.value != '') {
      botao.classList.remove('disabled')
      botao.removeAttribute('style')
    } else {
      botao.classList.add('disabled')
      botao.style.pointerEvents = 'none'
    }
    })
  }

botao.addEventListener('click', calcular)
function calcular() {
  console.log(peso, alt)
  let pesoConvertido = Number(peso.value)
  let altConvertido = Number(alt.value)
    let imc = (((pesoConvertido * 100) / ((altConvertido * altConvertido / 100)))).toFixed(2)
    let situacao = ''

    if (imc  < 18.5) {
      situacao = 'magreza'
    } else if (imc > 18.5 && imc < 24.9) {
      situacao = 'normal'
    } else if ( imc > 25 && imc < 29.9 ) {
    situacao = 'sobrepeso I'
    } else if (imc > 30 && imc < 39.9) {
    situacao = 'obesidade I'
    } else {
      situacao = 'grave III'
    }
      containerInf.innerHTML = `<p> Olá, ${nome.value}.</p> 
     <p> Seu IMC atual é de ${imc}</p>
     <p>  Sua situação é de ${situacao} </p>`
    }


