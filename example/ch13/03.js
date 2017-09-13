const getNextRaibowColor = (function(){
  const colors = ['red', 'orange', 'yellow', 'green', 'brule', 'indigo', 'violet'];
  let colorIndex = -1;
  return function(){
    if(++colorIndex >= colors.length){
      colorIndex = 0;
    }
    return colors[colorIndex];
  };
})();

console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
console.log(getNextRaibowColor());
