const facebookPages = {
  facePage: [
    {title: 'Open Your Mind and Learn', address: 'https://www.facebook.com/OpenYourMindLearn/'},
    {title: 'Critica sem Piedade', address: 'https://www.facebook.com/criticasempiedade/'},
    {title: 'Deep Random Meanings', address: 'https://www.facebook.com/DeepRandomMeanings/'},
    {title: 'Rakzhodekams', address: 'https://www.facebook.com/rakzhodekams/'},
    {title: 'OdicforceSounds', address: 'https://www.facebook.com/odicforcesounds/'},
    {title: 'OscarFM', address: 'https://www.facebook.com/RadioOscarFM'},
    {title: 'World Wide Conscience Cleaner', address: 'https://www.facebook.com/worldwideconsciencecleaner'}
  ],
  faceArt() {
    this.facePage.forEach(page => {
      console.log(page.title, page.address);
    });
  }
};

facebookPages.faceArt();

