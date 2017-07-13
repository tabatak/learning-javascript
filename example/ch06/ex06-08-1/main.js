const bruce = {name: "bruce"};
const madeline = {name: "madeline"};

function greet(){
    return `I'am ${this.name}.`;
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce = update.bind(bruce);

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

console.log('----');
console.log(bruce);
update.call(bruce, 1949, 'singer');
console.log(bruce);

console.log('----');
console.log(madeline);
update.apply(madeline, [1955, 'actor']);
console.log(madeline);
update.apply(madeline, [1955, 'writer']);
console.log(madeline);


const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

console.log(Math.min(...arr));
console.log(Math.max(...arr));

console.log('----');
console.log(arr);
console.log(...arr);


console.log('----');
console.log(bruce);
updateBruce(1904, 'actor');
console.log(bruce);
updateBruce.call(madeline, 2000, 'king');
console.log(bruce);
console.log(madeline);
