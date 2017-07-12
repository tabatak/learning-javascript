// console.log('hello');

var name = 'hamamoto';
console.log(name);

var age = 36;
console.log(age);

function hello(){
  console.log('hello');
}

hello();

function hello2(name){
  console.log('hello, ' + name);
}

hello2('hamamoto');

var members = ['matsuura', 'sato', 'hamamoto', 'kasai'];
console.log(members);

// let i = 0, l = menbers.length;
// for(; i <  l; i++){
//   console.log(menbers[i]);
// }


for(let i = 0; i < members.length; i++){
  console.log(members[i]);
}

for (let i = 1; i <= 5; i++ ){
  var ret = '';
  for(let j = 0; j < i; j++){
    ret += '*'
  }
  console.log(ret);
}

let str = '';
for(let i = 0; i < 5; i ++){
  str += '*';
  console.log(str);
}

console.log('-----');
for (let i = 5; i >= 0; i-- ){
  let ret = '';
  for(let j = 0; j < i; j++){
    ret += '*'
  }
  console.log(ret);
}


console.log('-----');
for(let i = 5; i !== 0; i--){
  console.log('*'.repeat(i));
}


console.log('-----');
const row = 5;
for (let i = 1; i <= row; i++){
  let str = ``;

  if(i <= row / 2){
    str = '*'.repeat(i);
  }else{
    str = '*'.repeat(row + 1 - i);
  }
  console.log(str);
}


console.log('sin');
for (let i = 0; i < 180; i += 30){
  let str = `*`.repeat(Math.floor(Math.abs(Math.sin(i))*4));
  console.log(str);
}