<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1>Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";
import Meals from '../components/Meals.vue'

const meals = ref([])


onMounted(async () => {

    for (let i = 0; i < 10; i++) {
        const response = await axiosClient.get("random.php");
        response.data = meals.value.push(response.data.meals[0])
    }

});
</script>

<style></style>