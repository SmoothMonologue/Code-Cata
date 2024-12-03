function solution(x, n) {
  let arr = [];
  let element = x;
  for (let i = 0; i < n; i++) {
    arr[i] = element;
    element += x;
  }
  return arr;
}