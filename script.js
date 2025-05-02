// start code

// userid 34 https://dummyjson.com/users/{userId}

const getChef = async (id) => {
  let recipe;

  try {
    const resRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
    recipe = await resRecipe.json();
  } catch (error) {
    throw new Error('Cannot get Recipe!!!');
  }

  if (recipe.message) {
    throw new Error(recipe.message);
  }

  // console.log(recipe);

  let chef;

  try {
    const resChef = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    chef = await resChef.json();
  } catch (error) {
    throw new Error('Cannot get Chef!!!');
  }

  if (chef.message) {
    throw new Error(chef.message);
  }

  return chef;
};

const getChefBirthday = async (id) => {
  const chef = await getChef(id);
  return chef.birthDate;
};

(async () => {
  try {
    const chefBirthday = await getChefBirthday(1);
    console.log('Data di nascita dello chef: ', chefBirthday);
  } catch (err) {
    console.error(err.message);
  }
})();
