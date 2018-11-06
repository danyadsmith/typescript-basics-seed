/* Default Function Parameters */

let title: string = 'Default Function Parameters';

let description: string = `
Typescript and ES6 provide a new feature that allows you to set default variables for function parameters.
`;

let code: string = `
  function multiply (a: number, b: number = 25): number {
    return a * b;
  }

  console.log(multiply(5));
  console.log(multiply(5, 35));
`;

let body: any = document.getElementsByTagName('body');
let header: string = `<h1>${ title }</h1>`;
let desc: string = `<p>${ description}</p>`;
let sample: string = `<pre>${ code }</pre>`;

body[0].innerHTML = header + desc + sample;


function multiply (a: number, b: number = 25): number {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));