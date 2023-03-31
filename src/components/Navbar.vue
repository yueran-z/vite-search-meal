<template>
  <header class="h-16 flex justify-between items-stretch bg-white shadow">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
        >Meals by letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-200"
        >Meals by ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>
