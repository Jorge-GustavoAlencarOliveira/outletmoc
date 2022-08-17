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


const images = document.querySelectorAll('.card img');
const modal = document.querySelector('.modal1');
const imagemodal = document.querySelector('#imagemodal');
const btnclose1= document.querySelector('#btn-close1');

function showImage(){ 
  const scrimage = this.getAttribute('src');
  imagemodal.removeAttribute('src')
  imagemodal.setAttribute('src', scrimage);
  modal.classList.toggle('ativo'); 
  console.log(imagemodal); 
}
images.forEach((event) =>{
  event.addEventListener('click', showImage)
});
 function modalStatus(){
  modal.classList.toggle('ativo')
 }

btnclose1.addEventListener('click', modalStatus)