const cells = document.querySelectorAll('td[contenteditable="true"]');

cells.forEach(cell => {
  cell.addEventListener('input', () => {
    localStorage.setItem('mealPlan', document.querySelector('table').outerHTML);
  });
});

if (localStorage.getItem('mealPlan')) {
  document.querySelector('table').outerHTML = localStorage.getItem('mealPlan');
}
