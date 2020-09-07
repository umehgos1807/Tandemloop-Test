function oddList(x) {
  let resultString = "";
  for (let i = 1; x > 0; i++) {
    if (i % 2 !== 0) {
      resultString += `${i},`;
      x--;
    }
  }
  resultString = resultString.split("");
  resultString.pop();
  resultString = resultString.join("");
  return resultString;
}

console.log(oddList(1));
console.log(oddList(5));
