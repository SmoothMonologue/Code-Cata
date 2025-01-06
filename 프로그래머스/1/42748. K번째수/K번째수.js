function solution(array, commands) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < commands.length; i++) {
    for (let j = commands[i][0]; j <= commands[i][1]; j++) {
      temp.push(array[j - 1]);
    }
    temp.sort((a, b) => a - b);
    if (temp.length === 0) continue;
    temp.length < commands[i][2]
      ? answer.push(temp[temp.length - 1])
      : answer.push(temp[commands[i][2] - 1]);
    temp = [];
  }
  return answer;
}