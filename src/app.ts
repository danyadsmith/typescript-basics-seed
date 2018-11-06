interface IPizza {
  name: string;
  toppings: string[];
}

const pizzas: IPizza[] = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

let mappedPizzas: string[];
mappedPizzas = pizzas.map(function (pizza: IPizza): string {
    return pizza.name.toUpperCase();
  });

let arrowMappedPizzas: string[];
arrowMappedPizzas = pizzas.map((pizza => pizza.name.toUpperCase()));

console.log(mappedPizzas);
console.log(arrowMappedPizzas);
