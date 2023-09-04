import { frases } from './frases.js';

//seletores

const biscoitoFechado = document.querySelector("#fechadinho");
const fechadoInicio = document.querySelector(".fechado");
const abertoFinal = document.querySelector(".aberto");
const abrirOutro = document.querySelector('.biscoito__aberto__jogarNovamente');
const mensagem = document.querySelector('.biscoito__aberto__paragrafo');


function abrirBiscoito(){
    
   var numeroDaSorte = Math.round(Math.random()*10);
   fechadoInicio.classList.toggle('hide');
   abertoFinal.classList.toggle('hide');  
   

   mensagem.innerHTML =  frases[numeroDaSorte];
  


}

abrirOutro.addEventListener('click', abrirBiscoito)
biscoitoFechado.addEventListener('click', abrirBiscoito )