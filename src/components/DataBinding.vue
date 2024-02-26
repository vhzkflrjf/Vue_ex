<template>
  <h1>Hello, {{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      title: "World",
    };
  },
});
</script>
