function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      answer.includes(sum) ? 1 : answer.push(sum);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}