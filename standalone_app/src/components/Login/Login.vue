<template>
  <div>
    <form @submit="handleLogin">
      <Input type="text" placeholder="Benutzer" v-model="userName"></Input>
      <Input type="password" placeholder="Passwort" v-model="password"></Input>
      <Button html-type="submit">Anmelden</Button>
    </form>
  </div>
</template>
<script lang="ts" src="./Login.ts">
</script>
<style lang="scss" scoped src="./Login.scss">
</style>


