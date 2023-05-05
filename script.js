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
      ingredients: ["eggs", "cheddar cheese", "butter", "salt", "pepper"],
    },
    {
      name: "Oatmeal with banana and cinnamon",
      ingredients: ["rolled oats", "milk", "water", "banana", "cinnamon"],
    },
    {
      name: "Grilled cheese sandwich",
      ingredients: ["bread", "cheddar cheese", "butter"],
    },
    {
      name: "Sweet potato and black bean tacos",
      ingredients: [
        "sweet potato",
        "black beans",
        "taco seasoning",
        "tortillas",
        "avocado",
        "lime",
      ],
    },
    {
      name: "Chicken and vegetable stir fry",
      ingredients: [
        "chicken breast",
        "broccoli",
        "red bell pepper",
        "carrots",
        "onion",
        "garlic",
        "soy sauce",
        "brown sugar",
        "cornstarch",
        "rice",
      ],
    },
    {
      name: "Salmon and vegetable kebabs",
      ingredients: [
        "salmon fillet",
        "zucchini",
        "red onion",
        "red bell pepper",
        "olive oil",
        "lemon",
        "dill",
        "garlic",
      ],
    },
    {
      name: "Mini turkey meatballs with tomato sauce",
      ingredients: [
        "ground turkey",
        "breadcrumbs",
        "egg",
        "parmesan cheese",
        "onion",
        "garlic",
        "crushed tomatoes",
        "tomato paste",
        "oregano",
        "pasta",
      ],
    },
    {
      name: "Broccoli and cheddar cheese omelet",
      ingredients: [
        "eggs",
        "cheddar cheese",
        "broccoli",
        "butter",
        "salt",
        "pepper",
      ],
   
