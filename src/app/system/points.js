/*
 * Eternal Way to express value to some other value
 */

function* point() {
  let pointNumber = 0;
  while (true) {
    yield pointNumber++;
    console.log("You have gained " + pointNumber + " points");
  }
}

const createPoint = point();
// console.log(createPoint);
let countPoint = createPoint.next().value;
console.log(countPoint);
