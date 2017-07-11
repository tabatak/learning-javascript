// 挿入ソート
// データが降順に並んでいる場合に、計算量が大きくなる
// データが昇順に並んでいる場合は、おおよそn回の計算量ですむ
// ある程度整列されたデータに対しては高速に動作する
function answer1(n, a){
  let count = 0;
  for (let i = 1; i < n; i++ ){
      console.log(a);

    v = a[i];
    j = i - 1;
    while(j >= 0 && a[j] > v) {
      a[j + 1] = a[j];
      j--;
      count++;
    }
    a[j+1] = v;
  }

  console.log(a);
  console.log(count);
}


const n = 6;
let a = [6, 5, 4, 3, 2, 1];
answer1(n, a);