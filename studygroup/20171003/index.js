const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream("./prefectures2.txt", "utf8");
const reader = readline.createInterface({ input: stream });

let arr = [];
reader.on("line", (data) => {
  const prefecture = data.split(',');
  arr.push(prefecture);
  if (arr.length === 47){
    arr.forEach((p) => console.log(p[1]));
  }
});
