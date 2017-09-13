const colors = ['red', 'orange', 'yellow', 'green', 'brule', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRaibowColor(){
  if(++colorIndex >= colors.length){
    colorIndex = 0;
  }
  return colors[colorIndex];
}

console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
