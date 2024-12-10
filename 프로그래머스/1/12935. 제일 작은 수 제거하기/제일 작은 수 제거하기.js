function solution(arr) {
  let answer = [];
  let min = arr[0];

  if (arr.length <= 1) answer.push(-1);
  else {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) min = arr[i];
    }
    arr.forEach((element) => {
      if (element != min) {
        answer.push(element);
      }
    });
  }
  return answer;
}