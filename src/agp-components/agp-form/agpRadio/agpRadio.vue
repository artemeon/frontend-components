<template>
  <div class="form-group core-component-formentry-radiogroup">
    <label :for="name" class="col-sm-3 control-label"></label>
    <div class="col-sm-6">
      <div class="radio" v-for="(data,index) in values" :key="data.id">
        <label>
          <input
            type="radio"
            :name="data.name"
            :id="data.name+'_'+index"
            :value="data.value"
            :class="cssClass"
            :readonly="data.readonly"
            :checked="data.checked"
            v-model="inputVal"
          />
          {{ data.value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./agpRadio.ts">
</script>