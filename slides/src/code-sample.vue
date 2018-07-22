<template>
  <pre><code v-html="html"/></pre>
</template>

<script>
import highlight from "highlight.js";

export default {
  props: {
    lang: {
      type: String,
      default: "javascript"
    }
  },
  computed: {
    text() {
      return this.$slots.default.map(s => s.text).join("\n");
    },
    html() {
      const result = highlight.highlight(this.lang, this.text);
      console.log(result);
      return result.value;
    }
  }
};
</script>