<script setup>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";
import { ref } from "vue";
let cartList = ref([]);
function handleAddToCart(productItem) {
  const index = cartList.value.findIndex((cart) => cart.id === productItem.id);
  if (index !== -1) {
    cartList.value[index].quantity += 1;
  } else {
    const newProductItem = { ...productItem, quantity: 1 };
    cartList.value = [...cartList.value, newProductItem];
  }
}

function handleDeleteToCart(item) {
  cartList.value = cartList.value.filter((cart) => cart.id !== item.id);
}
console.log("cartList", cartList);
</script>

<template id="app">
  <header>
    <the-header :cartList="cartList" @delete-to-cart="handleDeleteToCart" />
  </header>
  <main>
    <product-list @add-to-cart="handleAddToCart" />
  </main>
</template>

<style scoped></style>
