const blogsList = {
  blogSpot: [
    {title: 'Critica Sem Piedade', address: 'https://criticasempiedade.blogspot.com'},
    {title: 'Macaco Preguiçoso', address: 'https://macacopreguicoso.blogspot.com'},
    {title: 'odicforcesounds', address: 'https://odicforcesounds.blogspot.com'}
  ],
  printBlogs() {
    this.blogSpot.forEach(blog => {
      console.log(blog.title, blog.address);
    });
  }
}

blogsList.printBlogs();

