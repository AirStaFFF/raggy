<template>
  <div>
    <MglMap
      id="map"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @map-init="mapInitialized"
    />
    <button
      id="draw-btn"
      @click="draw"
    >
      Draw Button
    </button>
  </div>
</template>

<script>
  import Mapbox from "mapbox-gl";
  import { MglMap } from "vue-mapbox";

  export default {
    components: {
      MglMap
    },
    data() {
      return {
        accessToken: 'pk.eyJ1IjoiYWlyc3RhZmYiLCJhIjoiY2tsbDF5bzBpMjdxdjJucHJzbm5wZ2pzeSJ9.Cx9dOX6xDpkaI0BNiHuu4w',
        mapStyle: 'mapbox://styles/mapbox/dark-v10'
      };
    },
    created() {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = Mapbox;
    },
    methods: {
      initialized(map) {
        const Draw = new MapboxDraw()
        map.addControl(Draw)
      },
      draw() {

      }
    }
  };
</script>
<style>
  #map {
    height: 500px;
    width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
