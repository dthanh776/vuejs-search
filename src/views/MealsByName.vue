<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
            @change="searchMeals" />
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();

// keyword để so sánh với giá trị nhập vào
const keyword = ref("");

// Gọi variable từ store.state 
const meals = computed(() => store.state.searchMeals);

// Tìm kiếm món ăn 
// Gọi từ store.actions 


const searchMeals = () => {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    } else {
        // gửi mutation "setSearchedMeals" tham số keyword.value,
        // xoá các bữa ăn đã được tìm kiếm trong trường hợp không có từ khóa được cung cấp.
        store.commit("setSearchedMeals", []);
    }
}
// Thanh địa chỉ khi nhập tay vào
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
});
</script>

<style></style>
