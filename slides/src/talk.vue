<template>
  <article class="talk"><slot/></article>
</template>

<script>
import bespoke from "bespoke";
import backdrop from "bespoke-backdrop";
import bullets from "bespoke-bullets";
import classes from "bespoke-classes";
import fullscreen from "bespoke-fullscreen";
import hash from "bespoke-hash";
import keys from "bespoke-keys";
import notes from "bespoke-notes";
import touch from "bespoke-touch";

export default {
  mounted() {
    bespoke.from(
      { parent: this.$el, children: this.$slots.default.map(e => e.elm) },
      [
        backdrop(),
        bullets(".bullets > li, .bullet"),
        classes(),
        fullscreen(),
        hash(),
        keys("vertical"),
        notes({ visible: true }),
        touch("vertical")
      ]
    );
  }
};
</script>

<style lang="scss" src="./styles/main.scss">
</style>
