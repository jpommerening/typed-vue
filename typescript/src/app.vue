<template>
  <article>
    <h1>The Food Place</h1>
    <div><greeting-message :greetee="user"/></div>
    <div class="row">
      <div class="column">
        <food-menu title="Burgers" :meals="burgers" @add="add"/>
        <food-menu title="Pizzas" :meals="pizzas" @add="add"/>
      </div>
      <shopping-cart class="column" :shopping-cart="shoppingCart"/>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

import FoodMenu from "./components/FoodMenu.vue";
import GreetingMessage from "./components/GreetingMessage.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

import { Burger } from "./models/Burger";
import { Pizza } from "./models/Pizza";
import { ShoppingCart as ShoppingCartModel } from "./models/ShoppingCart";

import { BURGERS, PIZZAS } from "./data";

export default Vue.extend({
  components: { FoodMenu, GreetingMessage, ShoppingCart },
  data() {
    return {
      user: "Vue.js Meetup Aachen",
      shoppingCart: new ShoppingCartModel(),
      pizzas: PIZZAS,
      burgers: BURGERS
    };
  },
  methods: {
    add(item: Pizza | Burger) {
      this.shoppingCart.items.push(item);
    }
  }
});
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
}

.column {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
