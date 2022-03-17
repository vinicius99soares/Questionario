const listaOperadoras = [
  'Ameplan (Assistência Médica Planejada)',
  'Alice',
  'Allianz',
  'Amil / DIX / Medial / One Health',
  'Assim Saúde',
  'BioVida',
  'Bradesco',
  'Care Plus',
  'CCG (centro clínico gaúcho)',
  'Clinipam',
  'E-vida',
  'Golden Cross / Vision Med',
  'GreenLine',
  'Hapvida/ São Francisco',
  'Ipasgo',
  ,
  'NotreDame Intermédica',
  'Omint',
  'Porto Seguros / Itaú Saúde',
  'Prevent Senior',
  'Pró Médica',
  'Sami',
  'Saúde Caixa / Caixa Seguros / Rede Gama',
  'Saúde Sim',
  'Sompo Saúde / Marítima',
  'SulAmérica',
  'Trasmontano',
  'Unimed',
  'CNU (Central Nacional Unimed)',
  'Seguros Unimed',
  'Qsaúde',
  'Vitallis',
  'NA (Não Aplicável)'
]

document.getElementById('btnQuestaoIdade').onclick = function () {
  let idade

  var radios = document.getElementsByName('questaoIdade')
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log('Escolheu: ' + radios[i].value)
      idade = radios[i].value
    }
  }

  if (idade == 'menos18') {
    window.location.href = 'finalizacao.html'
  }
}

const divOperadoras = document.getElementById('divOperadoras')
let selectOperadoras = document.createElement('select')
let customOperadora = document.createElement('input')
customOperadora.placeholder = 'Digite a operadora'

let optionsOperadora = []

listaOperadoras.map((operadora, index) => {
  let option = document.createElement('option')
  option.value = index
  option.text = operadora
  optionsOperadora.push(option)
})

selectOperadoras.append(...optionsOperadora)

selectOperadoras.onchange = function () {
  console.log(selectOperadoras.value)
  if (selectOperadoras.value == 32) {
    divOperadoras.appendChild(customOperadora)
  }
}

divOperadoras.appendChild(selectOperadoras)

document.getElementById('btnQuestao3').onclick = function () {
  let nota

  var radios = document.getElementsByName('questao3')

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log('Escolheu: ' + radios[i].value)
      nota = radios[i].value
    }
  }

  if (nota == 4 || nota == 5) {
    document.getElementById('questao4').style.display = 'block'
  }
}

let operadoraEscolhida

document.getElementById('btnQuestao2').onclick = function () {
  if (selectOperadoras.value == 32) {
    operadoraEscolhida = customOperadora.value
  } else {
    operadoraEscolhida = listaOperadoras[selectOperadoras.value]
  }
}
// questão 2

var select = document.getElementById('opiniao')
var opcaoTexto = select.options[select.selectedIndex].text
var opcaoValor = select.options[select.selectedIndex].value
console.log(opcaoTexto) // Ferrari
console.log(opcaoValor) // ferrari
// Questão 4
const maxCheckboxes = 3
const naCheckboxValue = 6

function limitarCheckbox(event) {
  let checkedChecks = document.querySelectorAll('.checkboxQuestao4:checked')
  console.log(checkedChecks)
  if (checkedChecks.length >= maxCheckboxes + 1) {
    return false
  }
}

//Questão 5
let correntista

document.getElementById('btnQuestao5').onclick = function () {
  var radios = document.getElementsByName('questao5radio')

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log('Escolheu: ' + radios[i].value)
      correntista = radios[i].value
    }
  }

  if (correntista == 'sim') {
    document.getElementById('questao6').style.display = 'block'
    document.getElementById('questao10').style.display = 'block'
  } else {
    document.getElementById('questao7').style.display = 'block'
    document.getElementById('questao8').style.display = 'block'
  }
}

document.getElementById('btnQuestao6').onclick = function () {
  document.getElementById('questao9').style.display = 'block'
  document.getElementById('nomeDaOperadoraSpan').innerText = operadoraEscolhida
}

//Questão 6
function mostrarOutros() {
  console.log('Teste')
  if (document.getElementById('questao6outros').checked) {
    document.getElementById('questao6outrosText').style.display = 'block'
  }
}
//Questão 7
function mostrarOutros7() {
  console.log('Teste')
  if (document.getElementById('questao7outros').checked) {
    document.getElementById('questao7outrosText').style.display = 'block'
  }
}
//questão 8
let interesse

document.getElementById('btnQuestao8').onclick = function () {
  var radios = document.getElementsByName('questao8radio')

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log('Escolheu: ' + radios[i].value)
      interesse = radios[i].value
    }
  }

  if (interesse == 'sim') {
    document.getElementById('questao9').style.display = 'block'
  }
  if (interesse == 'nao') {
    document.getElementById('questao9').style.display = 'block'
  }

  //Questão 9
  function verificarProbabilidade() {
    let probabilidade

    var radios = document.getElementsByName('questao9radio')
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log('Escolheu: ' + radios[i].value)
        probabilidade = radios[i].value
      }
    }

    if (probabilidade < 9) {
      document.getElementById('questao9motivoText').style.display = 'block'
    } else {
      document.getElementById('questao9motivoText').style.display = 'none'
    }
  }
}
