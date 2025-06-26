// Base URL for the JSON server
constBASE_url="https://challange-json-server.onrender.com";

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
  .catch(error => console.error("Error",error));
}

//Render all celebrations
function renderAllCelebrations(celebrationsArray){
  
    celebrationList.innerHTML = "";
    celebrationsArray.forEach(celebration=>{
      const celebration = renderCelebration(celebration);
      celebrationList.appendChild(celebrationElement);

    });


// render a single celebration
function renderCelebrations(celebration){
  const li = document.createElement("li");

 //check if celebration is within 7 days for notification
 const today = new Date();
 const celebrationDate = new Date (celebration.celebrationDate) 
} 
 //set both dates to same time to compare only the date part
 today.setHours(0,0,0,0);
 celebrationdate.setHours(0,0,0,0);

//calculate difference in days
const diffinDays = Math.floor((celebrationDate-today)/(1000*60*60*24));

//if the celebration is in the next 7 days(includingtoday) and not in past

if(diffinDays>=0&&diffinDays<=7){
  li.classList.add("upcoming");
}

//Format the celebration for display
const formattedDate = celebrationDate.toLocaleDateString("en-US",{
  year:"numeric",
  month:"long",
  day:"numeric"
});

li.innerHTML=`
<strong>${celebrationElement.name}</strong>

<p>Date: ${formattedDate}</p>

<p>Location: ${celebration.location}</p>

<p>Gift: ${celebration.gift} (Cost: $${celebration.cost})</p>

<p>Delivery: ${celebration.delivery}</p>

<button class="delete-btn" data-id="${celebration.id}">Delete</button>`;

//Add eventlistener to delete button
const deleteButton = li.querySelector("delete-btn");
deleteButton.addEventListener("click",()=>deleteCelebration(celebration.id));

return li;
}

//Add new celebration
function addCelebration(event){
  event.preventDefault();
}

//get form values
const name = document.getElementById('name').value;

const celebrationdate = document.getElementById('celebrationdate').value;

const location = document.getElementById('location').value;

const gift = document.getElementById('gift').value;

const cost = parseFloat(document.getElementById('cost').value);

const delivery = document.getElementById('delivery').value;

//create new Celebration Object
const newCelebration = {
  jina,

  celebrationdate,

  location,

  gift,

  cost,

  delivery
};

//POST request to add new celebration
fetch(BASE_URL,{
  method: "POST",
  headers:{
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(newCelebration)
})

  .then(response=>response.json())
  .then(data=>{

  //add new celebration array and re-render
    celebrations.push(data);
    renderAllCelebrations(celebrations)

    //Reset form
    celebrationsForm.requestFullscreen();
  })
    .catch(error=>console.error("Error",error));

    //function to delete celebration

    //Delete request to remove the celebration


    //remove the celebration from the array and re-render
