<template>
  <div id="loaderContainer" v-if="loading">
    <span class="loader">
      <span class="loader-inner"></span>
    </span>
  </div>
  <div v-else></div>
</template>

<script lang="ts" src="./Loader.ts">
</script>
<style lang="scss" scoped src="./Loader.scss">
</style>

