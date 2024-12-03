function solution(s) {
  return s.slice(1, 2) == "-" ? parseInt(s) * -1 : parseInt(s);
}