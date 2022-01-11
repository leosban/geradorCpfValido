// Através do main, vamos fazer o webpack navegar até GeraCPF e ValidaCPF, usando o metodo 
// import, conforme abaixo:

import GeraCPF from './modules/GeraCPF';

import "./assets/css/style.css";

// Vamos criar uma função que se autoinicia - IIFE
// Vamos jogar o cpf gerado dentro da div do index
(function () {
  // Instanciamos nossa classe
  const gera = new GeraCPF();
  // Selecionamos a classe onde iremos mostrar o cpf gerado
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();

