<template>
  <div>
    <div>
      {{ htmlString }}
    </div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      htmlString: '<p style="color:red;">This is red string.</p>',
    };
  },
});
</script>
