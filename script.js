// start code

const getRecipe = async (id) => {
  const resRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipeJson = await resRecipe.json();

  return recipeJson;
};

const getChefBirthday = async (id) => {
  const recipe = getRecipe(id);

  return recipe;
};

(async () => {
  const recipe = getChefBirthday(3);
  console.log('ricetta: ', recipe);
})();
