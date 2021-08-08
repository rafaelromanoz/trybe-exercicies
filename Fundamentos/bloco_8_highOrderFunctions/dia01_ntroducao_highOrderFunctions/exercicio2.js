const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, numberChecker) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return numberChecker(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));