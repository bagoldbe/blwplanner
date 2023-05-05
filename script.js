function generateMealPlan() {
  var safeFoods = [
    "Banana", "Avocado", "Oatmeal", "Sweet potato", "Butternut squash", "Chicken",
    "Salmon", "Tofu", "Eggs", "Yogurt", "Beef", "Lentils", "Quinoa", "Brown rice",
    "Pasta", "Peanut butter", "Bread", "Apples", "Oranges", "Berries", "Green beans",
    "Carrots", "Zucchini", "Squash", "Peas", "Potatoes", "Tomatoes", "Onions",
    "Garlic", "Cucumbers", "Celery", "Kale", "Spinach", "Broccoli", "Cauliflower",
    "Sweet potatoes", "Pumpkin", "Watermelon", "Cantaloupe", "Honeydew", "Grapefruit",
    "Mango", "Papaya", "Apricots", "Peaches", "Nectarines"
  ];
  var allergens = ["Peanuts", "Tree nuts", "Eggs", "Milk", "Fish", "Shellfish", "Soy", "Wheat"];
  var mealPlanTable = document.getElementById("meal-plan-table").getElementsByTagName('tbody')[0];
  mealPlanTable.innerHTML = '';
  for (var day = 0; day < 7; day++) {
    var breakfast = safeFoods[Math.floor(Math.random() * safeFoods.length)];
    var lunch = safeFoods[Math.floor(Math.random() * safeFoods.length)];
    var dinner = safeFoods[Math.floor(Math.random() * safeFoods.length)];
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
    var mealPlanRow = document.createElement("tr");
    mealPlanRow.innerHTML = "<td>" + (day + 1) + "</td><td>" + breakfast + "</td><td>" + lunch + "</td><td>" + dinner + "</td><td>" + allergensOffered.join(", ") + "</td>";
    mealPlanTable.appendChild(mealPlanRow);
  }
}

var generateMealPlanButton = document.getElementById("generate-meal-plan-button");
generateMealPlanButton.addEventListener("click", generateMealPlan);
