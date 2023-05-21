import axiosClient from "../axiosClient.js";

// Xử lý khi gọi API

// Tìm kiếm bằng từ khoá nhập từ ô input
const searchMeals = async ({ commit }, keyword) => {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", response.data.meals);
};

const searchMealsByLetter = async ({ commit }, letter) => {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    commit("setMealsByLetter", response.data.meals);
};

const searchMealsByIngredient = async ({ commit }, ingredient) => {
    const response = await axiosClient.get(`filter.php?i=${ingredient}`);
    commit("setMealsByIngredient", response.data.meals);
};

export { searchMeals, searchMealsByLetter, searchMealsByIngredient };
