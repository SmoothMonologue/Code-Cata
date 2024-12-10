function solution(s) {
  let answer = "";
  s.length % 2 == 1
    ? (answer = s.substr(s.length / 2, 1))
    : (answer = s.substr(s.length / 2 - 1, 2));
  return answer;
}