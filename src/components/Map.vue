<template>
  <div ref="map" class="map-container">
    <div ref="map" class="map"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"; // Vue 3에서는 Vue를 import하지 않고 defineComponent와 onMounted를 가져옵니다.
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

export default defineComponent({
  name: "MapComponent",
  setup() {
    onMounted(() => {
      // 지도 컨테이너 선택
      const mapContainer = document.querySelector(".map") as HTMLElement;

      // 지도 레이어 생성
      const mapLayer = new TileLayer({
        source: new OSM(),
      });

      // 지도 뷰 생성
      const mapView = new View({
        center: fromLonLat([127.0, 37.5]),
        zoom: 6,
      });

      // 지도 생성
      const map = new Map({
        target: mapContainer,
        layers: [mapLayer],
        view: mapView,
      });
    });
  },
});
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center; /* 세로 방향 가운데 정렬 */
  width: 50%; /* 부모 요소에 대한 너비 */
  height: 500px;
  margin: 0 auto; /* 가운데 정렬을 위해 자식 요소를 수평으로 가운데 정렬 */
}

.map {
  width: 100%;
  height: 100%;
}
</style>
