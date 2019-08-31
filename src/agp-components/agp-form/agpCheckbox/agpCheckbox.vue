
<template>
  <div class="form-group core-component-formentry-inputcheckbox">
    <label :for="name" class="col-sm-3 control-label"></label>
    <div class="col-sm-6">
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            :name="name"
            :value="value"
            :id="name"
            :class="cssClass"
            :checked="checked"
            :readonly="readonly"
            v-model="inputVal"
          />
          {{ value }}
        </label>
      </div>
    </div>

    <div class="col-sm-2 form-opener" v-if="opener">{{opener}}</div>
  </div>
</template>


<script lang="ts" src="./agpCheckbox.ts">
</script>