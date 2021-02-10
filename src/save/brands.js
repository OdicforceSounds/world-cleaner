const brand = {
  BrandLogo: "",
  BrandName: "",
  BrandEmail: "",
  BrandWebSite: "",
  BrandAddress: "",
  BrandGPS: "",
  BrandEmployeeList: [], // Array of Objedcts: Number of Employes and their details to play
  BrandRate() {
    this.BrandEmployeeList.forEach(companyEmployee => {
      // check employee rate and add 1-point per employee-positive-point to brandRate
    });
  },
  BrandPublish() {
    // publish:
    // brandLogo + BrandName + BrandWebSite + BrandRate
  }
};
