<template>
  <div class="form-group core-component-formentry-dropdown">
    <label :for="name" class="col-sm-3 control-label"></label>
    <div :class="'col-sm-6 '+cssClass ">
      <select
        :name="name"
        :id="name"
        :class="['form-control',icon_values ? 'selectpicker' : '', cssClass]"
        :disabled="readonly"
        v-model="selected"
      >
        <option value disabled hidden>{{ placeholder }}</option>
        <option v-for="(option,key) in values" :value="option.value" :key="key">{{option.value}}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" src="./agpSelect.ts">
</script>