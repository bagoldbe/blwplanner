// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");

// Define baby-led weaning menu items
const menu = [
  "Avocado Slices",
  "Steamed Broccoli Florets",
  "Soft Cooked Carrot Sticks",
  "Roasted Sweet Potato Wedges",
  "Steamed Green Beans",
  "Soft Cooked Zucchini Sticks",
  "Mashed Banana",
  "Soft Cooked Cauliflower Florets",
  "Steamed Butternut Squash",
  "Soft Cooked Asparagus Spears"
];

// Define a function to generate the meal plan.
function createMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["peanuts", "shellfish", "gluten", "dairy", "soy"];
  
  // clear any existing rows from the table
  mealPlanTable.innerHTML = "";

  // create the header row
  const headerRow = mealPlanTable.insertRow();
  headerRow.insertCell().appendChild(document.createTextNode("Day"));
  headerRow.insertCell().appendChild(document.createTextNode("Meal"));
  headerRow.insertCell().appendChild(document.createTextNode("Menu"));
  headerRow.insertCell().appendChild(document.createTextNode("Allergens"));

  // create a map to keep track of which allergens have been assigned to which days
  const allergenMap = new Map();
  for (const allergen of allergens) {
    allergenMap.set(allergen, []);
  }

  // create the meal plan rows
  for (const day of days) {
    for (const meal of meals) {
      // choose a random menu item from the menu array
      const menuItem = menu[Math.floor(Math.random() * menu.length)];

      // choose an allergen for the meal
      let allergen = "";
      let allergenList = allergenMap.get(allergen);
      while (allergenList.length === days.length) {
        // all allergens have already been assigned to this day, so try a different allergen
        allergen = allergens[Math.floor(Math.random() * allergens.length)];
        allergenList = allergenMap.get(allergen);
      }
      allergenList.push(day);

      // create the row for this meal in the meal plan table
      const row = mealPlanTable.insertRow();
      row.insertCell().appendChild(document.createTextNode(day));
      row.insertCell().appendChild(document.createTextNode(meal));
      row.insertCell().appendChild(document.createTextNode(menuItem));
      row.insertCell().appendChild(document.createTextNode(allergen));
    }
  }
}

// Add an event listener to the button.
generateMealPlanButton.addEventListener("click", createMealPlan);
