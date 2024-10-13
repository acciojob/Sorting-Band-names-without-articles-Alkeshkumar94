// Array of band names
const bandNames = ["The Beatles", "Led Zeppelin", "Aerosmith", "Anberlin", "The Rolling Stones"];

// Function to strip articles from band names
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort the band names, ignoring the articles
const sortedBandNames = bandNames.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Get the ul element
const bandList = document.getElementById("band");

// Create and append li elements for each sorted band name
sortedBandNames.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band; // Set the band name as the text content
  bandList.appendChild(li); // Append the li to the ul
});
