const o = {name : "ジェリー"};
const arr = [1, 5, o, true, 5, [1,2], "9"];

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf({name:"ジェリー"}));

const arr2 = [{id: 1,name: 'taro'}, {id: 2,name: 'hanako'}];

console.log(arr2.findIndex(o => o.name ==='taro'));
console.log(arr2.findIndex(o => o.name ==='hanako'));
console.log(arr2.find(o => o.id === 2));
console.log(arr2.find(o => o.id === 100));


class Person {
  constructor(name){
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;

const ichiro = new Person("ichiro");
const jiro = new Person("jiro");
const saburo = new Person("saburo");
const shiro = new Person("shiro");
const arr3 = [ichiro, jiro, saburo, shiro];

console.log(arr3.find(p => p.id === saburo.id));
console.log(arr3.find(function(p) { return p.id === this.id}, saburo));
console.log(arr3.find(p => p.id === this.id, saburo));


console.log('---- arr4 ----');
const arr4 = [5, 7, 12, 15, 17];
console.log(arr4.some(x => x%2===0));
console.log(arr4.some(x => Number.isInteger(Math.sqrt(x))));

console.log('---- arr5 ----');
const arr5 = [4, 6, 16, 36];
console.log(arr5.every(x => x%2===0));
console.log(arr5.every(x => Number.isInteger(Math.sqrt(x))));