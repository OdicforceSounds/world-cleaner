const { createObjectLiteral } = require("typescript");
const companiesRegistration = require("./companyRegistration");

const company = {
  isRegistered: false,
  id: this.id,
  name: this.name,
  email: this.email,
  logo: this.logo,
  employees: this.employees,
  companiesRegistration() {
    console.log("I am a Company!");
  },
};

const me = Object.create(company);

me.name = "Odicforcesounds";
me.isRegistered = true;
me.companiesRegistration();
