const calculateChange = (total, cash) => {
  let change = cash - total;
  const result = {};
  while (change != 0) {
    if (change > 2000) {
      const twentys = Math.floor(change / 2000);
      change = change - twentys * 2000;
      result.twentyDollar = twentys;
    } else if (change > 1000) {
      const tens = Math.floor(change / 1000);
      change = change - tens * 1000;
      result.tenDollar = tens;
    } else if (change > 500) {
      const fives = Math.floor(change / 500);
      change = change - fives * 500;
      result.fiveDollar = fives;
    } else if (change > 200) {
      const twos = Math.floor(change / 200);
      change = change - twos * 200;
      result.twoDollar = twos;
    } else if (change > 100) {
      const ones = Math.floor(change / 100);
      change = change - ones * 100;
      result.oneDollar = ones;
    } else if (change > 25) {
      const quarters = Math.floor(change / 25);
      change = change - quarters * 25;
      result.quarter = quarters;
    } else if (change > 10) {
      const dimes = Math.floor(change / 10);
      change = change - dimes * 10;
      result.dime = dimes;
    } else if (change > 5) {
      const nikels = Math.floor(change / 5);
      change = change - nikels * 5;
      result.nikel = nikels;
    } else {
      const pennies = change;
      change = 0;
      result.penny = pennies;
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
