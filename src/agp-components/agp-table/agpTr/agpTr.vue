<template>
  <tbody :class="'generalListSet ' + cssaddon">
    <tr>
      <slot></slot>
    </tr>
  </tbody>
</template>
<script lang="ts" src="./agpTr.ts">
</script>