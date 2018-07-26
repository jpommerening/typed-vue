<template>
  <section>

    <ul class="bullets">
      <li class="let-speaker"><code><span class="hljs-keyword">let</span> speaker = { name: <span class="hljs-string">&quot;Jonas Pommerening&quot;</span> };</code></li>
      <li>
        <i class="fa fa-github"/> <a href="https://github.com/jpommerening" title="me on Github">jpommerening</a>
      </li>
      <li>
        <i class="fa fa-twitter"/> <a href="https://twitter.com/svckr" title="me on Twitter">svckr</a>
      </li>
      <li>
        <svg class="aixigo" viewBox="0 0 40 40">
          <path d="M 20 0 L 30 10 21 19 19 17 8 28 0 20 Z"/>
          <path d="M 20 40 L 40 20 32 12 21 23 19 21 10 30 Z"/>
        </svg>
        <a href="http://aixigo.com">aixigo</a>
      </li>
    </ul>
    
  </section>
</template>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.let-speaker {
  margin-bottom: 2em;
}

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
