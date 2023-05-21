<!-- CHI TIẾT MÓN ĂN -->
<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" alt="" />
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div><strong> Category:</strong> {{ meal.strCategory }}</div>
            <div><strong> Area:</strong> {{ meal.strArea }}</div>
            <div><strong> Tag:</strong> {{ meal.strTags }}</div>
        </div>
        <!-- <pre>{{ meal }}</pre> -->
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(ingredient, index) of new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}.
                            {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <!-- v-for dùng để lấy 20 kết quả  -->
                    <template v-for="(measure, index) of new Array(20)" :key="index">
                        <!--  lọc kết quả ?->optional dùng để check meal[...] có dữ liệu hay không -->
                        <li v-if="meal[`strMeasure${index + 1}`]
                            ?.split(' ')
                            .join('')
                        ">
                            {{ index + 1 }}

                            {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="mt-4">
            <!-- Button youtube dừng props để truyền dữ liệu -->
            <YoutubeButton :href="meal.strYoutube">
                Go to Youtube</YoutubeButton>
            <a :href="meal.strSource" target="_blank"
                class="px-3 py-2 rounded border-2 border-red-600 text-red-500  hover:bg-red-500 hover:text-white transition-colors">View
                Original Source
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient.js";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

// Lấy chi tiết sản phẩm từ API
onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || {};
    });
});
</script>

<style></style>
