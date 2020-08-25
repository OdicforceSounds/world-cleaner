/*
 * Coins: First Aproach: "Pure Numeric Expressions that represent Value"
 */

function* coin() {
  let coinValue = 0;
  while (true) {
    yield coinValue++;
    console.log("World Cleaner Coin Number: ", coinValue);
  }
}

const createCoin = coin();
const shareCoin = console.log(createCoin.next().value);
shareCoin;
