function solution(s) {
  let answer = true;
  if (s.length !== 4 && s.length !== 6) return !answer;
  for (let i = 0; i < s.length; i++) {
    if (+s[i] != s[i]) return !answer;
  }
  return answer;
}