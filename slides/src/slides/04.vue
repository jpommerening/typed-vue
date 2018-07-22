<template>
  <section>
    <header>
      <h2>worum geht's überhaupt?</h2>
    </header>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    value: Number
  },
  computed: {
    message() {
      return this.value * 2;
    }
  }
};
</script>
