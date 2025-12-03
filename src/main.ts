import './style.css'


function toogle(e: any) {
  e.target.classList.toggle('red')
  console.log(`вы нажали кнопку ${e.target.innerText}`);

}


window.addEventListener('click', (e: any) => {
  if (e.target.tagName == 'BUTTON') {
    toogle(e)
  }
})


function add(a: number, b: number) {
  return a + b
}
console.log(add(5, 4));

function carryAdd(a: number) {
  return function (b: number) {
    return a + b
  }
}
console.log(carryAdd(4)(5));



function multiply(a: number, b: number, c: number) {
  return a * b * c;
}

console.log(multiply(2, 3, 4))

function carriedMultiply(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a * b * c
    }
  }
}
console.log(carriedMultiply(2)(3)(4))


//! Check If Two String Arrays are Equivalent 


function checkMassEqual(mass1: string[], mass2: string[]) {
  if (mass1.join('') == mass2.join('')) return console.log('равнозначны');
  else return console.log('неравнозначны');
}

checkMassEqual(['a', 'b', 'c'], ['a', 'b', 'c'])
checkMassEqual(['a', 'b', 'e'], ['a', 'b', 'c'])


console.log(Boolean(123));

//! 1/n: Задачи leetcode JS — «Max Consecutive Ones» (Найти максимальное количество последовательных единиц)

const massWithOnesAndZeros = [1, 1, 0, 123, 1, 1]

function findConsiquence (mass:number[]) {   
     console.log(Math.max(
       ...mass.join('')
       .split('0')
       .map(el=>el.length)
      ));
  
}
findConsiquence(massWithOnesAndZeros)


let massWithWords = ["call","call","call"]

// function createCounter2(n:number) {
//   massWithWords.forEach((el,i)=> {
//    return console.log(Number([i].toString())+n);
//   })
  
// };

// createCounter2(20)




var createCounter = function(n) {
  massWithWords.forEach((el,i)=> {
   return console.log(Number([i])+n);
  })
  
    return function() {
        
    };
};

const counter = createCounter(10)
counter() // 10
 


