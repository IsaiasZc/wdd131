/* ── GAME DATA ── */

var games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    year: 2015,
    platform: "PC, PS4, Xbox One, Switch",
    rating: 4.9,
    description: "An open-world RPG set in a dark fantasy universe. Play as Geralt of Rivia, a monster hunter searching for his adopted daughter across a war-torn world filled with meaningful choices and consequences."
  },
  {
    id: 2,
    title: "Elden Ring",
    genre: "RPG",
    year: 2022,
    platform: "PC, PS5, Xbox Series X",
    rating: 4.8,
    description: "An action RPG developed by FromSoftware in collaboration with George R. R. Martin. Explore a vast open world called the Lands Between, battle massive bosses, and uncover the mystery of the Elden Ring."
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    genre: "Action",
    year: 2018,
    platform: "PC, PS4, Xbox One",
    rating: 4.9,
    description: "Set in the American Old West. You play as Arthur Morgan, an outlaw trying to survive with his gang while the world around them is changing fast. Huge open world with a lot to do."
  },
  {
    id: 4,
    title: "Hades",
    genre: "Roguelike",
    year: 2020,
    platform: "PC, PS4, PS5, Xbox, Switch",
    rating: 4.7,
    description: "A rogue-like dungeon crawler where you play as Zagreus, the son of Hades, trying to escape the Underworld. Fast combat, deep story, and rewards that make every run feel different."
  },
  {
    id: 5,
    title: "Celeste",
    genre: "Platformer",
    year: 2018,
    platform: "PC, PS4, Xbox One, Switch",
    rating: 4.6,
    description: "A challenging platformer about climbing a mountain. Help Madeline face her inner demons in tight, precise levels with a heartfelt story about anxiety and perseverance."
  },
  {
    id: 6,
    title: "Stardew Valley",
    genre: "Simulation",
    year: 2016,
    platform: "PC, PS4, Xbox One, Switch, Mobile",
    rating: 4.8,
    description: "A farming simulation game where you inherit your grandfather's old farm. Grow crops, raise animals, mine for resources, and build relationships with the townsfolk of Pelican Town."
  },
  {
    id: 7,
    title: "Hollow Knight",
    genre: "Platformer",
    year: 2017,
    platform: "PC, PS4, Xbox One, Switch",
    rating: 4.7,
    description: "A 2D action adventure through a vast interconnected underground world. Explore twisting caverns, battle corrupted creatures, and uncover an ancient kingdom buried beneath the surface."
  },
  {
    id: 8,
    title: "God of War Ragnarok",
    genre: "Action",
    year: 2022,
    platform: "PS4, PS5, PC",
    rating: 4.8,
    description: "Kratos and Atreus travel through the Nine Realms as Ragnarok gets closer. Heavy story, good combat, lots of Norse mythology."
  },
  {
    id: 9,
    title: "The Legend of Zelda: TOTK",
    genre: "Adventure",
    year: 2023,
    platform: "Switch",
    rating: 4.9,
    description: "The sequel to Breath of the Wild. Explore a transformed Hyrule with new abilities that let you build vehicles, fuse weapons, and reach sky islands above the clouds."
  },
  {
    id: 10,
    title: "Minecraft",
    genre: "Sandbox",
    year: 2011,
    platform: "PC, PS4, Xbox, Switch, Mobile",
    rating: 4.7,
    description: "A sandbox game where you can build anything you imagine using blocks. Survive the night, explore caves, fight creatures, or just build in creative mode with no limits."
  },
  {
    id: 11,
    title: "Portal 2",
    genre: "Puzzle",
    year: 2011,
    platform: "PC, PS3, Xbox 360",
    rating: 4.8,
    description: "A first-person puzzle game where you use a portal gun to navigate test chambers. Features a brilliant single-player story and a full co-op campaign with a friend."
  },
  {
    id: 12,
    title: "Disco Elysium",
    genre: "RPG",
    year: 2019,
    platform: "PC, PS4, PS5, Xbox, Switch",
    rating: 4.6,
    description: "A detective RPG with no combat. Solve a murder case using your mind, skills, and dialogue choices. Your thoughts and personality shape the story in unexpected ways."
  },
  {
    id: 13,
    title: "Sekiro: Shadows Die Twice",
    genre: "Action",
    year: 2019,
    platform: "PC, PS4, Xbox One",
    rating: 4.7,
    description: "A demanding action game set in Sengoku-era Japan. Play as a shinobi on a mission to rescue his kidnapped lord, using a prosthetic arm and precise swordplay."
  },
  {
    id: 14,
    title: "Animal Crossing: New Horizons",
    genre: "Simulation",
    year: 2020,
    platform: "Switch",
    rating: 4.5,
    description: "Build your dream island getaway. Decorate your home, collect creatures, craft items, and visit friends in this relaxing life simulation that runs in real time."
  },
  {
    id: 15,
    title: "Undertale",
    genre: "RPG",
    year: 2015,
    platform: "PC, PS4, Switch",
    rating: 4.7,
    description: "An RPG where you don't have to fight anyone. Fall into the Underground and meet a bunch of weird characters. The game actually remembers what you did, even after you reset."
  },
  {
    id: 16,
    title: "Baldur's Gate 3",
    genre: "RPG",
    year: 2023,
    platform: "PC, PS5, Xbox Series X",
    rating: 4.9,
    description: "A massive RPG based on Dungeons & Dragons rules. Create your character, recruit companions, and make choices that shape a deep branching story set in the Forgotten Realms."
  },
  {
    id: 17,
    title: "Cuphead",
    genre: "Platformer",
    year: 2017,
    platform: "PC, PS4, Xbox One, Switch",
    rating: 4.5,
    description: "A run-and-gun game drawn in 1930s cartoon style. Every level is a boss fight. Really hard, but the art and music make it worth it."
  },
  {
    id: 18,
    title: "Doom Eternal",
    genre: "Shooter",
    year: 2020,
    platform: "PC, PS4, Xbox One, Switch",
    rating: 4.6,
    description: "A fast-paced first-person shooter where you are the Doom Slayer. Rip through demons with an arsenal of weapons in aggressive, constant-motion combat across Hell and Earth."
  },
  {
    id: 19,
    title: "It Takes Two",
    genre: "Adventure",
    year: 2021,
    platform: "PC, PS4, PS5, Xbox, Switch",
    rating: 4.7,
    description: "A co-op adventure where two players control a couple turned into dolls. Every level introduces new gameplay mechanics in a creative journey about fixing a broken relationship."
  },
  {
    id: 20,
    title: "Ori and the Will of the Wisps",
    genre: "Platformer",
    year: 2020,
    platform: "PC, Xbox One, Switch",
    rating: 4.8,
    description: "A hand-painted platformer with really good controls. You guide Ori through a dangerous forest trying to find a lost spirit. The story hits hard and the music is great."
  }
];

/* ── FAVORITES (localStorage) ── */

function getFavorites() {
  var stored = localStorage.getItem("gv-favorites");
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
}

function saveFavorites(favIds) {
  localStorage.setItem("gv-favorites", JSON.stringify(favIds));
}

function isFavorite(gameId) {
  return getFavorites().indexOf(gameId) !== -1;
}

function toggleFavorite(gameId) {
  var favs = getFavorites();
  var index = favs.indexOf(gameId);
  if (index === -1) {
    favs.push(gameId);
  } else {
    favs.splice(index, 1);
  }
  saveFavorites(favs);
  return favs.indexOf(gameId) !== -1;
}

/* ── FIND GAME BY ID ── */

function findGame(id) {
  return games.filter(function(g) { return g.id === id; })[0] || null;
}

/* ── RENDER A SINGLE CARD ── */

function renderCard(game) {
  var saved = isFavorite(game.id);
  var heartClass = saved ? "fav-btn saved" : "fav-btn";
  var heartLabel = saved ? "Remove from favorites" : "Add to favorites";

  return `<article class="game-card" data-id="${game.id}">
    <img class="card-cover" src="${makeCoverUrl(game)}" alt="${game.title} cover art" loading="lazy" width="400" height="250">
    <div class="card-body">
      <h3>${game.title}</h3>
      <div class="card-meta">
        <span class="genre-badge">${game.genre}</span>
        <span>${game.year}</span>
        <button class="${heartClass}" data-fav="${game.id}" aria-label="${heartLabel}">&hearts;</button>
      </div>
    </div>
  </article>`;
}

/* ── RENDER GRID ── */

function renderGrid(gameList, gridEl) {
  if (gameList.length === 0) {
    gridEl.innerHTML = '<p class="no-results">No games found.</p>';
    return;
  }
  gridEl.innerHTML = gameList.map(function(g) { return renderCard(g); }).join("");
}

/* ── RENDER MODAL CONTENT ── */

function renderModal(game) {
  var saved = isFavorite(game.id);
  var btnClass = saved ? "fav-btn saved" : "fav-btn";
  var btnText = saved ? "&hearts; Remove from Favorites" : "&hearts; Add to Favorites";

  return `<img class="modal-cover" src="${makeCoverUrl(game)}" alt="${game.title} cover art" width="400" height="250">
    <h2>${game.title}</h2>
    <div class="modal-info">
      <span>${game.genre}</span>
      <span>${game.year}</span>
      <span>${game.platform}</span>
      <span>Rating: ${game.rating}/5</span>
    </div>
    <p>${game.description}</p>
    <button class="${btnClass}" data-fav="${game.id}">${btnText}</button>`;
}

/* ── MODAL OPEN / CLOSE ── */

function openModal(gameId) {
  var game = findGame(gameId);
  if (!game) return;
  var overlay = document.getElementById("modal-overlay");
  var content = document.getElementById("modal-content");
  content.innerHTML = renderModal(game);
  overlay.classList.add("open");
}

function closeModal() {
  var overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
}

/* ── CATALOG PAGE LOGIC ── */

function initCatalog() {
  var gridEl = document.getElementById("game-grid");
  var searchEl = document.getElementById("search");
  var filtersEl = document.getElementById("genre-filters");
  var formEl = document.getElementById("review-form");
  var selectEl = document.getElementById("review-game");

  if (!gridEl || !searchEl) return;

  var activeGenre = "All";

  // Build genre filter buttons
  var genres = ["All"];
  games.forEach(function(g) {
    if (genres.indexOf(g.genre) === -1) {
      genres.push(g.genre);
    }
  });

  filtersEl.innerHTML = genres.map(function(genre) {
    var cls = genre === "All" ? "genre-btn active" : "genre-btn";
    return `<button class="${cls}" data-genre="${genre}">${genre}</button>`;
  }).join("");

  // Populate form select
  if (selectEl) {
    games.forEach(function(g) {
      var opt = document.createElement("option");
      opt.value = g.title;
      opt.textContent = g.title;
      selectEl.appendChild(opt);
    });
  }

  // Filter and render
  function applyFilters() {
    var query = searchEl.value.toLowerCase().trim();
    var filtered = games.filter(function(g) {
      var matchesGenre = activeGenre === "All" || g.genre === activeGenre;
      var matchesSearch = g.title.toLowerCase().indexOf(query) !== -1;
      return matchesGenre && matchesSearch;
    });
    renderGrid(filtered, gridEl);
  }

  applyFilters();

  // Search input
  searchEl.addEventListener("input", applyFilters);

  // Genre filter clicks
  filtersEl.addEventListener("click", function(e) {
    if (e.target.classList.contains("genre-btn")) {
      activeGenre = e.target.getAttribute("data-genre");
      // Update active button
      var buttons = filtersEl.querySelectorAll(".genre-btn");
      buttons.forEach(function(btn) { btn.classList.remove("active"); });
      e.target.classList.add("active");
      applyFilters();
    }
  });

  // Card click → open modal (but not if clicking the fav button)
  gridEl.addEventListener("click", function(e) {
    if (e.target.classList.contains("fav-btn")) {
      var favId = Number(e.target.getAttribute("data-fav"));
      var nowSaved = toggleFavorite(favId);
      e.target.classList.toggle("saved", nowSaved);
      e.target.setAttribute("aria-label", nowSaved ? "Remove from favorites" : "Add to favorites");
      return;
    }
    var card = e.target.closest(".game-card");
    if (card) {
      openModal(Number(card.getAttribute("data-id")));
    }
  });

  // Modal overlay click to close
  document.getElementById("modal-overlay").addEventListener("click", function(e) {
    if (e.target === this) closeModal();
  });

  // Modal close button
  document.getElementById("modal-close").addEventListener("click", closeModal);

  // Modal fav button
  document.getElementById("modal-content").addEventListener("click", function(e) {
    if (e.target.classList.contains("fav-btn")) {
      var favId = Number(e.target.getAttribute("data-fav"));
      var nowSaved = toggleFavorite(favId);
      e.target.classList.toggle("saved", nowSaved);
      e.target.innerHTML = nowSaved ? "&hearts; Remove from Favorites" : "&hearts; Add to Favorites";
      applyFilters();
    }
  });

  // Escape key closes modal
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
  });

  // Form submit
  if (formEl) {
    formEl.addEventListener("submit", function(e) {
      e.preventDefault();
      var msgEl = document.getElementById("form-msg");

      var review = {
        name: document.getElementById("reviewer-name").value.trim(),
        email: document.getElementById("reviewer-email").value.trim(),
        game: document.getElementById("review-game").value,
        rating: Number(document.getElementById("review-rating").value),
        text: document.getElementById("review-text").value.trim()
      };

      // Save review to localStorage
      var reviews = JSON.parse(localStorage.getItem("gv-reviews") || "[]");
      reviews.push(review);
      localStorage.setItem("gv-reviews", JSON.stringify(reviews));

      msgEl.textContent = `Thanks, ${review.name}! Your review for "${review.game}" has been saved.`;
      msgEl.classList.add("success");
      formEl.reset();
    });
  }
}

/* ── FAVORITES PAGE LOGIC ── */

function initFavorites() {
  var gridEl = document.getElementById("game-grid");
  var emptyEl = document.getElementById("empty-state");
  var countEl = document.getElementById("fav-count");
  var clearBtn = document.getElementById("clear-favs");

  if (!emptyEl) return;

  function renderFavs() {
    var favIds = getFavorites();
    var favGames = games.filter(function(g) {
      return favIds.indexOf(g.id) !== -1;
    });

    if (favGames.length === 0) {
      gridEl.style.display = "none";
      emptyEl.style.display = "block";
      countEl.textContent = "";
      clearBtn.style.display = "none";
    } else {
      gridEl.style.display = "";
      emptyEl.style.display = "none";
      countEl.textContent = `${favGames.length} game${favGames.length > 1 ? "s" : ""} saved`;
      clearBtn.style.display = "";
      renderGrid(favGames, gridEl);
    }
  }

  renderFavs();

  // Card click → open modal or toggle fav
  gridEl.addEventListener("click", function(e) {
    if (e.target.classList.contains("fav-btn")) {
      var favId = Number(e.target.getAttribute("data-fav"));
      toggleFavorite(favId);
      renderFavs();
      return;
    }
    var card = e.target.closest(".game-card");
    if (card) {
      openModal(Number(card.getAttribute("data-id")));
    }
  });

  // Modal events
  document.getElementById("modal-overlay").addEventListener("click", function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);

  document.getElementById("modal-content").addEventListener("click", function(e) {
    if (e.target.classList.contains("fav-btn")) {
      var favId = Number(e.target.getAttribute("data-fav"));
      toggleFavorite(favId);
      closeModal();
      renderFavs();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
  });

  // Clear all favorites
  clearBtn.addEventListener("click", function() {
    saveFavorites([]);
    renderFavs();
  });
}

/* ── INIT ON PAGE LOAD ── */

var page = document.title;
if (page.indexOf("Catalog") !== -1) {
  initCatalog();
} else if (page.indexOf("Favorites") !== -1) {
  initFavorites();
}
