<template>
  <div class="form-group core-component-formentry-inputtextarea">
    <label :for="name" class="col-sm-3 control-label"></label>
    <div :class="'col-sm-6 ' +cssClass">
      <textarea
        :name="name"
        :id="name"
        class="form-control"
        :rows="numberOfRows"
        readonly
        :placeholder="placeholder"
        v-model="inputVal"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts" src="./agpTextarea.ts">
</script>