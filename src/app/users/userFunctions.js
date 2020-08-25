//
const rateVideo = false;
const createVideo = false;
// Between Clients and Company Employees Action / Attitude actions can be rated without video concept_proof
const ratePerson = {
  simpathy: this.simpathy,
  speed: 0,
  detailed: 0,
  organized: 0,
  integrity: 0,
  passion: 0,
  motivated: 0,
  giveTime: 0,
  servant: 0,
  // add more
};

const userSetup = function () {
  if (!createVideo) {
    return rateVideo;
  } else {
    return ratePerson;
  }
};

module.exports = userSetup;
