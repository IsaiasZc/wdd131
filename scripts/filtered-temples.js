// ── Temple data array ──
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Kowloon, Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 51921,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  }
];

function displayTemples(list) {
  var gallery = document.getElementById("gallery");

  // Clear existing cards
  gallery.innerHTML = "";

  // Create a card for each temple in the list
  list.forEach(function (temple) {
    var figure = document.createElement("figure");

    var img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    var caption = document.createElement("figcaption");
    caption.innerHTML =
      "<h2>" + temple.templeName + "</h2>" +
      "<p><span>Location:</span> " + temple.location + "</p>" +
      "<p><span>Dedicated:</span> " + temple.dedicated + "</p>" +
      "<p><span>Area:</span> " + temple.area.toLocaleString() + " sq ft</p>";

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

function filterTemples(filter) {
  var filtered;

  if (filter === "old") {
    // Temples dedicated before 1900
    filtered = temples.filter(function (t) {
      return parseInt(t.dedicated) < 1900;
    });
  } else if (filter === "new") {
    // Temples dedicated after 2000
    filtered = temples.filter(function (t) {
      return parseInt(t.dedicated) > 2000;
    });
  } else if (filter === "large") {
    // Temples larger than 90,000 sq ft
    filtered = temples.filter(function (t) {
      return t.area > 90000;
    });
  } else if (filter === "small") {
    // Temples smaller than 10,000 sq ft
    filtered = temples.filter(function (t) {
      return t.area < 10000;
    });
  } else {
    // Home – show all temples
    filtered = temples;
  }

  // Update the page heading to show current filter
  var title = document.getElementById("gallery-title");
  if (filter === "home") {
    title.textContent = "Latter-day Saint Temples";
  } else {
    title.textContent = filter.charAt(0).toUpperCase() + filter.slice(1) + " Temples";
  }

  displayTemples(filtered);
}

var navLinks = document.querySelectorAll("#main-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Highlight the active link
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    link.classList.add("active");

    // Close mobile menu
    document.getElementById("main-nav").classList.remove("open");
    document.getElementById("menu-btn").innerHTML = "&#9776;";

    filterTemples(link.dataset.filter);
  });
});

var menuBtn = document.getElementById("menu-btn");
var mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("open");
  menuBtn.innerHTML = mainNav.classList.contains("open") ? "&#10005;" : "&#9776;";
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

displayTemples(temples);
