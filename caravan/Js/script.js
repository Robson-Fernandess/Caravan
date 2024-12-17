$('.carousel').carousel({
  // interval: 2000,
  // pause: false,
})
// função da tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// funçao da seleção da cidade
$("#selecionar_cidade2").change(function(e){
  const cidade = e.target.value;
  if(cidade == e.target.value){
    alert(`Obrigado por vc ter escolhido ${cidade}, Seja Bem Vindo`);
  }
})

$("#selecionar_cidade").change((evento)=>{
const cidade = evento.target.value;
if(cidade == evento.target.value){
  alert(`Obrigado por vc ter escolhido ${cidade}, Seja Bem Vindo`);
}

})

// document.getElementById('selecionar_cidade2').addEventListener('change', function(evento){

//   var cidadeSelecionada = evento.target.value;
//   console.log(cidadeSelecionada);
//   if(cidadeSelecionada == 'paris'){
//    alert('Vc nao é Brasilero, Nao Pode entrar'+ cidadeSelecionada)
//   }else if(cidadeSelecionada == 'dublin'){
//    alert('Bem vindo a Cidade de,'+cidadeSelecionada)
//   }else if(cidadeSelecionada == 'california'){
//   alert('Bem vindo a Cidade de, CALIFORNIA')
//  }else if(cidadeSelecionada == ''){
//   alert('Booooo')

//  }
// })
