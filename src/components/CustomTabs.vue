<template>
  <div>
    <router-link
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tab.to"
      :class="{ active: tab.active }"
    >
      <img :src="tab.icon" :alt="tab.iconAlt" />
      {{ tab.label }}
    </router-link>
    <!-- <span v-if="index !== tabs.length - 1"> | </span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

// 탭의 인터페이스 정의
interface Tab {
  label: string;
  to: RouteLocationNormalizedLoaded["path"];
  active: boolean;
  icon: string;
  iconAlt: string;
}

export default defineComponent({
  data() {
    // 탭 데이터
    const tabs: Tab[] = [
      {
        label: "Home",
        to: "/",
        active: false,
        icon: "/img/icons/apple-touch-icon.png",
        iconAlt: "Home Icon",
      },
      {
        label: "About",
        to: "/about",
        active: false,
        icon: "/images/about.png",
        iconAlt: "About Icon",
      },
      {
        label: "OSM",
        to: "/OpenlayerView",
        active: false,
        icon: "/images/map.png",
        iconAlt: "Services Icon",
      },
      {
        label: "Google",
        to: "/GoogleOpenlayerView",
        active: false,
        icon: "/images/gmap.png",
        iconAlt: "Contact Icon",
      },
    ];

    // 탭 데이터 반환
    return { tabs };
  },
});
</script>

<style scoped>
.router-link-exact-active {
  /* 현재 활성화된 탭의 스타일 */
  font-weight: bold;
}
.router-link-active {
  /* 활성화된 탭의 스타일 */
  color: red;
}
</style>
