let nome = document.getElementById('inf-name')
let botao = document.getElementById('btn')
let containerInf = document.getElementById("rodape")

botao.addEventListener('click', clique)
function clique() {
    let peso = Number(document.getElementById('inf-peso').value)
    let alt = Number(document.getElementById('inf-alt').value)
    let imc = (((peso * 100) / (alt * alt))  * 100 ).toFixed(2)
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



 

  