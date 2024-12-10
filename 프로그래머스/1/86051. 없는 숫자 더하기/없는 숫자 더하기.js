function solution(numbers) {
  let answer = 0;
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  numbers.forEach((number) => {
    count[number]++;
  });
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) answer += i;
  }
  return answer;
}
