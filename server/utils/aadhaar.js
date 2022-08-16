import {ELEVEN_TIMES_NINE} from '../constants/aadhaar';

// const generateCheckSumDigit = (randomNumberArray) => {
//   const d = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
//     [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
//     [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
//     [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
//     [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
//     [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
//     [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
//     [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
//   ];

//   const p = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
//     [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
//     [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
//     [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
//     [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
//     [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
//     [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
//   ];

//   const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

//   let c = 0;
//   for (let i = 0; i < randomNumberArray.length; i++) {
//     c = d[c][p[(i + 1) % 8][randomNumberArray[i]]];
//   }
//   return inv[c];
// };

// const generateAadhaar = () => {
//   const aadhaarNumberArray = [];
//   let randomNumber = Math.floor(Math.random() * ELEVEN_TIMES_NINE + 1);

//   while (randomNumber != 0) {
//     const digit = randomNumber % 10;
//     aadhaarNumberArray.push(digit);
//     randomNumber = Math.floor(randomNumber / 10);
//   }

//   const checkSumDigit = generateCheckSumDigit(aadhaarNumberArray);
//   aadhaarNumberArray.reverse();
//   aadhaarNumberArray.push(checkSumDigit);
//   let aadhaarNumber = 0;
//   aadhaarNumberArray.forEach((value, index) => {
//     aadhaarNumber = aadhaarNumber + value;
//     if (index !== aadhaarNumberArray.length - 1) {
//       aadhaarNumber = aadhaarNumber * 10;
//     }
//   });

//   return aadhaarNumber;
// };

function generate(array) {
  const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ];

  const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
  ];
  const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

  let c = 0;
  for (let i = 0; i < array.length; i++) {
    c = d[c][p[(i + 1) % 8][array[i]]];
  }
  return inv[c];
}

function generateAadhaar() {
  const aadhaarArray = [];
  let x = Math.floor(Math.random() * ELEVEN_TIMES_NINE + 1);

  while (x != 0) {
    const digit = x % 10;
    aadhaarArray.push(digit);
    x = Math.floor(x / 10);
  }
  const last_digit = generate(aadhaarArray);
  aadhaarArray.reverse();
  aadhaarArray.push(last_digit);
  let ans = 0;
  aadhaarArray.forEach((value, index) => {
    ans = ans + value;
    if (index !== aadhaarArray.length - 1) {
      ans = ans * 10;
    }
  });

  return ans;
}

export default generateAadhaar;
