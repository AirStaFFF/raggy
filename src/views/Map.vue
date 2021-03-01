<template>
  <mapbox-map
    id="map"
    ref="map"
    :accessToken="accessToken"
    :key="index"
    :mapStyle="mapStyle"
    @mb-created="(mapboxInstance) => map = mapboxInstance" >
    <mapbox-cluster :data.sync="markers" />
  </mapbox-map>
</template>

<script>
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  export default {
    name: "Map",
    data() {
      return {
        accessToken: 'pk.eyJ1IjoiYWlyc3RhZmYiLCJhIjoiY2tscWJwemQ2MWIzejJ2bDZ3cWZqdHVnaCJ9.V8YkvVvSHLv_Ebd-EZxf7A',
        mapStyle: 'mapbox://styles/mapbox/light-v10',
        map: null,
        draw: null,
        index: 1,
        data: {
          "features": [
            {
              "type": "Marker",
              "geometry": {
                "type": "Marker",
                "coordinates": [ -151.5129, 63.1016 ]
              }
            },
            {
              "type": "Marker",
              "geometry": {
                "type": "Marker",
                "coordinates": [ -150.4048, 63.1224 ]
              }
            },
            {
              "type": "Marker",
              "geometry": {
                "type": "Marker",
                "coordinates": [ -151.3597, 63.0781 ]
              }
            },
          ]
        }
      };
    },
    computed: {
      markers() {
        return this.data
      }
    },
    mounted() {
      this.draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true
        }
      });
      this.map.addControl(this.draw, 'top-right');
      this.map.on('draw.create', this.updateArea);
      this.map.on('draw.delete', this.updateArea);
      this.map.on('draw.update', this.updateArea);
      this.map.on('load', this.updateArea);
      const marker = {
        "type": "Marker",
        "geometry": {
          "type": "Marker",
          "coordinates": [ -154.3597, 62.0781 ]
        }
      }
      this.data.features.push(marker)
    },
    methods: {
      updateArea(e) {
        const data = this.draw.getAll();
        const coordinates = data.features[0].geometry.coordinates[0]
        const marker = {
          "type": "Marker",
          "geometry": {
            "type": "Marker",
            "coordinates": [ -154.3597, 62.0781 ]
          }
        }
        this.data.features.push(marker)
      }
    }
  }
  // await asyncActions.flyTo({
  //   center: [30, 30],
  //   zoom: 5,
  //   speed: 1
  // })
</script>

<style lang="scss">
 #map {
   width: 500px;
   height: 500px;
   margin-left: auto;
   margin-right: auto;
 }
</style>
