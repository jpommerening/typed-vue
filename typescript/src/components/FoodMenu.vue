<template>
  <section>
    <h2>{{title}}</h2>
    <table>
      <tr v-for="meal in meals" :key="meal.id">
        <td>
          <span class="name"><a href="#" @click="add(meal)">{{meal.name}}</a></span>
          <ul class="ingredients">
            <li v-for="ingredient in meal.ingredients" :key="ingredient">{{ingredient}}</li>
          </ul>
        </td>
        <td>{{meal.price}} Moneys</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Meal } from "../models/Food";

export default Vue.extend({
  props: {
    title: {
      type: String
    },
    meals: {
      type: Array,
      default: []
    }
  },
  methods: {
    add(meal: Meal) {
      this.$emit("add", meal);
    }
  }
});
</script>

<style scoped>
.name {
  display: block;
}
.ingredients {
  list-style: none;
}
.ingredients > li {
  display: inline;
}
.ingredients > li + li:before {
  content: ", ";
}
</style>
