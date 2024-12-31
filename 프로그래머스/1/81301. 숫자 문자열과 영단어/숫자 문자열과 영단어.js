function solution(s) {
  const Numbers = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
    ["zero", "0"],
  ];
  let answer = s;


  for (let i = 0; i < Numbers.length; i++) {
    if (answer.search(Numbers[i][0]) === -1) {
      continue;
    }
    else {
      answer = answer.replace(Numbers[i][0], Numbers[i][1]);
      i--;
    }
  }
  return +answer;
}