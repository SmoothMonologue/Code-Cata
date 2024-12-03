function solution(n) {
  if (n < 2) return n;

  let sum = 1 + n;
  for (let i = 2; i < n / 2 + 1; i++) {
    if (n % i == 0) sum += i;
  }
  return sum;
}