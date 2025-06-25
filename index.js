// DOM Elements
const celebrationForm = document.getElementById("celebrationForm");
const celebrationList = document.getElementById("celebrationList");
const searchInput = document.getElementById("searchInput");
const notificationBadge = document.getElementById("notification badge");
const notificationPanel = document.getElementById("notificationPanel");
const notificationContent = document.getElementById("notificationContent");
const closeNotifications = document.getElementById("closeNotifications");
const upcomingCelebrations = document.getElementById("upcomingCelebrations");
const totalCost = document.getElementById("totalCost");
const readyPercantage = document.getElementById("readyPercantage");

//App initializing
function init(){
  saveCelebrations(); //data setup
  renderCelebrations(); //display existing celebrations
  updateStats(); // calculate/show metrics
  checkNotifications(); //handles notifications
}

//Event Listeners
celebrationForm.addEventListener("submit", addCelebration);
searchInput.addEventListener("input", filterCelebrations);
notificationBadge.addEventListener("click", toggleNotifications);
closeNotifications.addEventListener("click", toggleNotifications)