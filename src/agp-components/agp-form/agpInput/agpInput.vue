<template>
  <div class="form-group core-component-formentry-inputtext">
    <label :for="name" class="col-sm-3 control-label">{{value}}</label>
    <div :class="'col-sm-6 '+cssClass">
      <div class="input-group">
        <input
          type="text"
          :id="name"
          :name="name"
          class="form-control"
          :readonly="readonly"
          v-model="inputVal"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./agpInput.ts">
</script>