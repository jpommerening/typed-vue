<template>
  <span>{{greeting}}</span>
</template>

<script>
export default {
  props: {
    greetee: String
  },
  data() {
    return { message: "Hello" };
  },
  computed: {
    greeting() {
      return `${this.message} ${this.greetee}!`;
    }
  }
};
</script>
