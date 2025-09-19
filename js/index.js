// app.js

// Fetch and store the data from JSON
let travelData = {};

fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log("Data loaded:", data); // Debugging
  })
  .catch(error => console.error("Error loading JSON:", error));

// Function to search recommendations
function searchRecommendations() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (!input) {
    resultsContainer.innerHTML = "<p>Please enter a keyword (beach, temple, or country).</p>";
    return;
  }

  let results = [];

  // Match beaches
  if (input.includes("beach")) {
    results = results.concat(travelData.beaches || []);
  }

  // Match temples
  if (input.includes("temple")) {
    results = results.concat(travelData.temples || []);
  }

  // Match countries
  if (input.includes("country")) {
    travelData.countries?.forEach(country => {
      results = results.concat(country.cities);
    });
  }

  // If no results
  if (results.length === 0) {
    resultsContainer.innerHTML = `<p>No results found for "${input}".</p>`;
    return;
  }
  

  results.forEach((item) => {
    const card = `
      <div class="card">
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <button class='btn'>Choose</button>
        </div>
      </div>
    `;
    resultsContainer.innerHTML += card;
  });

  resultsContainer.scrollIntoView({
    behavior: "smooth",  // smooth scrolling
    block: "start"       // align to the top of viewport
  });
}

// Function to clear results
function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}

// Attach event listeners
document.getElementById("searchBtn").addEventListener("click", searchRecommendations);
document.getElementById("resetBtn").addEventListener("click", clearResults);

function submitContact() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  alert(`Thanks ${name} for contacting us. We will get back to you soon`);
}
