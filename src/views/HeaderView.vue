<script setup lang="ts">
import { useRouter } from "vue-router";
import Member from "../components/Header/Member.vue";
const router = useRouter()
const toHome = ()=>{
    router.push("/")
}
</script>

<template>
    <div class="headerWrapper">
        <div class="logo" @click = "toHome">
            CSS Generator
        </div>
        <Member />
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.headerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-weight: 700;
    font-size: 1.5rem;
}

.logo {
    color: var(--var-color-highlight);
    cursor: pointer;
    letter-spacing: 1px;
    @include textHoverStyle;
}
</style>