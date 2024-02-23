<template>
  <div>
    <h1>Openlayer App</h1>
    <Map />
    <!-- Map.vue 컴포넌트를 사용합니다. -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "@/components/Map.vue"; // Map.vue 컴포넌트를 import합니다.

export default defineComponent({
  name: "App",
  components: {
    Map, // 컴포넌트를 등록합니다.
  },
});
</script>

<style scoped>
/* 스타일링 */
</style>
