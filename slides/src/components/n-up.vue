<template>
  <div class="n-up"><slot/></div>
</template>

<script>
export default {
  name: "n-up"
};
</script>

<style lang="scss" scoped>
.n-up {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;

  > * {
    margin: 0;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 8em;
  }
}
</style>
