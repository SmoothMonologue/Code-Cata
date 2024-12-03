function solution(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number / numbers.length;
  });
  return sum;
}