/* ── GENRE COLORS (for placeholder covers) ── */

var genreColors = {
  "RPG": "#7c3aed",
  "Action": "#ef4444",
  "Roguelike": "#f59e0b",
  "Platformer": "#10b981",
  "Simulation": "#3b82f6",
  "Adventure": "#22d3ee",
  "Sandbox": "#84cc16",
  "Puzzle": "#ec4899",
  "Shooter": "#f97316"
};

/* ── HELPER: generate placeholder cover SVG ── */

function makeCoverUrl(game) {
  var color = genreColors[game.genre] || "#7c3aed";
  var initials = game.title.split(" ").map(function(w) { return w[0]; }).join("").substring(0, 3);
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">'
    + '<rect width="400" height="250" fill="' + color + '"/>'
    + '<text x="200" y="115" text-anchor="middle" font-family="sans-serif" font-size="64" fill="rgba(255,255,255,0.3)">' + initials + '</text>'
    + '<text x="200" y="170" text-anchor="middle" font-family="sans-serif" font-size="18" fill="rgba(255,255,255,0.7)">' + game.genre + '</text>'
    + '</svg>';
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}
