const a = [5, 3, 2, 4, 1, 0];
bubbleSort(a);

function bubbleSort(a){
  let flag = true;
  let count = 0;
  while(flag){
    flag = false;

    for(let i = a.length -1; i >= 1 ;i--){
      count++;
      if(a[i] < a[i-1]){
        const tmp = a[i];
        a[i] = a[i-1];
        a[i-1] = tmp;
        flag = true;
  
        console.log(a);
      }
    }
  }
  console.log(count); 
}
