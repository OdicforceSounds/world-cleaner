const { createObjectLiteral } = require("typescript");
const { userRegistration } = require("../users/userRegistration");

const company = {
  isRegistered: false,
  id: this.id,
  name: this.name,
  email: this.email,
  logo: this.logo,
  employees: this.employees,
  companiesRegistration() {
    userRegistration();
    console.log(`Company: ${this.name} Employees: ${this.employees}`);
  },
};

const me = Object.create(company);

me.name = "Odicforcesounds";
me.employees = 1;
me.isRegistered = true;
me.companiesRegistration();
