// odicforcesounds.com

const profile = {
  name: 'odicforcesounds',
  wiki: 'https://wiki.odicforcesounds.com/docs',
  domain: 'odicforcesounds.com',
  email: '@odicforcesounds.com',
  author: 'OscarFM',
  slogan: 'As Water can Wet or Knock, As the Wind brings the Whisperings of Thunder Screams, As Fire, Life and Death',
  gitPage: 'https://github.com/odicforcesounds',
  logProfile() {
    let name = this.name;
    let mail = this.email;
    let band = this.bandCamp;
    let slogan = this.slogan;
    console.log(`Welcome to  ${name} 
    My e-Mail is ${mail} 
    My BandCamp link is ${band}
    My Personal Slogan is ${slogan}
    `);


  }
}

profile.logProfile();

