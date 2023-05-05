// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");

// Define a function to generate the meal plan.
function getMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["cow's milk", "egg", "finned fish", "peanut", "sesame", "shellfish", "soy", "tree nuts", "wheat"];

  // Generate the meal plan.
  const mealPlan = {};
  days.forEach((day) => {
    mealPlan[day] = {};
    meals.forEach((meal) => {
      const menuIndex = Math.floor(Math.random() * menu.length);
      const menuItem = menu[menuIndex];
      mealPlan[day][meal] = menuItem;
    });
    mealPlan[day]["Allergens"] = allergens[Math.floor(Math.random() * allergens.length)];
  });

  // Store the meal plan in Local Storage.
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan));

  return mealPlan;
}

// Define a function to display the meal plan in the table.
function displayMealPlan(mealPlan) {
  const tbody = mealPlanTable.querySelector("tbody");
  tbody.innerHTML = "";

  Object.keys(mealPlan).forEach((day) => {
    const row = tbody.insertRow();
    const dayCell = row.insertCell();
    dayCell.textContent = day;

    Object.keys(mealPlan[day]).forEach((meal) => {
      if (meal !== "Allergens") {
        const mealCell = row.insertCell();
        mealCell.textContent = mealPlan[day][meal];
      }
    });

    const allergensCell = row.insertCell();
    allergensCell.textContent = mealPlan[day]["Allergens"];
  });
}

// Define a function to load the meal plan from Local Storage.
function loadMealPlan() {
  const mealPlan = JSON.parse(localStorage.getItem("mealPlan"));
  if (mealPlan) {
    displayMealPlan(mealPlan);
  }
}

// Add an event listener to the button.
generateMealPlanButton.addEventListener("click", () => {
  const mealPlan = getMealPlan();
  displayMealPlan(mealPlan);
});

// Load the meal plan from Local Storage on page load.
loadMealPlan();
