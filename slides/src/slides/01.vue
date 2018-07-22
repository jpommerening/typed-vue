<template>
  <section>
    <header>
      <h2>Typechecking Vue</h2>
      <p>Ein Selbstversuch</p>
    </header>

    <div class="triangle">
      <svg width="60" height="100" viewBox="0 0 60 100">
        <path d="M 0 0 L 60 100 L 60 0 z" class="light-green"/>
        <path d="M 30 0 L 60 50 L 60 0 z" class="dark-blue"/>
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../styles/vars.scss";

.triangle {
  min-width: 45vw;
  min-height: 70vh;
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  z-index: -1;
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
