let nome = document.getElementById('inf-name')
let peso1 = document.getElementById('inf-peso')
let alt1 = document.getElementById('inf-alt')
let containerInf = document.getElementById("rodape")
const botao = document.getElementById('btn')

botao.addEventListener('submit', checkInf)
function checkInf() {
  if (nome == '') {
    botao.disabled = true;
    nome.innerHTML = `Esse campo é obrigatório`
  } else if(peso1 == '') {
    botao.disabled = true;
    peso1.inner = `Esse campo é obrigatório`
  } else if (alt1  == '') {
    botao.disabled = true;
    alt1.innerHTML = `Esse campo é obrigatório`
  } else {
    botao.disabled = false;
  }
}

botao.addEventListener('click', calcular)
function calcular() {
    let peso = Number(document.getElementById('inf-peso').value)
    let alt = Number(document.getElementById('inf-alt').value)
    let imc = (((peso * 100) / ((alt * alt / 100)))).toFixed(2)
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

 
 
    

    // botao.addEventListener ('click', checkInf)
    // function checkInf() {
    //   let name = document.getElementById('inf-name').value;
    //   let peso = Number(document.getElementById('inf-peso').value);
    //   let alt = Number(document.getElementById('inf-alt').value);

    //   if (name === '') {
    //     document.getElementById('btn').disabled = true; 
    //     document.getElementById('name').textContent = "Esse campo é obrigatório";
    //   } else if(alt === '') {
    //     document.getElementById('btn').disabled = true; 
    //     document.getElementById('alt').textContent = "Esse campo é obrigatório";
    //   } else if(peso === '' ) {
    //     document.getElementById('btn').disabled = true; 
    //     document.getElementById('peso').textContent = "Esse campo é obrigatório";
    //   } else {
    //     document.getElementById('btn').disabled = false; 
    //   }
    //   }

          // document.getElementById('btn').disabled = true;
