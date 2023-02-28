<template lang="">
  <div class="bg-white shadow-md rounded">
    <table class="text-left w-full border-collapse">
      <thead>
        <tr>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            #
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Name
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Quantity
          </th>

          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Inventory
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Price
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Total Price
          </th>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cartList"
          :key="index"
          class="hover:bg-grey-lighter"
        >
          <td class="py-4 px-6 border-b border-grey-light">{{ index }}</td>
          <td class="py-4 px-6 border-b border-grey-light">{{ item.name }}</td>
          <td class="py-4 px-6 border-b border-grey-light">
            <div class="flex justify-center">
              <button @click="handleDecreaseQuantity(item)">
                <svg
                  class="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                v-model="item.quantity"
              />

              <button @click="handleIncreaseQuantity(item)">
                <svg
                  class="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td class="py-4 px-6 border-b border-grey-light">
            {{ item.quantityInStock }}
          </td>
          <td class="py-4 px-6 border-b border-grey-light">{{ item.price }}</td>
          <td class="py-4 px-6 border-b border-grey-light text-center">
            {{ item.price * item.quantity }}
          </td>
          <td class="py-4 px-6 border-b border-grey-light">
            <button
              @click="handleDeleteToCart(item)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot class="bg-grey-lightest mt-4 mb-4">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td
            class="text-center font-bold uppercase text-sm text-grey-dark border-t border-grey-light"
          >
            Total:
          </td>
          <td
            class="text-center font-bold uppercase text-sm text-grey-dark border-t border-grey-light"
          >
            {{ totalPrice }}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
  <!-- Modal footer -->

  <div
    class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
  >
    <!-- <button
      data-modal-hide="defaultModal"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      I accept
    </button>
    <button
      @click="closeModal"
      data-modal-hide="defaultModal"
      type="button"
      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
    >
      Decline
    </button> -->
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  cartList: Array,
});
const emit = defineEmits(["delete-to-cart"]);

function handleIncreaseQuantity(item) {
  if (item.quantity < item.quantityInStock) {
    item.quantity++;
  } else {
    alert(
      `Số lượng được mua tối đa của sản phẩm này là ${item.quantityInStock}`
    );
  }
}

function handleDecreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    alert("Số lượng tối đa: 1");
  }
}

function handleDeleteToCart(item) {
  console.log("props.cartList", props.cartList);
  emit("delete-to-cart", item);
}

const totalPrice = computed(() => {
  return props.cartList.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
});
</script>
<style lang=""></style>
