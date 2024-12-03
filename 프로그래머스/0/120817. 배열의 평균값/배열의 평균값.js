function solution(numbers) {
  let sum = 0;
  let check;
  numbers.forEach(element => {
    sum += element;
  });
  sum /= numbers.length;
  check = sum * 10 % 10;
  if (check != 0 && check != 5) {
    sum = Math.floor(sum);
  }
  return sum;
}