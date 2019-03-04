<template>
  <div class="alert alert-danger">
    <h4>{{title}}</h4>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{message}}</li>
    </ul>
  </div>
</template>


<script lang="ts" src="./Alert.ts">
</script>
<style lang="scss" scoped src="./Alert.scss">
</style>

