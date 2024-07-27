document.addEventListener('DOMContentLoaded', () => {
  const ingredientList = document.getElementById('ingredient-list');
  const recipeList = document.getElementById('recipe-list');

  const ingredients = [
      'Tomato',
      'Onion',
      'Garlic',
      'Chicken',
      'Beef'
  ];

  const recipes = {
      'Tomato': ['Tomato Soup', 'Tomato Salad'],
      'Onion': ['Onion Rings', 'Onion Soup'],
      'Garlic': ['Garlic Bread', 'Garlic Chicken'],
      'Chicken': ['Grilled Chicken', 'Chicken Curry'],
      'Beef': ['Beef Stroganoff', 'Beef Tacos']
  };

  ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      const button = document.createElement('button');
      button.textContent = 'Select';
      button.onclick = () => {
          li.classList.toggle('selected');
          updateRecipes();
      };
      li.appendChild(button);
      ingredientList.appendChild(li);
  });

  function updateRecipes() {
      const selectedIngredients = Array.from(document.querySelectorAll('#ingredient-list .selected')).map(li => li.textContent.replace('Select', '').trim());
      recipeList.innerHTML = '';

      const possibleRecipes = new Set();

      selectedIngredients.forEach(ingredient => {
          if (recipes[ingredient]) {
              recipes[ingredient].forEach(recipe => possibleRecipes.add(recipe));
          }
      });

      possibleRecipes.forEach(recipe => {
          const li = document.createElement('li');
          li.textContent = recipe;
          recipeList.appendChild(li);
      });
  }
});
