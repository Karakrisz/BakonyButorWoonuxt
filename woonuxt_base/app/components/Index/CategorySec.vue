<script lang="ts" setup>

const { data, refresh } = await useAsyncGql('getProductCategories');

import { ref, watchEffect } from 'vue';
const productCategories = ref([]);

watchEffect(() => {
  if (data.value?.productCategories?.nodes) {
    productCategories.value = data.value.productCategories.nodes;
   console.log('Kategóriák betöltve:', productCategories.value);
  }
});


const autoRefresh = () => {
  refresh();
  setTimeout(autoRefresh, 1000); 
};
autoRefresh();
</script>

<template>
  <main class="container">
    <div v-if="productCategories?.length"
      class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <CategoryCard 
        v-for="(category, i) in productCategories" 
        :key="category.id || i" 
        :node="category"
        :image-loading="i <= 2 ? 'eager' : 'lazy'" 
      />
    </div>
    <div v-else class="text-center py-8">
      <p>Kategóriák betöltése...</p>
    </div>
  </main>
</template>