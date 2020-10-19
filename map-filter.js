const numbers = [3, 5, 6, 7, 8];
// const output =[]; 
// for(let i=0; i<numbers.length; i++){
//     const elements = numbers[i];
//     const result = elements*elements;
//     output.push(result);
// }


// function square (element){
//      return element * element;
// }

//const square = element =>element*element
// const square = x => x*X 



// const result = numbers.map(function(element){
//     return element*element;
// })


// const result = numbers.map(x => x * x);
// console.log(result)

const bigger = numbers.filter(x => x < 5);

const result = numbers.find(x => x < 5);
console.log(result);

console.log(bigger);