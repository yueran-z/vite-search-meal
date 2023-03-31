<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      @change="searchMeals"
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for meals"
    />
  </div>

  <!-- <pre>{{ meals }}</pre> -->
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute();
const keyword = ref(""); //ref需要用.value取值
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

// reload之后,URL能拿到input的资料和展示资料
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
