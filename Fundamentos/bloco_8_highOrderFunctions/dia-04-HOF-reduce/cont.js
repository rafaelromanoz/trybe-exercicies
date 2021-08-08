const numbers = ['0', 'l', 'r', 'o', 'u'];

const getBigger = (bigger, number) => bigger+number;

const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85