function solution(n, m) {
  let answer = [];
  let divN = divisor(n),
    divM = divisor(m),
    mulN = multiple(n, m),
    mulM = multiple(m, n);

  for (let i = divN.length - 1; i >= 0; i--) {
    if (answer.length===1) break;
    for (let j = divM.length - 1; j >= 0; j--) {
      if (divN[i] == divM[j]) {
        answer.push(divM[j]);
        break;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    if (answer.length===2) break;
    for (let j = 0; j < n; j++) {
      if (mulN[i] < mulM[j]) continue;
      else if (mulN[i] === mulM[j]) {
        answer.push(mulM[j]);
        break;
      }
    }
  }
  return answer;
}

function divisor(n) {
  let div = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) div.push(i);
  }
  div.push(n);
  return div;
}

function multiple(n, m) {
  let mul = [];
  for (let i = 1; i <= m; i++) {
    mul.push(n * i);
  }
  return mul;
}