<template>
  <section>
    <header>
      <h2 class="bullet">Is it … <span class="bullet"><a class="dart" href="https://www.dartlang.org" title="Dart">Dart</a>?</span></h2>
    </header>

    <p>
      <ul class="bullets">
        <li>(Dart: Google, 2011)</li>
      </ul>
    </p>

    <img class="logo" src="../assets/dart.svg"/>
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

<style lang="scss" scoped>
a.dart:hover {
  color: #0175c2;
}

.logo {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 60vh;
  max-width: 80vw;
  transform: translate(22%, 22%) rotate(80deg);
}
</style>
