// Initialize Sidenav
const mobileNav = document.querySelector(".sidenav");
M.Sidenav.init(mobileNav, {});

// Initialize Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Initialize Autocomplete
const autoComplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComplete, {
  data: {
    Aruba: null,
    "Cancun Mexico": null,
    Hawaii: null,
    Florida: null,
    California: null,
    Jamaica: null,
    Paris: null
  }
});

// Initialize Material Boxed
const mb = document.querySelectorAll(".materialBoxed");
M.Materialbox.init(mb, {});

// Initialize Scrollspy
const scrollSpy = document.querySelectorAll(".scrollspy");
M.scrollSpy.init(scrollSpy, {});
// Year for Copyright
const year = new Date().getFullYear();
const spanYear = document.querySelector("#year");
spanYear.innerText = year;
