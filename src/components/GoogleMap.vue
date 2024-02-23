<template>
  <div ref="map" class="map-container">
    <div ref="map" class="map"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

export default defineComponent({
  name: "MapComponent",
  setup() {
    onMounted(() => {
      const mapContainer = document.querySelector(".map") as HTMLElement;

      const mapLayer = new TileLayer({
        source: new XYZ({
          url: "https://mt1.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}", // Google Maps API 사용
          maxZoom: 20, // 최대 줌 레벨
        }),
      });

      const mapView = new View({
        center: fromLonLat([127.0, 37.5]),
        zoom: 5, // 초기 줌 레벨
      });

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
  height: 400px;
}
</style>
