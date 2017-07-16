const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
console.log(sum);

const words = ['Beachball', 'Rodeo', 'Angel', 'Aardvark', 'Xylophone', 'November', 'Clober'];
const alphabetical = words.reduce((a, x) => {
  if(!a[x[0]]){
    a[x[0]] = [];
  }
  a[x[0]].push(x);
  console.log(a[x[0]]);
  return a;
}, {});

console.log(alphabetical);

console.log('---- stats ----');
const data = [3.3, 5, 7.2, 12, 4, 6 ,10.3];
const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta/a.N;
  a.M2 += delta*(x - a.mean);
  return a;
}, {N: 0, mean: 0, M2: 0});
if(stats.N > 2){
  stats.variance = stats.M2 / (stats.N -1);
  stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);