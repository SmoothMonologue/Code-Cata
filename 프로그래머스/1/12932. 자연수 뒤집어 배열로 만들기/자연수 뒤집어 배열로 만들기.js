function solution(n) {
  let arr = [];
  let pushValue = n;

  while (pushValue != 0) {
    arr.push(pushValue % 10);
    pushValue = Math.floor(pushValue / 10);
  }
  return arr;
}