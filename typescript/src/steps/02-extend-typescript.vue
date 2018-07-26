<template>
  <span>{{greeting}}</span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Greeter",
  props: {
    greetee: String
  },
  data() {
    return { message: "Hello" };
  },
  computed: {
    greeting(): string {
      return `${this.message} ${this.greetee}!`;
    }
  }
});
</script>
