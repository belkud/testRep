import './style.css'





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


function add (a,b) {
  return a+b
}
console.log(add(5,4));

function carryAdd(a) {
  return function(b) {
    return a + b
  }
}
console.log(carryAdd(4)(5));



function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(2, 3, 4))

function carriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a*b*c
    }
  }
}
console.log(carriedMultiply(2) (3) (4))





