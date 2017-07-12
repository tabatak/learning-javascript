var Decimal = require('decimal.js');

console.log('sin');
for (let i = 0; i <= 360; i += 30){
    let s = new Decimal(Math.sin(i * Math.PI / 180));
    

    let v = Math.ceil(Math.pow(Math.sin(i * Math.PI / 180), 2) * 100);
    console.log(`i: ${i}, v:${v}, s: ${s.pow(2) * 100}`);
    //うまくいかない！
}