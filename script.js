// Define a function to display the meal plan in the table.
function displayMealPlan(mealPlan) {
  const tbody = mealPlanTable.querySelector("tbody");
  tbody.innerHTML = "";

  // Add the column headers to the table
  const headerRow = document.createElement("tr");
  const dayHeader = document.createElement("th");
  dayHeader.textContent = "Day";
  headerRow.appendChild(dayHeader);
  meals.forEach((meal) => {
    const mealHeader = document.createElement("th");
    mealHeader.textContent = meal;
    headerRow.appendChild(mealHeader);
  });
  const allergensHeader = document.createElement("th");
  allergensHeader.textContent = "Allergens";
  headerRow.appendChild(allergensHeader);
  tbody.appendChild(headerRow);

  // Add the meal plan data to the table
  days.forEach((day) => {
    const row = tbody.insertRow();
    const dayCell = row.insertCell();
    dayCell.textContent = day;

    meals.forEach((meal) => {
      const mealCell = row.insertCell();
      mealCell.textContent = mealPlan[day][meal];
    });

    const allergensCell = row.insertCell();
    allergensCell.textContent = mealPlan[day]["Allergens"];
  });
}
