// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");

// Define a function to generate the meal plan.
function generateMealPlan() {
  // Get the list of safe foods for babies of all ages.
  var safeFoods = ["Banana", "Avocado", "Oatmeal", "Sweet potato", "Butternut squash", "Chicken", "Salmon", "Tofu", "Eggs", "Yogurt", "Beef", "Lentils", "Quinoa", "Brown rice", "Pasta", "Peanut butter", "Bread", "Apples", "Oranges", "Bananas", "Berries", "Green beans", "Carrots", "Zucchini", "Squash", "Peas", "Potatoes", "Tomatoes", "Onions", "Garlic", "Cucumbers", "Celery", "Kale", "Spinach", "Broccoli", "Cauliflower", "Sweet potatoes", "Pumpkin", "Watermelon", "Cantaloupe", "Honeydew", "Grapefruit", "Mango", "Papaya", "Apricots", "Peaches", "Nectarines"];
  // Create a list of common allergens.
  var allergens = ["Peanuts", "Tree nuts", "Eggs", "Milk", "Fish", "Shellfish", "Soy", "Wheat"];

  // Clear the existing table.
  var table = document.getElementById("meal-plan-table");
  table.getElementsByTagName("tbody")[0].innerHTML = "";

  // Create a weekly meal plan.
  for (var day = 0; day < 7; day++) {
    // Get a random food from the list of safe foods.
    var breakfast = safeFoods[Math.floor(Math.random() * safeFoods.length)];
    var lunch = safeFoods[Math.floor(Math.random() * safeFoods.length)];
    var dinner = safeFoods[Math.floor(Math.random() * safeFoods.length)];

    // If the food is an allergen, add it to the list of allergens offered that day.
    var allergensOffered = [];
    if (allergens.includes(breakfast)) {
      allergensOffered.push(breakfast);
    }
   

    if (allergens.includes(lunch)) {
      allergensOffered.push(lunch);
    }
    if (allergens.includes(dinner)) {
      allergensOffered.push(dinner);
    }
    
    // Add a row to the meal plan table.
    const mealPlanRow = document.createElement("tr");
    mealPlanRow.innerHTML = `
      <td>${day + 1}</td>
      <td>${breakfast}</td>
      <td>${lunch}</td>
      <td>${dinner}</td>
      <td>${allergensOffered.join(", ")}</td>
    `;
    mealPlanTable.appendChild(mealPlanRow);
  }
}

// Add an event listener to the button.
generateMealPlanButton.addEventListener("click", generateMealPlan);
