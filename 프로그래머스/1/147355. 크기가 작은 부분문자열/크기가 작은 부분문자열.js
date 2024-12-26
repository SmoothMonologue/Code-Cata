function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const littlesub = t.substr(i, p.length);
    if (littlesub <= p) answer++;
  }
  return answer;
}