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
    {
const menu = [
  {
    name: "Avocado Toast",
    ingredients: ["avocado", "bread", "lemon juice"],
  },
  {
    name: "Sweet Potato Fries",
    ingredients: ["sweet potato", "olive oil", "sea salt"],
  },
  {
    name: "Broccoli Cheese Bites",
    ingredients: ["broccoli", "cheddar cheese", "breadcrumbs"],
  },
  {
    name: "Banana Pancakes",
    ingredients: ["banana", "egg", "cinnamon"],
  },
  {
    name: "Roasted Carrots",
    ingredients: ["carrots", "olive oil", "thyme"],
  },
];

  //
