function solution(n) {
  let answer = 0;
  let max = 1;
  let temp = n;
  let multiCount = 1;
  for (let i = 1; i <= n; i *= 3) {
    max = i;
  }
  while (max > 0) {
    answer += Math.floor(temp / max) * multiCount;
    multiCount *= 3;
    temp -= max * Math.floor(temp / max);
    max = Math.floor(max / 3);
  }
  return answer;
}