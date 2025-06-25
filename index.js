// Base URL for the JSON server
constBAse_url="http://localhost:5505/";

//DOM Elements
const celebrationsForm = document.getElementById("celebration-form");
const celebrationList = document.getElementById("celebration-list");
const SearchInput = document.getElementById("search");

//Array to hold celebrations data
let celebrations = [];

//Initialize when page loads
document.addEventListener("DOMContentLoaded",()=>{
  loadCelebrations();


//Event Listeners
celebrationsForm.addEventListener("submit", addCelebration);
SearchInput.addEventListener("input",filterCelebrations);

});

//load Celebrations from server
function loadCelebrations(){
  fetch(BASE_URL)

  .then(response => response,json())
  .then(data=>{
    celebrations = data;

    renderAllCelebrations(celebrations);
  })
  
}
