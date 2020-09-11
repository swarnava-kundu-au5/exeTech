function evenFind(arr) {
  let arrDis = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrDis.push(arr[i]);
    }
  }
  console.log(arrDis);
}

let arr = [2, 5, 6, 8, 9, 15, 20, 35, 51, 76, 84, 91, 92];
evenFind(arr);
