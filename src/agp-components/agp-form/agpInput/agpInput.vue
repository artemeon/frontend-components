<template>
    <div class="form-group core-component-formentry-inputtext">
        <label :for="name" class="col-sm-3 control-label">{{ label }}</label>
        <div :class="'col-sm-6 ' + cssClass">
            <input
                type="text"
                :id="name"
                :name="name"
                class="form-control"
                :class="{ mandatoryFormElement: mandatory }"
                :readonly="readonly"
                v-model="inputVal"
            />
        </div>
    </div>
</template>

<script lang="ts" src="./agpInput.ts">
</script>
