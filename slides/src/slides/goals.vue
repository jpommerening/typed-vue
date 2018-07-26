<template>
  <section>
    <header>
      <h2>Warum überhaupt?</h2>
    </header>

    <code-sample lang="ts" class="bullet sample">
      import { Ingredient as In } from "./Ingredients";
      import { Burger } from "./Burger";
    </code-sample>
    <code-sample lang="ts" class="bullet sample">
      const Hamburger =
        new Burger("Hamburger", 4.5, [In.Beef, In.Lettuce, In.Tomato]);
      const CheeseBurger =
        new Burger("Cheeseburger", 5.2, [In.Beef, In.Cheddar, In.Lettuce, In.Tomato]);
    </code-sample>
    <code-sample lang="ts" class="bullet sample">
      Cheeseburger.add({ ingredient: In.Pineapple, price: 1 }); // 😡
    </code-sample>
    <pre><code class="bullet error">
      Types of property 'ingredient' are incompatible.
        Type '"Pineapple"' is not assignable to type 'BurgerIngredient'.
    </code></pre>

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

.sample {
  width: 70%;
  margin: 0 2em;
}

.error {
  color: $red;
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
