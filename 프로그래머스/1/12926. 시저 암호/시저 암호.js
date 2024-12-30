function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    else if (s[i].charCodeAt() <= 90 && s[i].charCodeAt() >= 65) {
      let nextCode = s[i].charCodeAt() + n;
      if (nextCode > 90) nextCode -= 26;
      answer += String.fromCharCode(nextCode);
    } else if (s[i].charCodeAt() <= 122 && s[i].charCodeAt() >= 97) {
      let nextCode = s[i].charCodeAt() + n;
      if (nextCode > 122) nextCode -= 26;
      answer += String.fromCharCode(nextCode);
    }
  }

  return answer;
}