function solution(s) {
  let answer = "";
  let arr = [];
  let min;

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    min = arr[i];
    for (let j = i; j < s.length; j++) {
      if (arr[j] > min) {
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    answer += arr[i];
  }
  return answer;
}