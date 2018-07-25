<template>
  <pre><code v-html="html"/></pre>
</template>

<script>
import highlight from "highlight.js";

export default {
  name: "code-sample",
  props: {
    lang: {
      type: String,
      default: "js"
    }
  },
  computed: {
    text() {
      return this.$slots.default.map(s => s.text).join("\n");
    },
    html() {
      const result = highlight.highlight(this.lang, this.text);
      return result.value;
    }
  }
};
</script>
