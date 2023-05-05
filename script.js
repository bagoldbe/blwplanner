// Get a reference to the button and table elements.
const generateMealPlanButton = document.getElementById("generateMealPlanButton");
const mealPlanTable = document.getElementById("meal-plan-table");

const clientId = '745981578491-nv66g7p1d0n1acr86u55rga2cpk0gon5.apps.googleusercontent.com';
const apiKey = 'AIzaSyBH-ccnmdnoUCSlOjkjYg0Xyyi0CR-y800';
const spreadsheetId = '1dV087gGD2-eV0Yd8Cr6O6w9qC0mwq8pK48MKdEViAns';
const range = 'Sheet1!A:B'; // Adjust this range based on the location of your menu items in the sheet

// Define a function to load the Google Sheets API
async function loadSheetsApi() {
  while (typeof gapi === "undefined") {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  gapi.load('client:auth2', initClient);
}

// Initialize the Google Sheets API client
function initClient() {
  console.log("Google Sheets API loaded successfully.");
  gapi.client.init({
    apiKey: apiKey,
    clientId: clientId,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    cookie_policy: 'single_host_origin'
  }).then(() => {
    gapi.auth2.getAuthInstance().signIn();
  });
}

// Fetch menu items from Google Sheet
function fetchMenuItems() {
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: range,
  }).then((response) => {
    const menu = response.result.values.flat();
    return menu;
  });
}

// Define a function to generate the meal plan.
async function createMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const allergens = ["cow's milk", "egg", "finned fish", "peanut", "sesame", "shellfish", "soy", "tree nuts", "wheat"];
  const menu = await fetchMenuItems();
  
  // (rest of the code remains the same)
}

// Add an event listener to the button.
generateMealPlanButton.addEventListener("click", createMealPlan);

// Load the Google Sheets API
loadSheetsApi();
