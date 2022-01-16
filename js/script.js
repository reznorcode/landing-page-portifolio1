const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.tem-fade');
const delayAnim = document.querySelectorAll('.tem-delay')
var delay = 150;

btnHamburger.addEventListener('click', function(){
  console.log('btnHamburger clicked!');

  if(header.classList.contains('open')){ //fecha
    body.classList.add('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      if (element.classList.contains ('tem-delay')){
        setTimeout(function() {
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        }, delay);
      }
      else {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        }
    });
  }
  else {
    body.classList.add('noscroll');
    header.classList.add('open'); //abre
    fadeElems.forEach(function (element){
      if (element.classList.contains ('tem-delay')){
        setTimeout(function() {
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        }, delay);
      }
      else {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      }
    });
  }
})
