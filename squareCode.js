const squareCode = (input) => {
  const columnLength = Math.ceil(Math.sqrt(input.split(" ").join("").length));
  const arr = input.split(" ").join("").split("");
  const newArr = [];
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.splice(0, columnLength));
    length--;
  }
  newArr.push(arr.splice(0, input.length - length));
  const transposed = newArr[0].map((_, colIndex) =>
    newArr.map((row) => row[colIndex])
  );
  let finalString = "";
  for (const i of transposed) {
    finalString += i.join("") + " ";
  }
  return finalString;
};

console.log(
  squareCode(
    "If man was meant to stay on the ground god would have given us roots"
  )
);
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
