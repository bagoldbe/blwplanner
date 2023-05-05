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
      name: "Zucchini and corn fritters",
      ingredients: ["zucchini", "corn", "flour"],
    },
    {
      name: "Spinach and ricotta stuffed shells",
      ingredients: ["jumbo pasta shells", "ricotta cheese", "spinach"],
    },
    {
      name: "Pesto pasta with cherry tomatoes",
      ingredients: ["pasta", "basil pesto", "cherry tomatoes"],
    },
    {
      name: "Cauliflower and cheese soup",
      ingredients: ["cauliflower", "cheddar cheese", "milk"],
    },
    {
      name: "Hummus and vegetable wrap",
      ingredients: ["hummus", "tortilla", "vegetables"],
    },
    {
      name: "Cheesy cauliflower tots",
      ingredients: ["cauliflower", "cheddar cheese", "breadcrumbs"],
    },
    {
      name: "Butternut squash and apple soup",
      ingredients: ["butternut squash", "apple", "onion"],
    },
    {
      name: "Tuna and vegetable sushi rolls",
      ingredients: ["sushi rice", "tuna", "vegetables"],
    },
    {
      name: "Peanut butter and banana sandwich",
      ingredients: ["bread", "peanut butter", "banana"],
    },
    {
      name: "Vegetable and lentil curry",
      ingredients: ["lentils", "vegetables", "curry powder"],
    },
    {
      name: "Sweet potato fries with dipping sauce",
      ingredients: ["sweet potato", "cornstarch", "dipping sauce"],
    }
  ];

  //
