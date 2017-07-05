'use strict'
const ROOM_TEMP_C = 26.5;
const MAX_TEMP_C = 36;
let currentTempC = 16;

console.log(ROOM_TEMP_C);
console.log(currentTempC);
currentTempC = 22.5;
console.log(currentTempC);


console.log(0.1 + 0.2);
console.log(Infinity);

const message = `現在の温度は${currentTempC}℃です。`;
console.log(message);

const multiline = "1行目\n\
2行目";
console.log(multiline);

const multiline2 = `1行目
2行目`;
console.log(multiline2);

const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED);
console.log(ORANGE);
console.log(RED === BLUE);

let currentTemp;
console.log(currentTemp);
currentTemp = null;
console.log(currentTemp);