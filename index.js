// Task 1 //
let a = -3;
let b = 0;
let c = 1;

if (a < b && b < c) {
    console.log('a < b < c is true');
} else {
    console.log('a < b < c is false');
}

//Task 2 //
let x = 1;
let y = 2;

let res1 = x + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

x = undefined;
let res4 = x / y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// Task 3 //
const question = prompt('Ви досягли повнолітнього віку?');
if(question >= 18) {
    alert('Ви досягли повнолітнього віку');
}else {
    alert('Ви ще надто молоді');
}

