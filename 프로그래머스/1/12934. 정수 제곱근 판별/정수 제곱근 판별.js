function solution(n) {
  let index = 1;
  while (index ** 2 <= n) {
    if (index ** 2 == n) return (++index) ** 2;
    index++;
  }
  return -1;
}