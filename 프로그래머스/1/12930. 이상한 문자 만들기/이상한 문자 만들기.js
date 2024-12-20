function solution(s) {
  let answer = "";
  let strArr = s.split(" ");
  strArr.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0
        ? (answer += str[i].toUpperCase())
        : (answer += str[i].toLowerCase());
    }
    answer += " ";
  });
  return answer.substring(0, answer.length - 1);
}