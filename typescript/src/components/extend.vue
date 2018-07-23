<template>
    <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    twice() {
      return 2 * this.value; // 😨
    }
  }
});
</script>
