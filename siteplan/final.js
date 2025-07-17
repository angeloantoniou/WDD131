const movies = [
  {
    title: "Inception",
    year: "2010",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "A skilled thief leads a team into dreams to steal secrets."
  },
  {
    title: "The Dark Knight",
    year: "2008",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker, a criminal mastermind bent on chaos."
  },
  {
    title: "Interstellar",
    year: "2014",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "A team travels through a wormhole in space to save humanity."
  },
  {
    title: "The Prestige",
    year: "2006",
    image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    description: "Two rival magicians battle for supremacy in a deadly competition."
  },
  {
    title: "Tenet",
    year: "2020",
    image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    description: "An operative manipulates time to prevent World War III."
  },
  {
    title: "Dunkirk",
    year: "2017",
    image: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    description: "Allied soldiers are surrounded and must be evacuated during WWII."
  },
  {
    title: "Batman Begins",
    year: "2005",
    image: "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    description: "Bruce Wayne becomes Batman to fight crime and corruption in Gotham."
  }
];
function displayMovies(movieList) {
  const container = document.getElementById("movie-container");
  container.innerHTML = "";
  movieList.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title} Poster">
      <h3>${movie.title} (${movie.year})</h3>
      <p>${movie.description}</p>
    `;
    container.appendChild(movieCard);
  });
}

function getRandomMovies(count) {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

document.addEventListener("DOMContentLoaded", () => {
  const randomFive = getRandomMovies(5);
  displayMovies(randomFive);
});
