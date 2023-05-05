// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");
const recipeElement = document.getElementById("recipe");

// Define a function to generate the meal plan.
function getMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["cow's milk", "egg", "finned fish", "peanut", "sesame", "shellfish", "soy", "tree nuts", "wheat"];
  const menu = [    "Scrambled eggs with cheese",    "Oatmeal with banana and cinnamon",    "Grilled cheese sandwich",    "Sweet potato and black bean tacos",    "Chicken and vegetable stir fry",    "Salmon and vegetable kebabs",    "Mini turkey meatballs with tomato sauce",    "Broccoli and cheddar cheese omelet",    "Zucchini and corn fritters",    "Spinach and ricotta stuffed shells",    "Pesto pasta with cherry tomatoes",    "Cauliflower and cheese soup",    "Quinoa and black bean burgers",    "Hummus and vegetable wrap",    "Cheesy cauliflower tots",    "Butternut squash and apple soup",    "Tuna and vegetable sushi rolls",    "Peanut butter and banana sandwich",    "Vegetable and lentil curry",    "Sweet potato fries with dipping sauce"  ];

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
  localStorage.setItem("mealPlan",
