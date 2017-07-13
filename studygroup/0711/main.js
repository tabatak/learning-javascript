const min = 1;
const max = 3;
let num = 1;
let step = -1;

for (let i = 0; i < 100; i++){
    console.log('*'.repeat(num));
    if(num <= min || num >= max){
        step *= -1;
    }
    num += step;
}