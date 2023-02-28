<template lang="">
  <div class="grid grid-cols-2">
    <div class="flex justify-center items-center">
      <img
        class="object-contain h-10/12 w-10/12 py-2 rounded-3xl"
        :src="'/src/assets/images/' + productDetail.image + '.webp'"
      />
    </div>
    <div>
      <div
        class="p-4 my-2 mr-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-extrabold">Name: </span>{{ productDetail.name }}
      </div>
      <div
        class="p-4 my-2 mr-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-extrabold">Description: </span
        >{{ productDetail.description }}
      </div>
      <div
        class="p-4 my-2 mr-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-extrabold">Price: </span>{{ productDetail.price }}
      </div>
      <div
        class="p-4 my-2 mr-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-extrabold">Inventory: </span
        >{{ productDetail.quantityInStock }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  productDetail: Object,
});
</script>
<style lang=""></style>
