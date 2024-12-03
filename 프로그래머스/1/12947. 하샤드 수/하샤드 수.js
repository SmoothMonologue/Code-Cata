function solution(n) {
  let arr = [];
  let pushValue = n;
  let hasha = 0;

  while (pushValue != 0) {
    arr.push(pushValue % 10);
    pushValue = Math.floor(pushValue / 10);
  }

  for (let i = 0; i < arr.length; i++) {
    hasha += arr[i];
  }

  return n % hasha == 0 ? true : false;
}