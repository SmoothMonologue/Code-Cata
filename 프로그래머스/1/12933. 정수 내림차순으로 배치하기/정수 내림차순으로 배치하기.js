function solution(n) {
  let arr = [];
  let pushValue = n;
  let max = 0;
  let result = "";

  while (pushValue != 0) {
    arr.push(pushValue % 10);
    pushValue = Math.floor(pushValue / 10);
  }

  for (let i = 0; i < arr.length; i++) {
    max = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        arr[j] = arr[i];
        arr[i] = max;
      }
    }
    result += arr[i];
  }

  return result / 1;
}