<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute();
// 函数表达式求值
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

// 回调函式:在...时间调用
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
// 此页面与MealsByLetter类似
</script>
