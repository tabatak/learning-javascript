let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log(blockVar);
    }
}

globalFunc();

let f;
{
    let i = 0
    let o = {note: '安全', note2:'大丈夫'};
    f = function(){
        console.log("anonymous: " + o.note);
        console.log("i: " + i);
        i++;
        return o;
    }
}
let oRef = f();
console.log(oRef);
oRef.note = 'not safety';
console.log(oRef);
f();
f();
f();
f();
f();


const message = (function(){
    const secret = "secret";
    return `secret length is ${secret.length}`;
})();
console.log(message);

console.log('----');
const f2 = (function(){
    let count = 0;
    return function(){
        return `count: ${++count}`;
    }
})();
console.log(f2());
console.log(f2());
console.log(f2());

console.log('----');
const pl = (function(){
    let count = 1;
    return function(){
        console.log(`*`.repeat(count++));
    }
})();
for(let i = 0; i < 10; i++){
    pl();
}