function solution(food) {
  let answer = '';
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < (food[i] - 1) / 2; j++) {
      answer += i;
    }
  }
  answer += '0' + answer.split('').reverse().join('');
  return answer;
}
