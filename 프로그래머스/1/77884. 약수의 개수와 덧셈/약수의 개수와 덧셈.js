function solution(left, right) {
  var answer = 0;
  for (let i = left; i < right + 1; i++) {
    isEven(i) ? (answer += i) : (answer -= i);
  }
  return answer;
}
function isEven(n) {
  let count = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) count++;
  }

  return count % 2 == 0 ? 1 : 0;
}