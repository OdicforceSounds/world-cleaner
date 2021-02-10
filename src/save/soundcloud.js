const soundCloud = {
  links: [
    {title: 'OdicforceSounds Channel', address: 'https://soundcloud.com/odicforcesounds-channel'},
    {title: 'Sun Wukong Expression', address: 'https://soundcloud.com/sun-wukong_expression'},
    {title: 'Deep Random Meanings', address: 'https://soundcloud.com/deep_random_meanings'},
    {title: 'Shamanic Quest Dream', address: 'https://soundcloud.com/shamanic_quest_dream'},
    {title: 'Tao Touch', address: 'https://soundcloud.com/tao_touch'}
  ],
  printLinks() {
    this.links.forEach(link => {
      console.log(link.title, link.address);

    });
  }
}

soundCloud.printLinks();
