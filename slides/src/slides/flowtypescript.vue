<template>
  <div class="side-by-side">
    <section class="flow">
      <h2><img class="logo" src="../assets/flow.svg" title="flow" alt="flow"/></h2>
    </section>
    <section class="typescript">
      <h2><img class="logo" src="../assets/typescript.svg" title="typescript" alt="typescript"/></h2>
    </section>
  </div>
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
@import "../styles/vars.scss";

.side-by-side {
  display: flex;
  align-items: stretch;
  flex-direction: row;
}

.flow,
.typescript {
  margin: auto;
  padding: 5em;
  flex-basis: 50%;
  height: 100%;

  h2 {
    height: 16vh;
  }
}

.flow {
  background-color: $flow-dark-gray;

  .logo {
    height: 7ex;
  }
}
.typescript {
  background-color: $typescript-dark-blue;

  .logo {
    margin-top: 1ex;
    height: 5ex;
  }
}
</style>
