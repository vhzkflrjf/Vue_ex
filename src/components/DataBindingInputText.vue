<template>
  <div>
    <input type="text" v-model="valueModel" />
    {{ valueModel }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      valueModel: "South Korea",
    };
  },
});
</script>
