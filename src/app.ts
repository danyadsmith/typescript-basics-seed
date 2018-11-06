/* Default Function Parameters */

let title: string = 'Object Literal Improvements';

let description: string = `
You can combine existing data types and data structures that are
assigned to variables as properties in a new object literal using
a shorthand syntax. There is also a shorthand syntax you can use
when assigning a function to an object property.
`;

let code: string = `
const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  }
}

const toppings = ['pepperoni'];

// the old way...

const oldOrder = {
  pizza: pizza,
  toppings: toppings
};

// the new way...

const order = { pizza, toppings };

function createOrder (pizza, toppings) {
  return { pizza, toppings };
}

console.log('Old Order:', oldOrder);
console.log('Order:', order);
console.log('Create Order:', createOrder(pizza, toppings));
`;

let body: any = document.getElementsByTagName('body');
let header: string = `<h1>${ title }</h1>`;
let desc: string = `<p>${ description}</p>`;
let sample: string = `<pre>${ code }</pre>`;

body[0].innerHTML = header + desc + sample;

const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName(): any {
    return this.name;
  }
}

const toppings: string[] = ['pepperoni'];

// the old way...
const oldOrder: any = {
  pizza: pizza,
  toppings: toppings
};

const order: any = { pizza, toppings };

function createOrder (pizza: any, toppings: string[]): any {
  return { pizza, toppings };
}

console.log('Old Order:', oldOrder);
console.log('Order:', order);
console.log('Create Order:', createOrder(pizza, toppings));