<template>
  <section>
    <header>
      <h2>Full disclosure</h2>
    </header>

    <ul>
      <li data-bespoke-bullet>
        <i class="fa fa-github"/> <a href="https://github.com/jpommerening" title="me on Github">jpommerening</a>
      </li>
      <li data-bespoke-bullet>
        <i class="fa fa-twitter"/> <a href="https://twitter.com/svckr" title="me on Twitter">svckr</a>
      </li>
      <li data-bespoke-bullet>
        <svg class="aixigo" width="100" height="100" viewBox="0 0 100 100">
          <path d="M 50 0 L 75 25 L 52.5 47.5 L 47.5 42.5 L 20 70 L 0 50 Z"/>
          <path d="M 50 100 L 100 50 L 80 30 L 52.5 57.5 L 47.5 52.5 L 25 75 Z"/>
        </svg>
        <a href="http://aixigo.com">aixigo</a>
      </li>
    </ul>
    
  </section>
</template>

<style scoped lang="scss">
@import "../styles/vars.scss";

.aixigo {
  margin-bottom: -0.15em;
  width: 1em;
  height: 1em;

  path {
    fill: $vue-light-green;
  }
}

.fa {
  color: $vue-light-green;
}

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
