<template>
  <section>
    <header>
      <h2>links</h2>
    </header>

    <ul>
      <li v-for="link in links" :key="link.href">
        <i :class="link.classes"/> <a :href="link.href" :title="link.title">{{link.title}}</a>
      </li>
    </ul>

  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          href: "https://alligator.io/vuejs/typescript-class-components/",
          title: "Writing Class-Based Components with Vue.js and TypeScript",
          classes: ["fa", "fa-link"]
        },
        {
          href: "https://alligator.io/vuejs/components-flow/",
          title: "Writing Vue.js Components with Flow",
          classes: ["fa", "fa-link"]
        },
        {
          href: "https://github.com/Microsoft/TypeScript-Vue-Starter",
          title: "Microsoft/Typescript-Vue-Starter",
          classes: ["fa", "fa-github"]
        },
        {
          href:
            "https://github.com/facebook/flow/issues/2691#issuecomment-315660535",
          title: "facebook/flow#2691",
          classes: ["fa", "fa-github"]
        },
        {
          href: "https://www.youtube.com/watch?v=05tNXJ-Kric&t=563s",
          title: "Pine Wu - var vetur = vscode + vue;",
          classes: ["fa", "fa-youtube"]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
</style>
