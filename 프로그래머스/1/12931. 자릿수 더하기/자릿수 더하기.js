function solution(n) {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let remain = n % 10 ** (i + 1);
    sum += Math.floor(remain / 10 ** i);
  }
  return sum;
}