<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const a = ()=>{
  router.push("/gradient")
}
</script>

<template>
  <section class="homeWrapper">
    <div class="gradient" @click = "a">Gradient</div>
  </section>
</template>

<style lang="scss" scoped>
.homeWrapper {
  margin-top: 50px;
  display: flex;
  gap: 15px;
}

.gradient {
  width: 20%;
  padding: 15px;
  border-radius: 15px;
  outline: 1px solid var(--var-color-highlight);
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>