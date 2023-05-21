<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{
            name: 'mealDetails',
            params: { id: meal.idMeal },
        }">
            <img :src="meal.strMealThumb" class="rounded-t-xl w-full object-cover" />
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                {{ truncateWords(meal.strInstructions, 20) }}
            </p>
            <div class="flex justify-between items-center">


                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <router-link :to="{
                    name: 'mealDetails',
                    params: { id: meal.idMeal },
                }"
                    class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600 hover:text-white transition-colors">View</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { truncateWords } from '../filters/index'

const props = defineProps({
    meal: Object,
});
</script>

<style></style>