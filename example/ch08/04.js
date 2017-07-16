const cart = [{name: 'iPhone', cost: 54800}, {name: 'Android', cost: 49800}];
const names = cart.map(x => x.name);
console.log(names);

const prices = cart.map(x => x.cost);
console.log(prices);

const discountPrices = cart.map(x => x.cost * 0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);


