<template>
  <aside>
    <h2>Your Shopping Cart</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
          {{item.name}}
      </li>
    </ul>
    <em>Total: {{total}} Moneys</em>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import { Meal } from "../models/Food";
import { Buyable, ShoppingCart } from "../models/ShoppingCart";

export default Vue.extend({
  props: {
    shoppingCart: {
      type: ShoppingCart,
      default: new ShoppingCart()
    }
  },
  computed: {
    items(): Buyable[] {
      return this.shoppingCart.items;
    },
    total(): number {
      return this.shoppingCart.total();
    }
  }
});
</script>
