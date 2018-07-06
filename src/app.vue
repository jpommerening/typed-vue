<template>
  <div class="message">
    {{quoted}}
  </div>
</template>

<style scoped>
.message {
  font-size: 2em;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return { quotes: ["“", "”"] };
  },
  computed: {
    quoted(): string {
      return this.quotes.join(this.message);
    }
  }
});
</script>
