/* Default Function Parameters */

let title: string = 'Rest Parameters';

let description: string = `
Rest parameters allow you to spread an array into discrete values
so you can combine the array values with other values for processing
in a function.
`;

let code: string = `
function sumAll(...arr: any[]): number {
  return arr.reduce((prev: number, next: number) => prev + next);
}

const sum: number = sumAll(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const anotherSum: number = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('Sum:', sum);
console.log('Another Sum:', anotherSum);
`;

let body: any = document.getElementsByTagName('body');
let header: string = `<h1>${ title }</h1>`;
let desc: string = `<p>${ description}</p>`;
let sample: string = `<pre>${ code }</pre>`;

body[0].innerHTML = header + desc + sample;

function sumAll(...arr: any[]): number {
  return arr.reduce((prev: number, next: number) => prev + next);
}

const sum: number = sumAll(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const anotherSum: number = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('Sum:', sum);
console.log('Another Sum:', anotherSum);