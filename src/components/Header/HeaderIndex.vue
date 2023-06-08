<script setup lang="ts">
import Member from './Member.vue';
</script>

<template>
    <div class = "headerWrapper">
        <div class="logo">
            CSS Generator
        </div>
        <Member/>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/main.scss";
.headerWrapper{
    display: flex;
    justify-content:space-between;
    align-items: end;
    font-weight:700;
    font-size:1.5rem;
}
.logo{
    color:var(--var-color-highlight);
    cursor: pointer;
    letter-spacing: 1px;
    @include hoverStyle;
}

</style>