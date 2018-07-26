<template>
  <span>{{greeting}}</span>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    greetee: {
      type: String,
      required: true
    }
  }
})
export default class Greeter extends Vue {
  public message = "Hello";
  get greeting(): string {
    return `${this.message} ${this.greetee}!`;
  }
}
</script>
