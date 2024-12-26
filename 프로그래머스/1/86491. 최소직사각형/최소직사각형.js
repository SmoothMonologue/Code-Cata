function solution(sizes) {
  let answer = 0;
  let comp = [];
  let wMax = 0,
    hMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i][0] < sizes[i][1]
      ? comp.push([sizes[i][1], sizes[i][0]])
      : comp.push(sizes[i]);
  }

  (wMax = comp[0][0]), (hMax = comp[0][1]);
  for (let i = 1; i < comp.length; i++) {
    if (comp[i][0] > wMax) wMax = comp[i][0];
    if (comp[i][1] > hMax) hMax = comp[i][1];
  }
  answer = wMax * hMax;
  return answer;
}