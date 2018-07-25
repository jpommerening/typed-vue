<template>
  <section>
    <header>
      <h2>worum geht's überhaupt?</h2>
    </header>

    <code-sample lang="ts">
      import thing from "other-thing";

      export default Vue.extend({
        props: {
          value: String
        },
        computed: {
          increment() {
            return 1 + this.value; // 😨
          }
        }
      });
    </code-sample>

  </section>
</template>

<script>
import CodeSample from "../components/code-sample";

export default {
  components: { CodeSample }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.triangle {
  width: 40vw;
  max-height: 90vh;
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;

  padding: 0;

  svg {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .dark-blue {
    fill: $vue-dark-blue;
  }
  .light-green {
    fill: $vue-light-green;
  }
}
</style>
