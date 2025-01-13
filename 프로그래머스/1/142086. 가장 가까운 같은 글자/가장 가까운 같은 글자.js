function solution(s) {
  let answer = [];
  let compare = '';
  let dist;
  for (let i = 0; i < s.length; i++) {
    dist = 0;
    for (let j = 0; j < i; j++) {
      if (s[i] === compare[j]) dist = i - j;
    }
    dist ? answer.push(dist) : answer.push(-1);
    compare += s[i];
  }
  return answer;
}
