function solution(price, money, count) {
  let answer = money - (price * count * (count + 1)) / 2;

  return answer > 0 ? 0 : -answer;
}