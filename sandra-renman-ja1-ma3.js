// Question 1

(a, b) => a - b;

// Question 2

const baseUrl = "https://api.rawg.io/api/games?genres=sports";
function loadGames(json) {
  const games = json.results;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loadGames(json);
  })
  .catch(function(error) {
    console.log(error);
  });

// Question 3

let sentence = "These cats are outrageous.";

let formattedSentence = sentence.replace("cats", "giraffes");

// Question 4   Inte klar!!

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = "";

if (params.has("id")) {
  id = params.get("id");
}
if (id < 10) {
  document.location.href = "first.html";
} else if (id >= 10) {
  document.location.href = "second.html";
} else {
  document.location.href = "third.html";
}

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6

const newListItem = document.createElement("li");
newListItem.className = "parrots";

const listContent = document.createTextNode("Parrots");

newListItem.appendChild(listContent);

const listContainer = document.querySelector(".animals");
const cowsListItem = document.querySelector(".cows");

listContainer.appendChild(newListItem);
cowsListItem.after(newListItem);

// Question 7

const ratingUrl = "https://api.rawg.io/api/games/3801";

fetch(ratingUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const rating = json.rating;

    const ratingContainer = document.querySelector(".rating");
    //ratingContainer.innerHTML = "The rating is"  + rating;
    // or do you want it to be
    const ratingContent = document.createTextNode("The rating is " + rating);
    ratingContainer.appendChild(ratingContent);
  })
  .catch(function(error) {
    console.dir(error);
  });
