const userSetup require("./userFunctions");

const videoStat = false;
const approveAction = true;
const denyAction = true;
let positiveAction = approveAction;
let negativeAction = denyAction;

const userRate = function () {
  if (!videoStat) {
    let positiveAction = 1;
    let negativeAction = 0;
    userSetup();
  }
};

module.exports = userRate;
