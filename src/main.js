import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'




let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let switcher = 0

function toogle (e) {
  e.target.classList.toggle('red')
  console.log(`вы нажали кнопку ${e.target.innerText}`);
  
}

 
window.addEventListener('click', (e)=> {

  if (e.target.tagName == 'BUTTON' ) {
  //   e.target.setAttribute('class','red')
  //   console.log(` Привет от  ${e.target.innerText}`);
  toogle(e)
  }

})


