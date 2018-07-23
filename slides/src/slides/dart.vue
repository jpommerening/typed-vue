<template>
  <section>
    <header>
      <h2>dart?</h2>
    </header>

    <img class="dart" src="../assets/dart.svg"/>
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

<style scoped lang="scss">
.dart {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 60vh;
  max-width: 80vw;
  transform: translate(22%, 22%) rotate(80deg);
}
</style>
