<template>
  <n-up>
    <section class="typescript">
      <h2>
        <a href="https://typescriptlang.org" title="TypeScript">
          <img class="logo" src="../assets/typescript.svg" title="typescript" alt="typescript"/>
        </a>
      </h2>
      <p><a href="../typescript/">Demo! 🤓</a></p>
    </section>
    <section class="flow">
      <h2>
        <a href="https://flow.org" title="flow">
          <img class="logo" src="../assets/flow.svg" title="flow" alt="flow"/>
        </a>
      </h2>
      <p><a href="../flow/">Heute nicht 😌</a></p>
    </section>
  </n-up>
</template>

<script>
import NUp from "../components/n-up.vue";

export default {
  components: { NUp }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.flow,
.typescript {
  padding: 2em;

  h2 {
    height: 16vh;
  }
}

.flow {
  background-color: $flow-dark-gray;
  color: white;

  a:hover {
    color: $flow-yellow;
  }

  .logo {
    height: 7ex;
    max-width: 30vw;
  }
}
.typescript {
  background-color: $typescript-dark-blue;
  color: white;

  a:hover {
    color: $typescript-orange;
  }

  .logo {
    margin-top: 1ex;
    height: 5ex;
    max-width: 30vw;
  }
}
</style>
