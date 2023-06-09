<script setup lang="ts">
import {ColorPicker} from 'vue-accessible-color-picker'
</script>

<template>
    <div>
        <ColorPicker/>
    </div>
</template>

<style lang="scss" scoped>
.vacp-color-picker{
    background-color: var(--var-color-background);
    color:#6f6f6f;
}

</style>