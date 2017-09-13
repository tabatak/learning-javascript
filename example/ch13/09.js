function addThreeSquarAddFiveTakeSquareRoot(x){
  return Math.sqrt(Math.pow(x+3, 2) + 5);
}

const answer1 = (addThreeSquarAddFiveTakeSquareRoot(5) +
  addThreeSquarAddFiveTakeSquareRoot(2)) /
  addThreeSquarAddFiveTakeSquareRoot(7);
console.log(answer1);

const f = addThreeSquarAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2)) / f(7);
console.log(answer2);
