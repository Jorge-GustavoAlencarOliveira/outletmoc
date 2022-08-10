function ativarMenu (){
  const btnhamb = document.querySelector('#btn-hamburguer img');
  const btnclose = document.querySelector('.btn-fechar');
  const menu = document.querySelector('#navbarNav');
  
  function activeMenu(){
    menu.classList.toggle("d-none");
  }
  btnhamb.addEventListener('click', activeMenu);
  btnclose.addEventListener('click', activeMenu);
}
ativarMenu();

const btnhamb = document.querySelector('#btn-hamburguer img');
const btnclose = document.querySelector('.btn-fechar');
const body = document.querySelector('body');

function hidescroll (){
  body.classList.add('hiddenscroll')
}
function showscroll (){
  body.classList.remove('hiddenscroll')
}

btnhamb.addEventListener('click', hidescroll);
btnclose.addEventListener('click', showscroll);