// start code

// userid 34 https://dummyjson.com/users/{userId}

const getChef = async (id) => {
  const resRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await resRecipe.json();
  const resChef = await fetch(`aaahttps://dummyjson.com/users/${recipe.userId}`);
  const chef = await resChef.json();

  return chef;
};

const getChefBirthday = async (id) => {
  const chef = await getChef(id);
  return chef.birthDate;
};

(async () => {
  try {
    const chefBirthday = await getChefBirthday(3);
    console.log('Data di nascita dello chef: ', chefBirthday);
  } catch (err) {
    console.error(err.message);
  }
})();
