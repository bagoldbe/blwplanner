// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");

// Define a function to generate the meal plan.
function getMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["cow's milk", "egg", "finned fish", "peanut", "sesame", "shellfish", "soy", "tree nuts", "wheat"];
  const menu = [
    {
      name: "Scrambled eggs with cheese",
      ingredients: ["eggs", "cheddar cheese", "butter"],
    },
    {
      name: "Oatmeal with banana and cinnamon",
      ingredients: ["rolled oats", "milk", "banana"],
    },
    {
      name: "Grilled cheese sandwich",
      ingredients: ["bread", "cheddar cheese", "butter"],
    },
    {
      name: "Sweet potato and black bean tacos",
      ingredients: ["sweet potato", "black beans", "taco seasoning"],
    },
    {
      name: "Chicken and vegetable stir fry",
      ingredients: ["chicken breast", "broccoli", "soy sauce"],
    },
    {
      name: "Salmon and vegetable kebabs",
      ingredients: ["salmon fillet", "zucchini", "red onion"],
    },
    {
      name: "Mini turkey meatballs with tomato sauce",
      ingredients: ["ground turkey", "breadcrumbs", "tomato sauce"],
    },
    {
      name: "Broccoli and cheddar cheese omelet",
      ingredients: ["eggs", "cheddar cheese", "broccoli"],
    },
  ];

  // Filter the menu to include only baby led weaning foods
  const babyLedWeaningFoods = menu.filter(item => {
    return item.ingredients.every(ingredient => {
      return allergens.indexOf(ingredient) === -1;
    });
  });

  // Select five random baby led weaning foods with three ingredients or less
  const selectedFoods = [];
  while (selectedFoods.length < 5) {
    const randomFood = babyLedWeaningFoods[Math.floor(Math.random() * babyLedWeaningFoods.length)];
    if (randomFood.ingredients.length <= 3 && selectedFoods.indexOf(randomFood) === -1) {
      selectedFoods.push(randomFood);
    }
  }

  // Clear any existing rows from the table
  mealPlanTable.innerHTML = "<thead><tr><th>Day</th><th>Meals</th><th>Ingredients</th></tr></thead><tbody></tbody>";

  // Add a row to the table for each day and meal, and populate with a randomly selected food
  days.forEach(day => {
    const dayRow = document.createElement("tr");
    const dayCell = document.createElement("td");
    dayCell.textContent = day;
    dayRow.appendChild(dayCell);
    meals.forEach(meal => {
      const mealCell = document.createElement("td");
      mealCell.textContent = meal;
      dayRow.appendChild(mealCell);
      const foodCell = document.createElement("td");
      const randomFood = selectedFoods[Math.floor(Math.random() * selectedFoods.length)];
      const foodList = document.createElement("ul");
      randomFood.ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        foodList.appendChild(listItem);
      });
      foodCell.appendChild
