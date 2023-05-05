// Define a function to generate the meal plan
function createMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["cow's milk", "egg", "finned fish", "peanut", "sesame", "shellfish", "soy", "tree nuts", "wheat"];
  
  // Define a variable to hold the meal plan
  const mealPlan = {};

  // Loop through each day
  for (const day of days) {
    // Add an object for the day to the mealPlan object
    mealPlan[day] = {};

    // Loop through each meal
    for (const meal of meals) {
      // Add an array for the meal to the day object
      mealPlan[day][meal] = [];

      // Loop through each allergen
      for (const allergen of allergens) {
        // Generate a random boolean value for each allergen
        const hasAllergen = Math.random() < 0.1;

        // If the meal contains the allergen, add it to the meal array
        if (hasAllergen) {
          mealPlan[day][meal].push(allergen);
        }
      }
    }
  }

  // Store the meal plan in localStorage
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
}

// Define a function to retrieve the meal plan from localStorage
function getMealPlan() {
  // Get the meal plan from localStorage
  const mealPlanJSON = localStorage.getItem("mealPlan");

  // If the meal plan is not found in localStorage, return an empty object
  if (!mealPlanJSON) {
    return {};
  }

  // Parse the JSON string and return the meal plan object
  return JSON.parse(mealPlanJSON);
}

// Define a function to display the meal plan in the HTML table
function displayMealPlan() {
  const mealPlan = getMealPlan();
  const mealPlanTableBody = document.getElementById("meal-plan-table-body");
  
  // Loop through each day
  for (const day in mealPlan) {
    // Loop through each meal
    for (const meal in mealPlan[day]) {
      // Create a table row for the meal
      const row = mealPlanTableBody.insertRow();

      // Add the day to the first cell
      const dayCell = row.insertCell();
      dayCell.textContent = day;

      // Add the meal to the second cell
      const mealCell = row.insertCell();
      mealCell.textContent = meal;

      // Add the allergens to the third cell
      const allergensCell = row.insertCell();
      allergensCell.textContent = mealPlan[day][meal].join(", ");
    }
  }
}

// Add an event listener to the button to generate the meal plan and display it in the table
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
generateMealPlanButton.addEventListener("click", () => {
  createMealPlan();
  displayMealPlan();
});

// Display the meal plan when the page is loaded
window.addEventListener("load", () => {
  displayMealPlan();
});
