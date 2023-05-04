function addRow() {
  var newRow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td1.innerHTML = "New breakfast";
  td2.innerHTML = "New lunch";
  td3.innerHTML = "New dinner";

  newRow.appendChild(td1);
  newRow.appendChild(td2);
  newRow.appendChild(td3);

  document.getElementById("table").appendChild(newRow);
}

function editCell(cell) {
  var input = document.createElement("input");
  input.value = cell.innerHTML;

  cell.innerHTML = "";
  cell.appendChild(input);
}
