<template>
  <span>{{greeting}}</span>
</template>

<script lang="ts">
export default {
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
};
</script>
