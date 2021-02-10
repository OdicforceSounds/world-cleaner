"use strict";
exports.__esModule = true;
exports.brands = void 0;
exports.brands = {
    BrandLogo: "",
    BrandName: "",
    BrandEmail: "",
    BrandWebSite: "",
    BrandAddress: "",
    BrandGPS: "",
    BrandEmployee: "",
    BrandRate: function () {
        // for each BrandEmployee positive rate +1
        this.BrandEmployee.forEach(function (employee) {
            console.log("Rating Brands!");
        });
    }
};
