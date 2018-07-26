<template>
  <span>{{greeting}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Greeter extends Vue {
  @Prop(String) public greetee!: string;

  public message = "Hello";

  get greeting() {
    return `${this.message} ${this.greetee}!`;
  }
}
</script>
