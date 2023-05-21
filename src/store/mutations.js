// Chuyển đổi trạng thái

const setSearchedMeals = (state, meals) => {
    state.searchMeals = meals || [];
};
const setMealsByLetter = (state, meals) => {
    state.mealsByLetter = meals || [];
};
const setMealsByIngredient = (state, meals) => {
    state.mealsByIngredient = meals || [];
};

export { setSearchedMeals, setMealsByLetter, setMealsByIngredient };
