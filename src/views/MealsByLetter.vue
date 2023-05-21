<template>
    <div class="flex justify-center gap-1 mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split('')" :key="letter">
            <!-- In ra bảng chữ cái  -->
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Gọi variable từ store.state 
const meals = computed(() => store.state.mealsByLetter);

// dùng watch để khi bấm vào chữ sẽ lập tức hiện ra món ăn

watch(route, () => {
    // Sử dụng actions để tìm món ăn
    store.dispatch('searchMealsByLetter', route.params.letter)

})



</script>

<style></style>