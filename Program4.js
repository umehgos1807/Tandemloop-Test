let arr = [0, 1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

let result = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element === 0) continue;
  for (let j = 1; j < 10; j++) {
    if (element % j === 0) {
      result[j] += 1;
    }
  }
}

console.log(result);
