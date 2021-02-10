export const brands = {
  BrandLogo: "",
  BrandName: "",
  BrandEmail: "",
  BrandWebSite: "",
  BrandAddress: "",
  BrandGPS: "",
  BrandEmployee: "",
  BrandRate() {
    // for each BrandEmployee positive rate +1
    this.BrandEmployee.forEach(employee => {
      console.log("Rating Brands!")
    });
  }
}
