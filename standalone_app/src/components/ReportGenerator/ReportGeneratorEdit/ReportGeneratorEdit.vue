<template>
  <div v-if="Object.keys(report).length!==0">
    <form>
      <div class="form-group">
        <label for="reportconfigarator_title">Titel</label>
        
        <input type="text" class="form-control" id="reportconfigarator_title" v-model="title">
      </div>

      <div class="form-group">
        <label for="reportconfigarator_description">Beschreibung</label>
        
        <textarea
          type="text"
          class="form-control"
          id="reportconfigarator_description"
          v-model="description"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./ReportGeneratorEdit.ts">
</script>
<style lang="scss" scoped src="./ReportGeneratorEdit.scss">
</style>


