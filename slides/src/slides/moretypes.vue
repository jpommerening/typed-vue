<template>
  <section>
    <header>
      <h2>Weitere Sprachen mit Typprüfung</h2>
    </header>

    <ul>
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" :title="link.title">{{link.title}}</a>
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
          href: "http://elm-lang.org",
          title: "elm (Haskell)"
        },
        {
          href: "https://clojurescript.org",
          title: "ClojureScript (LISP)"
        },
        {
          href: "https://reasonml.github.io",
          title: "ReasonML (OCaml)"
        }
      ]
    };
  }
};
</script>
