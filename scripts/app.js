"use strict"
const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const navModal = document.querySelector('#nav-links-wrapper');


openBtn.addEventListener('click', () => {
 burgerEvents('block', 'none', 'block')
  
})
closeBtn.addEventListener('click', () => {
  burgerEvents('none', 'block', 'none')
})

function burgerEvents(modal, open, close) {
  navModal.style.display = modal;
  openBtn.style.display = open;
  closeBtn.style.display = close;
}